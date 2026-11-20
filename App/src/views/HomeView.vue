
<template>
    <div id="Promotions">
        <RouterLink v-for="promotion in promotionsList" :to="`/promotion/${promotion.id}`" :key="promotion.id" class="prom">
            <PromotionTile :promotion="promotion"/>
        </RouterLink>
    </div>
</template>

<script>
import PromotionTile from '@/components/PromotionTile.vue'; 

export default {
    data() {
        return {
            
        };
    },
    created() {
        if (this.promotionsList.length === 0){
            this.$store.dispatch("FETCH_PROMOTIONS");
        }
    },
    methods: {
        
    },
    computed: {
        promotionsList() {
            console.log(this.$store.getters.GET_PROMOTIONS_LIST);
            return this.$store.getters.GET_PROMOTIONS_LIST;
        }
    },
    
    components: {PromotionTile}
}
</script>