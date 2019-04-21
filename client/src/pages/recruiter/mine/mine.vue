/*
 * @Author: 姜定一
 * @Date: 2019-04-13 09:38:05
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-14 09:43:57
 */
<template>
  <div class="mine-container">
    <mine :userData="userData" :isPersonal="false"></mine>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import Mine from '../../../components/mineComponent';
import { getCookie, isLogin } from '../../../common/lib/helper.js';
import { userInfo } from '../../../common/api/api.js';

export default {
  components: {
    Mine
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
      Indicator.open({
        spinnerType: 'triple-bounce'
      });
      userInfo({ phone: getCookie('token') }).then(res => {
        this.userData = res.data;
        Indicator.close();
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
