/*
 * @Author: 姜定一
 * @Date: 2019-04-09 22:11:15
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-10 16:37:32
 */
<template>
  <div class="company-container">
    <div class="head-title">公司</div>
    <navigation :selectActive="1"></navigation>
  </div>
</template>

<script>
import Navigation from '../../components/navigationComponent';
import HeaderTop from '../../components/headComponent';
import { isLogin } from '../../common/lib/helper.js';

export default {
  components: {
    Navigation,
    HeaderTop
  },
  created () {
    if (!isLogin()) {
      this.$router.push({ path: '/' });
    }
  }
};
</script>

<style lang="scss" scoped>
.company-container {
  width: 7.5rem;
  .head-title {
    width: 7.5rem;
    height: 1rem;
    line-height: 1.3rem;
    background: #53cac3;
    color: #ffffff;
    font-size: .3rem;
    text-align: center;
  }
}
</style>
