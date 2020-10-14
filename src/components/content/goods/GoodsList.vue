<!-- GoodsList -->
<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :goods-item="item" :key="index"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
  export default {
    // 父传子组件数据
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsListItem
    }
}
</script>

<style>
/* @import url(); 引入css类 */
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>