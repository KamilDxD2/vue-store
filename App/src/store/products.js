import { getProducts } from "@/api"

const products = {

    //state
    state() {
        return {
            productsList: [],
            productsLoading: false,
            productsError: null
        }
    },

    //mutations czyli setters
    mutations: {
        SET_PRODUCTS_LIST(state, newProducts) {
            state.productsList = newProducts
        },
        SET_PRODUCTS_LOADING(state, newLoading) {
            state.productsLoading = newLoading
        },
        SET_PRODUCTS_ERROR(state, newError) {
            state.productsError = newError
        }
    },

    //getters
    getters: {
        GET_PRODUCTS_LIST(state) {
            return state.productsList
        },
        GET_PRODUCTS_LOADING(state) {
            return state.productsLoading
        },
    },
    // tu zapytania do serwera z pomocą naszego api
    actions: {

        FETCH_PRODUCTS({ state, commit }) {

            // najpierw ustawiamy stan ładowania na true (czyli dane się ładują, teraz mógłby się pokazywać loader)

            commit("SET_PRODUCTS_LOADING", true)

            // potem wywołujemy funkcję z api, która
            // odbiera dane z serwera (poprzez axios) i ustawia listę produktów w store
            // w razie błędu ustawia error w store (catch)
            // niezależnie od błędu lub jego braku (finally), kończy loading

            getProducts()
                .then(data => {
                    commit("SET_PRODUCTS_LIST", data)
                })
                .catch(error => {
                    commit("SET_PRODUCTS_ERROR", "server error!!!")
                })
                .finally(() => {
                    commit("SET_PRODUCTS_LOADING", false)
                })


        }
    }

}

export default products