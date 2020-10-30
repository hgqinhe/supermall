<template>
  <div id="app">
    <!-- vue-router@3 keep-alive旧写法 -->
    <!-- <keep-alive>
      <router-view/>
    </keep-alive> -->
    <!-- vue-router@4. keep-alive新写法 -->
    <router-view v-slot="{ Component }" exclude="Detail">
      <transition name="fade" mode="out-in">
        <keep-alive exclude="Detail">
          <component :is="Component" exclude="Detail"></component>
        </keep-alive>
      </transition>
    </router-view>
    <main-tab-bar />
  </div>
</template>
<script>
import MainTabBar from "components/content/mainTabar/MainTabBar";
export default {
  components: {
    MainTabBar,
  },
};
</script>>

<style>
@import "assets/css/base.css";
</style>
