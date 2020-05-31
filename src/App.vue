<template>
    <div>
        <el-container>
            <el-header>
                <el-menu mode="horizontal">
                    <el-menu-item index="1">
                        <img width="100px" src="https://img.kaikeba.com/logo-new@2x.png" alt="">
                    </el-menu-item>
                    <el-menu-item index="2">
                        <router-link to="/">首页</router-link>
                    </el-menu-item>
                    <el-menu-item index="3" style="float: right">
                        <router-link to="/cart">
                            <el-badge :value="cartTotal"><i class="el-icon-shopping-cart-1"></i></el-badge>
                        </router-link>
                    </el-menu-item>
                </el-menu>
            </el-header>
            <el-main>
                <!--切换页面的内容渲染-->
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import Vue from 'vue'
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    import {mapGetters} from 'vuex'

    Vue.use(ElementUI)

    export default {
        computed: {
            ...mapGetters({
                cartTotal: 'cartTotal'
            })
        }
    }
</script>

<style>
    h1 {
        color: red;
    }

    .image {
        width: 100%
    }
</style>