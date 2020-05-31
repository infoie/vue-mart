<template>
    <div>
        <h2>购物车</h2>
        <table border="1">
            <tr>
                <td>商品</td>
                <td>单价</td>
                <td>价格</td>
                <td>总量</td>
                <td>操作</td>
            </tr>
            <tr v-for="c in cart" v-bind:key="c.text">
                <td>{{c.id}}:{{c.title}}</td>
                <td>{{c.price}}</td>
                <td>{{c.price * c.count}}</td>
                <td>{{c.count}}</td>
                <td>
                    <button @click="minus(c.id)">-</button>
                    <button @click="add(c.id)">+</button>
                </td>
            </tr>
            <p>总价{{total}}元</p>
        </table>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Cart",
        computed: {
            ...mapState({
                cart: state => state.cart
            }),
            total() {
                return this.cart.reduce((sum, v) => {
                    return sum + v.price * v.count
                }, 0)
            }
        },
        methods: {
            add(i) {
                // this.data[i].count +=1
                this.$store.commit('cartadd', i)
            },
            minus(i) {
                this.$store.commit('cartminus', i)
            }
        }
    }
</script>

<style scoped>

</style>