<!-- 商品详情页 -->
<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'

export default {
  components: {
    DetailNavBar
  },
  data() {
    return {
      iid: null,
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.iid = this.$route.params.iid;
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>

<style>
/* @import url(); 引入css类 */
</style>