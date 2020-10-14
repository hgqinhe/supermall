<!-- Scroll菜单滚动插件 -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        scroll: null
      }
    },
//生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {

    })
  }
}
</script>

<style scoped>
/* @import url(); 引入css类 */

</style>