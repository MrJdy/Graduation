/*
 * @Author: 姜定一
 * @Date: 2019-04-08 15:19:14
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-12 22:26:20
 */
<template>
  <div class="position-container">
    <div class="head-container">
      <div class="head-title pull-left">web前端</div>
      <div class="iconfont pull-right">&#xe601;</div>
    </div>
    <div class="position-item-wrap">
      <div class="position-title pull-left">web前端开发工程师</div>
    </div>
    <navigation :selectActive="0"></navigation>
  </div>
</template>

<script>
import Navigation from '../../../components/navigationComponent';
import { isLogin } from '../../../common/lib/helper.js';

export default {
  components: {
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
  .position-item-wrap {
    width: 7.5rem;
    height: 2.5rem;
    background: #ffffff;
    padding: 0 0.48rem;
    margin-bottom: 0.14rem;
    .position-title {
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.32rem;
      font-family: "微软雅黑";
      color: #222222;
      margin-top: 0.3rem;
    }
  }
}
</style>
