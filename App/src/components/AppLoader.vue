<template>
    <div id="Loader">
        <img src="../assets/gif.gif">
    </div>
</template>

<script>

export default {

    data() {
        return {
            
        };
    },
    methods: {
        
    },
    computed: {
        
    }
}
</script>

<style scoped>
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
   }
   #Loader {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2em;
        height: 100%;
        width: 100%;
   }

   #Loader img {
        width: 100px;
        height: 100px;
   }

</style>