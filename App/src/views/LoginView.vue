
<template>
    <div id="Login">
        <AppLoader v-show="loading" />
        <div v-show="user" class="Message">
            <h1>Info</h1>
            <p>You are succesfully logged in</p>
        </div>
        <form @submit="onSubmit" v-show="!user & !loading">
            <h1>Login</h1>
            <div v-show="error && email" id="error"> {{ error }} </div>
            <input v-model="email" placeholder="Email"/>
            <input type="password" v-model="password" placeholder="Password"/>
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
            logged: false,
            email: "",
            error: ""
        };
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();

            this.$store.dispatch("LOGIN_USER", {email: this.email, password: this.password })
                .then(() => {

                    const { email } = this.$store.getters.GET_CURRENT_USER;

                    if (email) this.logged = true;
                    else this.logged = false;

                    //this.$router.push("/");
                })
                .catch(() => {
                    this.error = "Incorrect email or password";
                    this.logged = false;
                });
        }
    },
                
    computed: {
        disabled() {
            if (this.email.length < 6) {
                this.error = "Email must have at least 6 characters";
                return true
                 
            }
            else {
                this.error = "";
            } 
        },
        user() {
            return this.$store.getters.GET_CURRENT_USER;
        },
        loading() {
            return this.$store.getters.GET_CURRENT_USER_LOADING;
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
#Login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, gainsboro, gray);
}

#Login form {
    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: white;
    border-radius: 10px;
}

#Login .Message {
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

#Login form h1{
    color: darkslategray;
    font-size: 2.5em;
}

#Login form input{
    width: 300px;
    height: 50px;
    border: darkslategray solid 1.5px;
    border-radius: 5px;
    padding-left: 1em;
    font-size: 1em;
}

#Login form #error{
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

#Login form button{
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

#Login form button:hover {
    background-color: #777;
    color: white;
}

#Login form button:active {
    background-color: #999;
}

#Login form button:disabled {
    filter: blur(1px);
    pointer-events: none;
}



</style>