/*
 * @Author: 姜定一
 * @Date: 2019-04-09 22:11:15
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-17 10:40:45
 */
<template>
  <div class="company-container">
    <mt-search v-model="searchValue" :autofocus="true" v-show="isSearch">
      <!-- 点击，将当前数据传到职位详情页 -->
      <mt-cell
        v-for="item in companyData"
        :title="item.company_name"
        :value="item.company_local"
        :key="item.position_id"
        v-show="item.company_local.indexOf(searchValue) > -1 || item.company_name.indexOf(searchValue) > -1"
      ></mt-cell>
    </mt-search>
    <div class="head-container">
      <div class="head-title pull-left">公司信息</div>
      <div class="iconfont pull-right" @click="searchData">&#xe601;</div>
    </div>
    <company-card v-for="item in companyData" :key="item.company_id" :companyData="item"></company-card>
    <navigation :selectActive="1"></navigation>
  </div>
</template>

<script>
import { Indicator, Search, Cell } from 'mint-ui';
import Vue from 'vue';
import Navigation from '../../../components/navigationComponent';
import CompanyCard from '../../../components/companyCardComponent';
import { isLogin, getCookie } from '../../../common/lib/helper.js';
import { queryAllCompany } from '../../../common/api/api';
Vue.component(Search.name, Search);
Vue.component(Cell.name, Cell);

export default {
  components: {
    CompanyCard,
    Navigation
  },
  data () {
    return {
      isSearch: false,
      companyData: [],
      searchValue: ''
    };
  },
  watch: {
    searchValue: function (newvs, oldvs) {
      if (!newvs) {
        this.isSearch = false;
      }
    }
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
      queryAllCompany(data).then((res) => {
        this.companyData = res.data;
        Indicator.close();
      });
    }
  },
  methods: {
    searchData () {
      this.isSearch = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.company-container {
  width: 7.5rem;
  padding: 1rem 0 1.31rem 0;
  .mint-search {
    z-index: 999;
    width: 7.5rem;
    font-size: 0.26rem;
    background: rgba(255, 255, 255, 0.8);
    position: fixed;
    top: 0;
  }
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
}
</style>
