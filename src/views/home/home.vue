<!-- 首页 -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!-- :banners 公共化banners数组 -->
    <scroll class="content" ref="scroll" 
    :porbe-type="3" 
    @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore" :is-click="true">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        v-on:tabClick="tabClick"/>
      <goods-list v-bind:goods="showGoods" />
      
    </scroll>
    <back-top @click.native="btnClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
// 首页子组件
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

// 引用的公共组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop"

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop", //默认值为pop流行
      isShowBackTop: false,
    };
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultidata();

    // 2. 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 请求数据
     * */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    /**
     * 事件监听相关的方法
     * */ 
    btnClick() {
      // 使用this.$refs获取scroll滚动条坐标
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      // 上拉加载监听事件
      this.isShowBackTop = (-position.y) > 1000
    },
    // 上拉加载事件触发商品列表翻页请求
    loadMore() {
      // console.log('上拉加载更多')
      this.getHomeGoods(this.currentType)

      // 刷新异步请求的商品列表，刷新BaseScroll滚动条内的展示窗口高度（item+图片高度）
      this.$refs.scroll.scroll.refresh()
    },

    /**
     * 网络请求数据
     * */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // 缓存请求的轮播图数据
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // 数组追加进另一个数组简写 array.push(...)
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp()
      });
    },
  },
  // 计算属性
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style scoped>
/* @import url(); 引入css类 */
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 9;
}
.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* .content{
  height: 300px;
  overflow: hidden;
} */
</style>