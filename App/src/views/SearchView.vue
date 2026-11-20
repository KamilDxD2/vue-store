
<template>
    <div id="SearchPage">
        <div id="SearchBar">
            <input v-model="query" placeholder="Search by name..." />
            <select v-model="category">
                <option value="">All categories</option>
                <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
        </div>

        <AppLoader v-if="loading" />
        <p v-else-if="filteredProducts.length === 0" id="NoResults">No products found</p>

        <div id="Search">
            <ProductTile v-for="product in filteredProducts" :key="product.id" :product="product" class="item" />
        </div>
    </div>
</template>

<script>
import ProductTile from '@/components/ProductTile.vue';
import AppLoader from '@/components/AppLoader.vue';


export default {
    data() {
        return {
            query: "",
            category: ""
        };
    },
    created() {
        if (this.products.length === 0) {
            this.$store.dispatch("FETCH_PRODUCTS")
        }
    },
    computed: {
        products() {
            return this.$store.getters.GET_PRODUCTS_LIST;
        },
        loading() {
            return this.$store.getters.GET_PRODUCTS_LOADING;
        },
        categories() {
            return [...new Set(this.products.map(product => product.category))];
        },
        filteredProducts() {
            const text = this.query.trim().toLowerCase();
            return this.products.filter(product =>
                product.name.toLowerCase().includes(text) &&
                (this.category === "" || product.category === this.category)
            );
        }
    },

    components: { ProductTile, AppLoader }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#SearchPage {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    padding: 2em;
}

#SearchBar {
    display: flex;
    gap: 1em;
}

#SearchBar input,
#SearchBar select {
    height: 40px;
    border: darkslategray solid 1.5px;
    border-radius: 5px;
    padding: 0 1em;
    font-size: 1em;
}

#SearchBar input {
    width: 300px;
}

#NoResults {
    color: darkslategray;
    font-weight: bold;
}

#Search {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: center;
    justify-content: space-evenly;
    gap: 1em;
}

#Search .item {
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
    text-align: center;
}

#Search .item img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    border: lightgray solid 1px;
    background-color: white;
}
</style>
