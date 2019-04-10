/*
 * @Author: 姜定一
 * @Date: 2019-04-08 15:19:14
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-10 16:42:36
 */
<template>
  <div>

    <navigation :selectActive="0"></navigation>
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
</style>
