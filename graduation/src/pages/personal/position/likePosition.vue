/*
 * @Author: 姜定一
 * @Date: 2019-04-17 00:13:04
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-17 00:20:51
 */

<template>
  <div class="position-container">
    <div class="head-container">
      <router-link to="/mine" class="pull-left">
        <span class="iconfont">&#xe677;</span>
      </router-link>
    </div>
    <position-card
      :isPersonal="true"
      v-for="item in positionData"
      :key="item.position_id"
      :positionData="item"
    ></position-card>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import PositionCard from '../../../components/positionCardComponent';
import { isLogin, getCookie } from '../../../common/lib/helper.js';
import { queryLikePosition } from '../../../common/api/api';

export default {
  components: {
    PositionCard
  },
  data () {
    return {
      isSearch: false,
      positionData: [],
      searchValue: ''
    };
  },
  created () {
    if (!isLogin()) {
      this.$router.push({ path: '/' });
    } else {
      Indicator.open({
        spinnerType: 'triple-bounce'
      });
      let data = {
        phone: getCookie('token')
      };
      queryLikePosition(data).then((res) => {
        this.positionData = res.data;
        Indicator.close();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.position-container {
  width: 7.5rem;
  padding-top: 1rem;
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
    .iconfont {
      height: 1rem;
      line-height: 1rem;
      color: #ffffff;
      font-size: 0.36rem;
      font-weight: bold;
    }
  }
}
</style>
