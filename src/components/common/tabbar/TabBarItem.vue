<!--  -->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor: {
      type: String,
      default: '#ff4400'
    }
  },
  data() {
    return {
      // isActive: false,
    };
  },
  // 计算属性
  computed:{
    isActive() {
      // 通过判断router组件是否是激活状态下决定图标和文字是否是活跃状态
      return this.$route.path.indexOf(this.path) !== -1
    },
    // 激活状态下模块名颜色属性
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
};
</script>

<style>
/* @import url(); 引入css类 */
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
/* vertical-align用于消除紧贴的元素之前消除边际空间 */
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;

  vertical-align: middle;
  margin-bottom: 2px;
}
/* .active {
  color: #f40;
} */
</style>