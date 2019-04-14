/*
 * @Author: 姜定一
 * @Date: 2019-04-13 09:39:09
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-14 21:23:40
 */
<template>
  <div class="position-item-wrap" @click="toEdit(isPersonal)">
    <div class="clearFix">
      <div class="position-title pull-left">{{positionData.position_name}}</div>
      <div class="position-salary pull-right">{{positionData.position_salary}}</div>
    </div>
    <div class="clearFix">
      <div class="company-name pull-left">{{positionData.company_name}}</div>
    </div>
    <div class="label-wrap clearFix">
      <div class="label-item pull-left">{{positionData.company_local}}</div>
      <div class="label-item pull-left">{{positionData.position_time}}</div>
      <div class="label-item pull-left">{{positionData.position_education}}</div>
    </div>
    <div class="hr-msg clearFix">
      <img class="pull-left" :src="positionData.user_avatar">
      <div class="hr-name pull-left">{{positionData.user_name}} · 招聘者</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isPersonal: {
      type: Boolean,
      default: true
    },
    positionData: {
      type: Object
    }
  },
  methods: {
    toEdit (isPersonal) {
      if (isPersonal) {
        // 进入详情页
      } else {
        let data = JSON.stringify(this.positionData);
        this.$router.push({ path: '/edit-position', query: { data } });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.position-item-wrap {
  width: 7.5rem;
  height: 2.5rem;
  background: #ffffff;
  padding: 0 0.48rem;
  margin-bottom: 0.14rem;
  .position-title {
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.32rem;
    color: #222222;
    margin-top: 0.3rem;
  }
  .position-salary {
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.26rem;
    font-weight: bold;
    color: #53cac3;
    margin-top: 0.4rem;
  }
  .company-name {
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.26rem;
    color: #686868;
    padding-left: 0.02rem;
    margin-top: 0.1rem;
  }
  .label-wrap {
    height: 0.38rem;
    margin-top: 0.2rem;
    padding-left: 0.02rem;
    .label-item {
      display: inline-block;
      height: 0.38rem;
      line-height: 0.38rem;
      font-size: 0.2rem;
      color: #b5b5b5;
      text-align: center;
      background: #f7f7f7;
      border-radius: 0.04rem;
      padding: 0 0.1rem;
      margin-right: 0.18rem;
    }
  }
  .hr-msg {
    height: 0.4rem;
    padding-left: 0.02rem;
    margin-top: 0.2rem;
    img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
    }
    .hr-name {
      line-height: 0.4rem;
      font-size: 0.22rem;
      color: #807f7f;
      margin-left: 0.2rem;
    }
  }
}
</style>
