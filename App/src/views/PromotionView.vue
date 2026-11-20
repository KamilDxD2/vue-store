
<template>
    <div id="PromV">
        <div class="prom" :class="promotionObject.class">
            <PromotionTile :promotion="promotionObject"/>
            <AppLoader v-if="promotionLoading" />
        </div>
        <div id="Shop">
            <p>{{ promotionObject.longDescription }}</p>
            <div id="indicator">
                <p v-if="promotionObject.finishCondition">Promotion ends: {{ promotionObject.finishCondition }}</p>
                <p v-else>Promotion ends: {{ new Date(promotionObject.finishDate).toLocaleString() }}</p>
            </div>
            <div id="Items">
                <AppLoader v-if="promotionLoading" />
                <ProductTile v-for="product in promotionObject.items" :key="product.id" :product="product" class="item"/>
            </div>
        </div>
    </div>
</template>

<script>
import ProductTile from '@/components/ProductTile.vue'; 
import PromotionTile from '@/components/PromotionTile.vue';
import AppLoader from '@/components/AppLoader.vue';


export default {
    data() {
        return {
            
        };
    },
    created() {
        this.$store.dispatch("FETCH_PROMOTION", this.$route.params.id);
    },
    methods: {
        
    },
    computed: {
        promotionObject() {
            return this.$store.getters.GET_PROMOTION_OBJECT;
        },
        promotionLoading() {
            return this.$store.getters.GET_PROMOTION_LOADING;
        }
    },
    
    components: {ProductTile, PromotionTile, AppLoader}
}
</script>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    #Shop {
        width: 75%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    #Shop #indicator {
        width: 100%;
        height: 2.5em;
        padding-right: 2em;
        border-radius: 0.25em;
        background-color: lightgray;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: darkslategray;
        font-weight: bold;
    }

    #Shop #Items {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        align-items: center;
        justify-content: space-evenly;
        gap: 1em;
    }

    #Shop #Items .item {
        height: 300px;
        width: 150px;
        background-color: whitesmoke;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        border: lightgray solid 1px;
        border-radius: 10px;
        text-decoration: none;
        color: darkslategray;
        font-weight: bold;

    }

    #Shop #Items .item img{
        width: 100px;
        height: 100px;
        object-fit: contain;
        border: lightgray solid 1px;
        background-color: white;
    }

    



</style>