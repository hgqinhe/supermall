<!-- TabConrtrol -->
<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" 
    class="tab-control-item" 
    :class="{active: index === currentIndex}"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    //数据缓存 
   props: {
     titles: {
       type: Array,
       default() {
         return []
       }
     }
   },
   data() {
     return {
       currentIndex: 0
     }
   },
   methods: {
     itemClick(index) {
       this.currentIndex = index
      //  组件点击事件，子组件向父组件传递数据
      this.$emit('tab-click',index)
     }
   }
}
</script>

<style>
/* @import url(); 引入css类 */
.tab-control{
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.tab-control-item{
  flex: 1;
}
.tab-control-item span{
  padding: 5px;
}
.active{
  color: var(--color-high-text);
  
}
.active span{
  border-bottom: 3px solid var(--color-tint);
  
}
</style>