<!-- 首页 -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      ref="tabControl1"
      @tab-click="tabClick"
      class="tab-control"
      v-show="isTabFixed"
    />
    <!-- :banners 公共化banners数组 -->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
      :is-click="true"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        ref="tabControl2"
        @tab-click="tabClick"
      />
      <goods-list v-bind:goods="showGoods" />
    </scroll>
    <back-top @click.native="btnClick" v-show="isShowBackTop" />
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
import BackTop from "components/content/backTop/BackTop";

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
      tabOffsetTop: 672,
      isTabFixed: false,
      saveY: 0,
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
    BackTop,
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
      // this.$refs.scroll.refresh()
      if (
        this.$refs.tabControl1 !== undefined ||
        this.$refs.tabControl2 !== undefined
      ) {
        this.$refs.tabControl1.currentIndex = index;
        // this.$refs.tabControl2.currentIndex = index;
      }
    },

    /**
     * 事件监听相关的方法
     * */
    btnClick() {
      // 使用this.$refs获取scroll滚动条坐标
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // 1. 判断BackTop是否显示上拉加载监听事件
      this.isShowBackTop = -position.y > 1000;

      // 2. 决定tabControl是否吸顶（position: fixed）
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    // 上拉加载事件触发商品列表翻页请求
    loadMore() {
      // // console.log('上拉加载更多')
      this.getHomeGoods(this.currentType);

      // // 刷新异步请求的商品列表，刷新BaseScroll滚动条内的展示窗口高度（item+图片高度）
      this.$refs.scroll.refresh();
    },
    swiperImageLoad() {
      // 获取tabOffsetTop的offsetTop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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

        this.$refs.scroll.finishPullUp();
      });
    },
  },
  // 计算属性
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },

  // 进入当前页面时跳转记录滚动条位置
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);

    this.$refs.scroll.refresh();
  },
  // 离开当前页面时记录滚动条位置
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultidata();

    // 2. 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 3.手动代码点击一次
    this.tabClick(0);
    // 1.图片加载完成的事件监听
    // 2.获取tabControl的offsetTop
    // 所有的组件都有一个属性$el: 用于获取组件的元素
    // this.tabOffsetTop =
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

  /* 使用浏览器  */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

/* .tab-control { */
/* 固定停留效果 */
/* position: sticky; */
/* top: 44px;
  background-color: #fff;
  z-index: 9;
} */
.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
/* .content{
  height: 300px;
  overflow: hidden;
} */
</style>