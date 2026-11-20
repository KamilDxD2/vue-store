<template>
  <div class="gradient" :class="this.promotion.class">
    <h1>{{ this.promotion.header }}</h1>
    <p>{{ this.promotion.description }}</p>
  </div>
</template>
  
<script>
export default {
  name: "PromotionTile",
  props: { promotion: Object },
  computed: {

  },


};
</script>
  
<style scoped></style>