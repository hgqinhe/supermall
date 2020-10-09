<!--  -->
<template>
  <div class="recommend">
    <div v-for="(item, i) in recommends" class="recommend-item" :key="i">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      seeData(data) {
        console.log(data)
      }
    }
}
</script>

<style>
/* @import url(); 引入css类 */
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 10px 0 15px;
  border-bottom: 10px solid #eee;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>