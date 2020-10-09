<!--  -->
<template>
  <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/home.svg">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/home-active.svg">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#ff4400">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/classify.svg">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/classify-active.svg">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#ff4400">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/cart.svg">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/cart-active.svg">
        </template>
        <template v-slot:item-text>
          <div>商品</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#ff4400">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/user.svg">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/user-active.svg">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>>
