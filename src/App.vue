<template>
  <div id="app">
    <tab-bar>
      <TabBarItem path="/home">
        <img slot="item-icon" src="./assets/img/tabbar/menu-home-normal.svg" alt />
        <img slot="item-icon-active" src="./assets/img/tabbar/menu-home-normal-active.svg" alt />
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category">
        <img slot="item-icon" src="./assets/img/tabbar/ts-tubiao_categoryDefault.svg" alt />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/ts-tubiao_categoryDefault--active.svg"
          alt
        />
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart">
        <img slot="item-icon" src="./assets/img/tabbar/shop-cart.svg" alt />
        <img slot="item-icon-active" src="./assets/img/tabbar/shop-cart-active.svg" alt />
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt />
        <img slot="item-icon-active" src="./assets/img/tabbar/profile-active.svg" alt />
        <div slot="item-text">我的</div>
      </TabBarItem>
    </tab-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import TabBar from "./components/common/tabbar/Tabbar.vue";
import TabBarItem from "./components/common/tabbar/TabBarItem.vue";
export default {
  data() {
    return {};
  },
  name: "app",
  components: {
    TabBar,
    TabBarItem
  },
  created() {
    this.$store.dispatch("adddata");
  },
  methods: {}
};
</script>

<style>
@import "./assets/css/base.css";
</style>
