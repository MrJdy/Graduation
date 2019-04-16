/*
 * @Author: 姜定一
 * @Date: 2019-04-08 15:19:14
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-17 00:54:09
 */
<template>
  <div class="position-container">
    <mt-search v-model="searchValue" :autofocus="true" v-show="isSearch">
      <!-- 点击，将当前数据传到职位详情页 -->
      <mt-cell
        v-for="item in positionData"
        :title="item.company_name"
        :value="item.position_name"
        :key="item.position_id"
        v-show="item.position_name.indexOf(searchValue) > -1 || item.company_name.indexOf(searchValue) > -1"
        :to="{path:'/position-detail', query:{data: JSON.stringify(item)}}"
      ></mt-cell>
    </mt-search>
    <div class="head-container">
      <div class="head-title pull-left">职位信息</div>
      <div class="iconfont pull-right" @click="searchData">&#xe601;</div>
    </div>
    <position-card
      :isPersonal="true"
      v-for="item in positionData"
      :key="item.position_id"
      :positionData="item"
    ></position-card>
    <navigation :selectActive="0"></navigation>
  </div>
</template>

<script>
import { Indicator, Search, Cell } from 'mint-ui';
import Vue from 'vue';
import PositionCard from '../../../components/positionCardComponent';
import Navigation from '../../../components/navigationComponent';
import { isLogin, getCookie } from '../../../common/lib/helper.js';
import { queryAllPosition } from '../../../common/api/api';

Vue.component(Search.name, Search);
Vue.component(Cell.name, Cell);

export default {
  components: {
    PositionCard,
    Navigation
  },
  data () {
    return {
      isSearch: false,
      positionData: [],
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
      queryAllPosition(data).then((res) => {
        this.positionData = res.data;
        Indicator.close();
      });
    }
  },
  methods: {
    searchData () {
      this.isSearch = true;
    },
    goDetail (query) {
      let data = JSON.stringify(query);
      this.$router.push({ path: '/position-detail', query: { data } });
    }
  }
};
</script>

<style lang="scss" scoped>
.position-container {
  width: 7.5rem;
  padding: 1rem 0 1.31rem 0;
  font-family: "微软雅黑";
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
