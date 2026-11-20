
<template>
    <div id="Register">
        <AppLoader v-show="loading" />
        <div v-show="exists" class="Message">
            <h1>Info</h1>
            <p>User already exists</p>
        </div>
        <div v-show="registered" class="Message">
            <h1>Thank you</h1>
            <p>For registering</p>
        </div>
        <form @submit="onSubmit" v-show="message">
            <h1>Register</h1>
            <div v-show="error && (email || password || password_check)" id="error"> {{ error }} </div>
            <input v-model="email" placeholder="Email"/>
            <input type="password" v-model="password" placeholder="Password"/>
            <input type="password" v-model="password_check" placeholder="Repeat Password"/>
            <button type="submit" :disabled="disabled">Send</button>
        </form>
    </div>
</template>

<script>
import { registerUser } from "@/api";
import AppLoader from "@/components/AppLoader.vue";

export default {
    data() {
        return {
            error: "",
            email: "",
            password:"",
            password_check: "",
            exists: false,
            registered: false,
            message: true,
            loading: false
        };
    },
    methods: {
        onSubmit(e) {
                console.log("submit");
                e.preventDefault();
                    this.loading = true;
                    this.message = false;

                    registerUser({ email: this.email, password: this.password })
                    .then((data) => {    
                        console.log(data);
                        this.exists = data.exists;            
                        this.registered = data.registered;
                        
                    })
                    .catch((err) => {
                        // w wypadku błędu zakładamy, że user się nie zarejestrował
                        this.registered = false;
                        this.exists = false;
                        this.error = "Registration failed, please try again";
                    })
                    .finally(() => {
                        // w obu wypadkach zatrzymujemy loader
                        this.loading = false;
                    });
            }
    },
    computed: {
        disabled() {
            if (this.email.length < 6 || this.password.length < 3 || this.password !== this.password_check) {
                let status = false;
                if (this.password.length < 3) {
                    this.error = "Password must have at least 3 characters";
                    status = true;
                }
                if (this.email.length < 6) {
                    this.error = "Email must have at least 6 characters";
                    status = true;
                }
                if (this.password !== this.password_check) {
                    this.error = "Passwords are not the same";
                    status = true;
                }
                return status;
            }
            else {
                this.error = "";
            } 
        },
    },
    components: { AppLoader }
}
    

</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
#Register {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, gainsboro, gray);
}

#Register form {
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: white;
    border-radius: 10px;
}

#Register .Message {
    width: 500px;
    height: 250px;
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: white;
    border-radius: 10px;
    color: darkslategray;
}

#Register form h1{
    color: darkslategray;
    font-size: 2.5em;
}

#Register form input{
    width: 300px;
    height: 50px;
    border: darkslategray solid 1.5px;
    border-radius: 5px;
    padding-left: 1em;
    font-size: 1em;
}

#Register form #error{
    width: 350px;
    height: 50px;
    border: rgba(255, 0, 0, 0.2) solid 1.5px;
    color: red;
    font-weight: 500;
    background-color: rgba(255, 0, 0, 0.1);
    border-radius: 5px;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
}

#Register form button{
    width: 300px;
    height: 50px;
    padding: 0.5em 1em;
    font-size: 1em;
    color: black;
    background-color: lightgray;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;
    transition: filter 0.5s;
    cursor: pointer;
    user-select: none;
}

#Register form button:hover {
    background-color: #777;
    color: white;
}

#Register form button:active {
    background-color: #999;
}

#Register form button:disabled {
    filter: blur(1px);
    pointer-events: none;
}



</style>