<!-- GoodsListItem -->
<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="" @load="imageLoad" />
    
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      // this.$bus.$emit('itemImageLoad')
      // console.log(this.$bus)
    }
  }
};
</script>

<style>
/* @import url(); 引入css类 */
.goods-item {
  padding-bottom: 50px;
  position: relative;
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-item .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-item .collect {
  position: relative;
}
.goods-item .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect-red.svg");
}
</style>