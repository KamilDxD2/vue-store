<template>
    <div id="Rating">
        <div id="bar">
            <div id="minibar">
                <div id="color" :style="`width: ${this.propRating * 10}px`"></div>
            </div>
            
            <div id="filler"></div>
            <svg id="stars" width="50" height="15" fill-rule="evenodd">
                <defs>
                    <path fill="lightgray" id="star" d="M 5 0 L 6.5 4 L 10 4 L 7.5 6.5 L 8.5 10 L 5 8.25 L 1.5 10 L 2.5 6.5 L 0 4 L 3.5 4 Z L 0 -2.5 L 0 12.5 L 10 12.5 L 10 -2.5 h -10" />
                </defs>
                <use href="#star" x="0" y="2.5" width="10" height="10" />
                <use href="#star" x="10" y="2.5" width="10" height="10" />
                <use href="#star" x="20" y="2.5" width="10" height="10" />
                <use href="#star" x="30" y="2.5" width="10" height="10" />
                <use href="#star" x="40" y="2.5" width="10" height="10" />
            </svg>
        </div>
        <p>({{ this.propAmount }})</p>
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
        
    },
    props: ["propRating", "propAmount"]
}
</script>

<style scoped>
    #Rating {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100px;
        height: 25px;
        background-color: lightgray;
        border-radius: 10px;
        font-size: 0.75em;
    }

    #Rating #bar {
        width: 50px;
        height: 15px;
    }

    #Rating #minibar {
        height: 100%;
        width: 50px;
        background-color: gray;
        display: flex;

    }

    #Rating #color {
        height: 100%;
        background-color: yellow;
        display: flex;

    }
    

    #Rating #stars {
        position: relative;
        width: 50px;
        height: 15px;
        top: -15px;
    }


    
   
</style>