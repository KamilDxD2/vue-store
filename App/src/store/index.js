import { createStore } from 'vuex'

import promotions from './promotions'
import promotion from './promotion'
import user from './user'
import products from './products'

const modules = {
    promotions,
    promotion,
    products,
    user
}

export default createStore({
    modules,
})