<template>
    <RouterLink :to="`/product/${product.id}`">
      <img :src="imageSrc" :alt="product.name" @error="imageMissing = true"/>
      <div>{{ product.name }}</div>
      <div>{{ product.price }} $</div>    
      <AppRating :prop-rating="product.rate" :prop-amount="product.ratesNumber"/>
    </RouterLink>
</template>
  
<script>
import { RouterLink } from 'vue-router'
import AppRating from './AppRating.vue';
import AppLoader from './AppLoader.vue';

export default {
  name: "ProductTile",
  props: ["product", "key"],
  data() {
    return {
      imageMissing: false
    };
  },
  computed: {
    imageSrc() {
      if (this.imageMissing) {
        return "data:image/svg+xml," + encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">' +
          '<rect width="100" height="100" fill="#eeeeee"/>' +
          '<text x="50" y="55" font-size="12" text-anchor="middle" fill="#999999" font-family="sans-serif">no image</text></svg>'
        );
      }
      return `/src/assets/${this.product.image}`;
    },
    promotionLoading() {
      return this.$store.getters.GET_PROMOTION_LOADING;
    }
  },
  components: { RouterLink, AppRating, AppLoader }
  
  
};
</script>

<style scoped>
</style>