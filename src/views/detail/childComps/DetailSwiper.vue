<!-- DetailSwiper -->
<template>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item,index) in topImages" :key="index" >
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      detault() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>

<style scoped>
/* @import url(); 引入css类 */
.detail-swiper{
  height: 300px;
  overflow: hidden;
}
</style>