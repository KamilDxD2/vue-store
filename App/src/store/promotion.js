import { getPromotion, getProduct } from "@/api"

const promotion = {

    //state
    state() {
        return {
            promotionObject: {},
            promotionLoading: false,
            promotionError: null
        }
    },

    //mutations czyli setters
    mutations: {
        SET_PROMOTION_OBJECT(state, newPromotionObject) {
            state.promotionObject = newPromotionObject
        },
        SET_PROMOTION_LOADING(state, newPromotionLoading) {
            state.promotionLoading = newPromotionLoading
        },
        SET_PROMOTION_ERROR(state, newPromotionError) {
            state.promotionError = newPromotionError
        }
    },

    //getters
    getters: {
        GET_PROMOTION_OBJECT(state) {
            return state.promotionObject
        },
        GET_PROMOTION_LOADING(state) {
            return state.promotionLoading
        }
    },

    // tu zapytania do serwera z pomocą naszego api
    actions: {

        FETCH_PROMOTION({ state, commit, getters }, promotionId) {

            // zaczynamy pobierać dane

            commit("SET_PROMOTION_LOADING", true)

            // czyścimy poprzedni obiekt promocji

            commit("SET_PROMOTION_OBJECT", {})

            // poniższa funkcja ustala co się dziele przy jakimś błędzie

            const handleError = () => {
                commit("SET_PROMOTION_ERROR", "server error!!!")
                commit("SET_PROMOTION_LOADING", false)
            }


            const promotionsList = getters.GET_PROMOTIONS_LIST

            // na tym etapie warto wylogować czy mamy dane w store, pobrane z serwera

            console.log(promotionsList)

            const promotionFromStore = promotionsList.find(promotion => promotion.id === promotionId);


            const handlePromotion = (data) => {

                // tu dostajemy obiekty produktów z danej promocji

                const fetchPromises = data.items.map((productId) => getProduct(productId));

                // a jak je dostaniemy to ustalamy w store, dodając je do danych promotionObject
                // i kończymy ładowanie loadera

                Promise.all(fetchPromises)
                    .then((values) => {

                        const returnObject = { ...data, items: values };

                        commit("SET_PROMOTION_OBJECT", returnObject);
                        commit("SET_PROMOTION_LOADING", false);
                    })
                    .catch(handleError);
            }

            // jeśli jest promocja w store to ją obsługujemy ze store

            if (promotionFromStore) {
                handlePromotion(promotionFromStore)
            }

            //  jeśli nie ma, to pobieramy z serwera (np przy odświeżeniu strony)

            else {
                getPromotion(promotionId)
                    .then(handlePromotion)
                    .catch(handleError)

            }

        }
    }

}

export default promotion