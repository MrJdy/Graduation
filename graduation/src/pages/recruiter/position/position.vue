/*
 * @Author: 姜定一
 * @Date: 2019-04-13 09:38:25
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-14 09:43:25
 */
<template>
  <div class="position-container">
    <div class="head-container">
      <router-link to="/hr-mine" class="iconfont pull-left">&#xe677;</router-link>
      <div class="head-title">职位信息</div>
      <router-link to="/edit-position" class="iconfont pull-right">&#xe62f;</router-link>
    </div>
    <position-card :isPersonal="false" v-for="(item, index) in 10" :key="index"></position-card>
  </div>
</template>

<script>
import PositionCard from '../../../components/positionCardComponent';
import { isLogin } from '../../../common/lib/helper.js';

export default {
  components: {
    PositionCard
  },
  created () {
    if (!isLogin()) {
      this.$router.push({ path: '/' });
    }
  },
  methods: {
    toEdit () {
      console.log(11111);
      this.$router.push({ path: '/edit-position' });
    }
  }
};
</script>

<style lang="scss" scoped>
.position-container {
  width: 7.5rem;
  padding: 1rem 0 1.31rem 0;
  font-family: "微软雅黑";
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
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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
