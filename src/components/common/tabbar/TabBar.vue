<!--  -->
<template>
  <div id="tab-bar">
    <slot></slot>    
    </div>
</template>

<script>

  export default {
    name: "TabBar"
}
</script>

<style>
/* @import url(); 引入css类 */
#tab-bar{
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* 选项卡上边框阴影 */
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
}

</style>