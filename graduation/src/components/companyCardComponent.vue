<template>
  <div class="company-card">
    <img :src="companyData.user_avatar" alt class="company-icon pull-left">
    <div class="company-title pull-left">{{companyData.company_name}}</div>
    <br>
    <div class="company-local pull-left">{{companyData.company_local}}</div>
    <div class="label-wrap clearFix">
      <div class="label-item pull-left">{{companyData.company_financing}}</div>
      <div class="label-item pull-left">{{companyData.people_num}}</div>
      <div class="label-item pull-left">{{companyData.company_type}}</div>
    </div>
    <span class="iconfont">&#xe60e;</span>
  </div>
</template>

<script>
export default {
  props: {
    companyData: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.company-card {
  width: 7.5rem;
  height: 2rem;
  background: #ffffff;
  padding: 0 0.48rem;
  margin-bottom: 0.14rem;
  position: relative;
  overflow: hidden;
  .company-icon {
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 0.1rem;
    margin-top: 0.2rem;
  }
  .company-title {
    font-size: 0.3rem;
    margin-top: 0.4rem;
    margin-left: 0.2rem;
  }
  .company-local {
    font-size: 0.24rem;
    color: #7a7a7a;
    margin-left: 0.2rem;
    margin-top: -0.1rem;
  }
  .label-wrap {
    height: 0.38rem;
    margin-top: 0.4rem;
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
  .iconfont {
    color: #bbbbbb;
    font-size: 0.3rem;
    font-weight: bold;
    position: absolute;
    top: 50%;
    right: 0.4rem;
    transform: translate(0, -50%);
  }
}
</style>
