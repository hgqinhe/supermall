<!-- 商品详情页 -->
<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'

import {getDetail, Goods} from "network/detail"

export default {
  name: 'Datail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {}
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // 1.获取顶部的图片轮播数据
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages
      
      // 2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns,data.shopInfo.services )
    })
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>

<style>
/* @import url(); 引入css类 */
</style>