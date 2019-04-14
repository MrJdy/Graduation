/*
 * @Author: 姜定一
 * @Date: 2019-04-08 15:19:14
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-14 09:44:45
 */
<template>
  <div class="position-container">
    <div class="head-container">
      <div class="head-title pull-left">web前端</div>
      <div class="iconfont pull-right">&#xe601;</div>
    </div>
    <position-card :isPersonal="true" v-for="(item, index) in 10" :key="index"></position-card>
    <navigation :selectActive="0"></navigation>
  </div>
</template>

<script>
import PositionCard from '../../../components/positionCardComponent';
import Navigation from '../../../components/navigationComponent';
import { isLogin } from '../../../common/lib/helper.js';

export default {
  components: {
    PositionCard,
    Navigation
  },
  created () {
    if (!isLogin()) {
      this.$router.push({ path: '/' });
    }
  }
};
</script>

<style lang="scss" scoped>
.position-container {
  width: 7.5rem;
  padding: 1rem 0 1.31rem 0;
  font-family: "微软雅黑";
  .head-container {
    width: 7.5rem;
    height: 1rem;
    line-height: 1.3rem;
    background: #53cac3;
    color: #ffffff;
    font-size: 0.3rem;
    text-align: center;
    position: fixed;
    top: 0;
    padding: 0 0.3rem;
    .head-title {
      height: 1rem;
      line-height: 1.2rem;
      color: #ffffff;
      font-size: 0.28rem;
      font-family: "微软雅黑";
    }
    .iconfont {
      height: 1rem;
      line-height: 1.2rem;
      color: #ffffff;
      font-size: 0.36rem;
      font-weight: bold;
    }
  }
}
</style>
