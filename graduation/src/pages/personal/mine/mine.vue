/*
 * @Author: 姜定一
 * @Date: 2019-04-09 23:18:50
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-12 16:57:39
 */
<template>
  <div class="mine-container">
    <mine :userData="userData"></mine>
    <navigation :selectActive="3"></navigation>
  </div>
</template>

<script>
import Mine from '../../../components/mineComponent';
import Navigation from '../../../components/navigationComponent';
import { getCookie, isLogin } from '../../../common/lib/helper.js';
import { userInfo } from '../../../common/api/api.js';

export default {
  components: {
    Mine,
    Navigation
  },
  data () {
    return {
      userData: {}
    };
  },
  created () {
    if (!isLogin()) {
      this.$router.push({ path: '/' });
    } else {
      userInfo({ phone: getCookie('token') }).then(res => {
        this.userData = res.data;
      });
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.mine-container {
  width: 7.5rem;
}
</style>
