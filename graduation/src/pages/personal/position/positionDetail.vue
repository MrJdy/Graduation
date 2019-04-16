<template>
  <div class="position-detail-container">
    <div class="head-container">
      <span class="iconfont pull-left" @click="returnPage">&#xe677;</span>
      <span v-show="!isCollection" class="iconfont pull-right" @click="Collection('ok')">&#xe603;</span>
      <span
        v-show="isCollection"
        class="iconfont star-active pull-right"
        @click="Collection('cancel')"
      >&#xe625;</span>
    </div>
    <div class="clearFix">
      <p class="position-title pull-left">{{this.positionData.position_name}}</p>
      <p class="position-salary pull-right">{{this.positionData.position_salary}}</p>
    </div>
    <div class="label-wrap clearFix border-bottom">
      <span class="iconfont pull-left icon-1">&#xe602; {{this.positionData.company_local}}</span>
      <span class="iconfont pull-left icon-2">&#xe61d; {{this.positionData.position_time}}</span>
      <span class="iconfont pull-left icon-3">
        &#xe64b;
        <span class="education">{{this.positionData.position_education}}</span>
      </span>
    </div>
    <div class="position-detail">
      <p class="title">职位详情</p>
      <pre class="content">{{this.positionData.position_details}}</pre>
    </div>
    <div class="footer">立即沟通</div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { collectionPosition } from '../../../common/api/api';
import { getCookie } from '../../../common/lib/helper.js';
export default {
  data () {
    return {
      positionData: {},
      isCollection: false,
      collectionMsg: ''
    };
  },
  created () {
    this.positionData = JSON.parse(this.$route.query.data);
    this.isCollection = this.positionData.isCollection;
    console.log(this.positionData);
  },
  methods: {
    returnPage () {
      this.$router.go(-1);
    },
    Collection (action) {
      if (action === 'ok') {
        this.isCollection = true;
        this.collectionMsg = '收藏成功';
        let data = {
          phone: getCookie('token'),
          positionId: this.positionData.position_id,
          isCollection: true
        };
        collectionPosition(data);
        Toast({
          message: this.collectionMsg,
          position: 'middle',
          duration: 1000
        });
      } else {
        this.isCollection = false;
        this.collectionMsg = '取消收藏成功';
        let data = {
          phone: getCookie('token'),
          positionId: this.positionData.position_id,
          isCollection: false
        };
        collectionPosition(data);
        Toast({
          message: this.collectionMsg,
          position: 'middle',
          duration: 1000
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.position-detail-container {
  width: 7.5rem;
  background: #ffffff;
  height: 100vh;
  padding: 1rem 0.4rem 0 0.4rem;
  position: relative;
  .head-container {
    z-index: 111;
    width: 7.5rem;
    height: 1rem;
    line-height: 1.3rem;
    background: #ffffff;
    color: #ffffff;
    font-size: 0.3rem;
    text-align: center;
    position: fixed;
    left: calc((100% - 7.5rem) / 2);
    top: 0;
    padding: 0 0.3rem;
    .iconfont {
      height: 1rem;
      line-height: 1rem;
      color: #666666;
      font-size: 0.36rem;
      font-weight: bold;
    }
    .star-active {
      color: #53cac3;
    }
  }
  .position-title {
    color: #444444;
    font-size: 0.58rem;
    font-weight: bold;
    margin-top: 0.3rem;
  }
  .position-salary {
    font-size: 0.3rem;
    font-weight: bold;
    color: #53cac3;
    margin-top: 0.56rem;
  }
  .label-wrap {
    width: 6.7rem;
    padding-bottom: 0.3rem;
    margin-top: 0.3rem;
    .iconfont {
      color: #666666;
      font-size: 0.26rem;
      margin-right: 0.36rem;
    }
    .icon-3 {
      font-size: 0.3rem;
    }
    .education {
      font-size: 0.26rem;
    }
  }
  .position-detail {
    margin-top: 0.4rem;
    .title {
      font-size: 0.34rem;
    }
    .content {
      color: #666666;
      font-size: 0.26rem;
      margin-top: 0.4rem;
    }
  }
  .footer {
    width: 7.1rem;
    height: 0.8rem;
    background: #53cac3;
    border-radius: 0.1rem;
    line-height: 0.8rem;
    text-align: center;
    color: #ffffff;
    font-size: 0.3rem;
    position: fixed;
    bottom: 0.2rem;
    left: calc((100% - 7.5rem) / 2 + 0.2rem);
  }
}
</style>
