<!-- Scroll菜单滚动插件 -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { Pullup } from "@better-scroll/pull-up";

export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    isClick: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
    };
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,  //滚动条是否到达底边
      click: this.isClick,    //是否准许BaseScroll插件内支持点击事件
      mouseWheel: true, //开启鼠标滚轮
      // disableMouse: false, //启用鼠标拖动
      // disableTouch: true //启用手指触摸
    });

    // 2.实时监听滚动条坐标
    this.scroll.on('scroll', (position) =>{
      // console.log(positon)
      this.$emit('scroll', position)
    })

    // 3.监听上拉事件，下拉BaseScroll事件，当底部下拉距离超过阈值
    this.scroll.on("pullingUp", () => {
      // console.log("上拉加载更多");
      this.$emit('pullingUp')
    });
  },
  methods: {
    // 滚动条坐标跳转
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(0, 0, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    }
  },
};
</script>

<style scoped>
/* @import url(); 引入css类 */
</style>