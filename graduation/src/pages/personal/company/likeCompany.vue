/*
 * @Author: 姜定一
 * @Date: 2019-04-17 10:57:39
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-17 11:02:01
 */

<template>
  <div class="company-container">
    <div class="head-container">
      <router-link to="/mine" class="pull-left">
        <span class="iconfont">&#xe677;</span>
      </router-link>
    </div>
    <company-card v-for="item in companyData" :key="item.company_id" :companyData="item"></company-card>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import CompanyCard from '../../../components/companyCardComponent';
import { isLogin, getCookie } from '../../../common/lib/helper.js';
import { queryLikeCompany } from '../../../common/api/api';

export default {
  components: {
    CompanyCard
  },
  data () {
    return {
      isSearch: false,
      companyData: [],
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
      queryLikeCompany(data).then((res) => {
        this.companyData = res.data;
        Indicator.close();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.company-container {
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
