/*
 * @Author: 姜定一
 * @Date: 2019-04-09 23:18:50
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-10 16:29:14
 */
<template>
  <div class="mine-container">
    <div class="head-wrapper">
      <div class="top-bar">
        <span class="iconfont pull-left icon-1">&#xe69a;</span>
        <span class="iconfont pull-right icon-2">&#xe60d;</span>
      </div>
      <div class="user-name pull-left clearFix">姜定一</div>
      <pre class="mine-home">我的个人主页 <span class="iconfont">&#xe60e;</span></pre>
      <img class="mine-avatar" :src="userData.user_avatar" />
    </div>
    <navigation :selectActive="3"></navigation>
  </div>
</template>

<script>
import Navigation from '../../components/navigationComponent';
import HeaderTop from '../../components/headComponent';
import { getCookie, isLogin } from '../../common/lib/helper.js';
import { userInfo } from '../../common/api/api.js';

export default {
  components: {
    Navigation,
    HeaderTop
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
      userInfo({phone: getCookie('token')}).then((res) => {
        this.userData = res.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mine-container {
  width: 7.5rem;
  .head-wrapper {
    width: 7.5rem;
    height: 2.66rem;
    background: #53cac3;
    overflow: hidden;
    padding: 0 .45rem;
    position: relative;
    .top-bar {
      width: 6.6rem;
      height: .3rem;
      margin: 0 auto;
      margin-top: .26rem;
      .iconfont {
        display: inline-block;
        height: .3rem;
        line-height: .3rem;
        color: #ffffff;
      }
      .icon-1 {
        font-size: .44rem;
      }
      .icon-2 {
        font-size: .32rem;
      }
    }
    .user-name {
      height: 1.6rem;
      line-height: 1.6rem;
      color: #ffffff;
      font-size: .5rem;
      font-weight: bold;
    }
    .mine-home {
      height: .5rem;
      line-height: .5rem;
      color: #ffffff;
      font-size: .25rem;
      position: absolute;
      bottom: .38rem;
      .iconfont {
        color: #ffffff;
        font-size: .2rem;
        font-weight: bold;
      }
    }
    .mine-avatar {
      display: block;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      position: absolute;
      right: .45rem;
      bottom: .38rem;
    }
  }
}
</style>
