
<template>
  <div id="app">
    <Header></Header>
    <RouterView />
    <AppLoader v-show="promotionsLoading" />
    <Footer></Footer>
  </div>
</template>

<script>
import './styles/main.css';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import PromotionTile from './components/PromotionTile.vue';
import AppLoader from './components/AppLoader.vue';




export default {
  data() {
    return {
    
    };
  },
  beforeCreate() {
    this.$store.dispatch("FETCH_CURRENT_USER");
  },
  components: { Header, Footer, PromotionTile, AppLoader },
  computed: {
    promotionsLoading() {
      return this.$store.getters.GET_PROMOTIONS_LOADING;
    }
  }

};
</script>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


</style>