/*
 * @Author: 姜定一
 * @Date: 2019-04-09 23:11:57
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-10 16:42:07
 */
<template>
  <div class="message-container">
    <div class="head-title">消息</div>
    <navigation :selectActive="2"></navigation>
  </div>
</template>

<script>
import Navigation from "../../components/navigationComponent";
import { isLogin } from "../../common/lib/helper.js";

export default {
  components: {
    Navigation
  },
  created() {
    if (!isLogin()) {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="scss" scoped>
.message-container {
  width: 7.5rem;
  .head-title {
    width: 7.5rem;
    height: 1rem;
    line-height: 1.3rem;
    background: #53cac3;
    color: #ffffff;
    font-size: 0.3rem;
    text-align: center;
    position: fixed;
    top: 0;
  }
}
</style>
