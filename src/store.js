import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        cart: JSON.parse(localStorage.getItem('cart')) || []
    },
    mutations: {
        addCart(state, item) {
            console.log('添加购物车')
            let good = state.cart.find(v => v.id == item.id)
            if (good) {
                good.count += 1
            } else {
                state.cart.push({...item, count: 1})
            }
        },
        cartadd(state, id) {
            state.cart.find(v => v.id == id).count += 1
        },
        cartminus(state, id) {
            if (state.cart.find(v => v.id == id).count > 1)
                state.cart.find(v => v.id == id).count -= 1
        }
    },
    getters: {
        cartTotal: state => {
            let sum = 0
            state.cart.forEach(v => {
                sum += v.count
            })
            return sum
        }
    }
})

store.subscribe((mutation, state) => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
})

export default store