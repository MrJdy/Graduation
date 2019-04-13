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
