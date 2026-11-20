<template>
    <div id="Nav">
        <RouterLink to="/" exact class="Link">Home</RouterLink>
        <RouterLink to="/about" class="Link">About</RouterLink>
        <RouterLink to="/search" class="Link">Search</RouterLink>
        <RouterLink to="/nnn" class="Link">Not found</RouterLink>
        <div id="Left">
            <p v-show="user" id="EM">{{ user?.email }}</p>
            <RouterLink v-show="user" @click="logout" to="/login" class="LinkB">Logout</RouterLink>
            <AppLoader v-show="loading" id="loader" />
            <RouterLink v-show="!user" to="/login">
                <a class="LinkB" v-show="!user">Login</a>
            </RouterLink>
            <RouterLink v-show="!user & !loading" to="/register" class="LinkB">Register</RouterLink>
        </div>

    </div>
</template>

<script>

import { RouterLink } from 'vue-router'
import AppLoader from './AppLoader.vue';

export default {
    data() {
        return {

        };
    },
    methods: {
        logout() {
            this.$store.dispatch("LOGOUT_USER")
                .then(() => {
                    this.$router.push("/login"); // redirect to login
                });
        }
    },
    components: { RouterLink, AppLoader },
    computed: {
        user() {
            return this.$store.getters.GET_CURRENT_USER;
        },
        loading() {
            return this.$store.getters.GET_CURRENT_USER_LOADING;
        },
    }
}
</script>

<style scoped>
#Nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 2em;
    gap: 2em;
    width: 100%;
    height: 4.5em;
}

#Nav .Link {
    display: inline-block;
    padding: 0.5em 1em;
    background-color: #555;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
    cursor: pointer;
    user-select: none;
}

#Nav #Left {
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    gap: 2em;
}

#Nav #Left #EM {
    display: flex;
    align-items: center;
    justify-content: center;
}

#Nav .LinkB {
    display: flex;
    padding-right: 2em;
    margin-left: auto;
    display: inline-block;
    padding: 0.5em 1em;
    background-color: cornflowerblue;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
    cursor: pointer;
    user-select: none;
}

#Nav .LinkB:hover {
    background-color: royalblue;
}

#Nav .LinkB:active {
    background-color: dodgerblue;
}

#Nav .Link:hover {
    background-color: #777;
}

#Nav .Link:active {
    background-color: #999;
}

#Nav #loader {
    background-color: gray;
    border-radius: 50px;
    scale: 0.20;
    margin-left: 80%;
}
</style>
