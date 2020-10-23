<template>
  <div id="app">
    <!-- vue@2 keep-alive旧写法 -->
    <!-- <keep-alive>
      <router-view/>
    </keep-alive> -->
    <!-- vue@3 keep-alive新写法 -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="Component"></component>
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
