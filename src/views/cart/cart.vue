<!-- 购物 -->
<template>
  <div class="wrapper" ref="aaa">
    <ul class="content">
      <button>按钮</button>
      <li>购物列表1</li>
      <li>购物列表2</li>
      <li>购物列表3</li>
      <li>购物列表4</li>
      <li>购物列表5</li>
      <li>购物列表6</li>
      <li>购物列表7</li>
      <li>购物列表8</li>
      <li>购物列表9</li>
      <li>购物列表10</li>
      <li>购物列表11</li>
      <li>购物列表12</li>
      <li>购物列表13</li>
      <li>购物列表14</li>
      <li>购物列表15</li>
      <li>购物列表16</li>
      <li>购物列表17</li>
      <li>购物列表18</li>
      <li>购物列表19</li>
      <li>购物列表20</li>
      <li>购物列表21</li>
      <li>购物列表22</li>
      <li>购物列表23</li>
      <li>购物列表24</li>
      <li>购物列表25</li>
      <li>购物列表26</li>
      <li>购物列表27</li>
      <li>购物列表28</li>
      <li>购物列表29</li>
      <li>购物列表30</li>
      <li>购物列表31</li>
      <li>购物列表32</li>
      <li>购物列表33</li>
      <li>购物列表34</li>
      <li>购物列表35</li>
      <li>购物列表36</li>
      <li>购物列表37</li>
      <li>购物列表38</li>
      <li>购物列表39</li>
      <li>购物列表40</li>
      <li>购物列表41</li>
      <li>购物列表42</li>
      <li>购物列表43</li>
      <li>购物列表44</li>
      <li>购物列表45</li>
      <li>购物列表46</li>
      <li>购物列表47</li>
      <li>购物列表48</li>
      <li>购物列表49</li>
      <li>购物列表50</li>
      <li>购物列表51</li>
      <li>购物列表52</li>
      <li>购物列表53</li>
      <li>购物列表54</li>
      <li>购物列表55</li>
      <li>购物列表56</li>
      <li>购物列表57</li>
      <li>购物列表58</li>
      <li>购物列表59</li>
      <li>购物列表60</li>
      <li>购物列表61</li>
      <li>购物列表62</li>
      <li>购物列表63</li>
      <li>购物列表64</li>
      <li>购物列表65</li>
      <li>购物列表66</li>
      <li>购物列表67</li>
      <li>购物列表68</li>
      <li>购物列表69</li>
      <li>购物列表70</li>
      <li>购物列表71</li>
      <li>购物列表72</li>
      <li>购物列表73</li>
      <li>购物列表74</li>
      <li>购物列表75</li>
      <li>购物列表76</li>
      <li>购物列表77</li>
      <li>购物列表78</li>
      <li>购物列表79</li>
      <li>购物列表80</li>
      <li>购物列表81</li>
      <li>购物列表82</li>
      <li>购物列表83</li>
      <li>购物列表84</li>
      <li>购物列表85</li>
      <li>购物列表86</li>
      <li>购物列表87</li>
      <li>购物列表88</li>
      <li>购物列表89</li>
      <li>购物列表90</li>
      <li>购物列表91</li>
      <li>购物列表92</li>
      <li>购物列表93</li>
      <li>购物列表94</li>
      <li>购物列表95</li>
      <li>购物列表96</li>
      <li>购物列表97</li>
      <li>购物列表98</li>
      <li>购物列表99</li>
      <li>购物列表100</li>
    </ul>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
// import { Pullup } from '@better-scroll/pull-up'

// BScroll.use(PullUp)
  export default {
    name: "Cate",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      // 默认情况下BScroll是不可以实时的监听滚动位置
      // probe侦测
      // 0，1都是不侦测实时的位置
      // 2：在手指滚动的过程中侦测，
      // 3: 只要是滚动，都侦测
      // const bscroll =  new BScroll(this.$refs.aaa,{
      //   probeType: 3,
      //   // click: false,
      //   pullUpLoad: true
      // })

      // bscroll.on('scroll', (position) => {
      //   // console.log(position);
      // })

      // // 下拉BaseScroll事件，当底部下拉距离超过阈值
      // bscroll.on('pullingUp', () => {
      //   console.log('上拉加载更多');

      //   // 等数据请求完成，并且将新的数据展示出来后
      //   setTimeout(() => {
      //     bscroll.finishPullUp()
      //   }, 2000)
      // })

      // const hooks = bscroll.scroller.actionsHandler.hooks
      // // 点击事件click
      // hooks.on('click', () => {
      //   console.log('btnClick')
      // })
    },
    methods: {
      btnClick() {
        console.log('btnClick')
      }
    }
}
</script>

<style scoped>
/* @import url(); 引入css类 */
.wrapper{
  height: 150px;
  background-color: red;

  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>