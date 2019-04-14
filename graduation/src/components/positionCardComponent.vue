/*
 * @Author: 姜定一 
 * @Date: 2019-04-13 09:39:09 
 * @Last Modified by:   姜定一 
 * @Last Modified time: 2019-04-14 09:39:09 
 */
<template>
  <div class="position-item-wrap" @click="toEdit(isPersonal)">
      <div class="clearFix">
        <div class="position-title pull-left">前端工程师</div>
        <div class="position-salary pull-right">10k-12k</div>
      </div>
      <div class="clearFix">
        <div class="company-name pull-left">阿里巴巴</div>
      </div>
      <div class="label-wrap clearFix">
        <div class="label-item pull-left">北京 海淀区 西二旗</div>
        <div class="label-item pull-left">1-3年</div>
        <div class="label-item pull-left">本科</div>
      </div>
      <div class="hr-msg clearFix">
        <img class="pull-left" src="https://cdn.nlark.com/yuque/0/2019/png/238011/1548323950699-avatar/d8adb4a0-6023-4ade-a9fa-79c776df6dd3.png?x-oss-process=image/resize,m_fill,w_192,h_192/format,png" alt="">
        <div class="hr-name pull-left">姜定一 · 招聘者</div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    isPersonal: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toEdit (isPersonal) {
      if (isPersonal) {
        console.log(11111);
      } else {
        this.$router.push({ path: '/edit-position' });
      }
    }
  }
}
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
    color:#53cac3;
    margin-top: 0.4rem;
  }
  .company-name {
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.26rem;
    color: #686868;
    padding-left: .02rem;
    margin-top: .1rem;
  }
  .label-wrap {
    height: .38rem;
    margin-top: .2rem;
    padding-left: .02rem;
    .label-item {
      display: inline-block;
      height: .38rem;
      line-height: .38rem;
      font-size: .2rem;
      color: #b5b5b5;
      text-align: center;
      background: #f7f7f7;
      border-radius: .04rem;
      padding: 0 .1rem;
      margin-right: .18rem;
    }
  }
  .hr-msg {
    height: .4rem;
    padding-left: .02rem;
    margin-top: .2rem;
    img {
      display: block;
      width: .4rem;
      height: .4rem;
      border-radius: 50%;
    }
    .hr-name {
      line-height: .4rem;
      font-size: .22rem;
      color: #807f7f;
      margin-left: .2rem;
    }
  }
}
</style>

