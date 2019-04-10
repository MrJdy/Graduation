/*
 * @Author: 姜定一
 * @Date: 2019-04-08 15:10:55
 * @Last Modified by:   姜定一
 * @Last Modified time: 2019-04-10 15:10:55
 */
<template>
  <div class="nav-container border-top">
    <router-link to="/position" class="item-wrap">
      <span
        :class="selectActive === 0 ? 'iconfont icon icon-1 active' : 'iconfont icon icon-1'"
      >&#xe638;</span>
      <span class="title">职位</span>
    </router-link>
    <router-link to="/company" class="item-wrap">
      <span
        :class="selectActive === 1 ? 'iconfont icon icon-2 active' : 'iconfont icon icon-2'"
      >&#xe618;</span>
      <span class="title">公司</span>
    </router-link>
    <router-link to="/message" class="item-wrap">
      <span
        :class="selectActive === 2 ? 'iconfont icon icon-3 active' : 'iconfont icon icon-3'"
      >&#xe61c;</span>
      <span class="title">信息</span>
    </router-link>
    <router-link to="/mine" class="item-wrap">
      <span
        :class="selectActive === 3 ? 'iconfont icon icon-4 active' : 'iconfont icon icon-4'"
      >&#xe616;</span>
      <span class="title">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    selectActive: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
.border-top::before,
.border-topbottom::before,
.border-topleft::before,
.border-topright::before {
  border-color: #c6c6c6;
}
.nav-container {
  width: 7.5rem;
  height: 1.31rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  .item-wrap {
    width: 1.86rem;
    height: 1.3rem;
    padding-top: 0.2rem;
    .icon {
      display: block;
      width: 1.86rem;
      height: 0.6rem;
      text-align: center;
      font-size: 0.5rem;
      color: #909090;
    }
    .icon-1 {
      font-size: 0.6rem;
    }
    .active {
      color: #53cac3;
    }
    .title {
      display: block;
      width: 1.86rem;
      text-align: center;
      color: #909090;
      font-size: 0.2rem;
    }
  }
}
</style>
