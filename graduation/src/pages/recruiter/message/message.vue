<template>
  <div class="message-container">
    <div class="head-container">
      <router-link to='/hr-mine' class="iconfont pull-left">&#xe677;</router-link>
      <div class="head-title">我的消息</div>
    </div>
  </div>
</template>

<script>
import { isLogin } from '../../../common/lib/helper.js';

export default {
  components: {},
  created () {
    if (!isLogin()) {
      this.$router.push({ path: '/' });
    }
  }
};
</script>

<style lang="scss" scoped>
.message-container {
  width: 7.5rem;
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
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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
