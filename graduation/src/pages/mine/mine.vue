/*
 * @Author: 姜定一
 * @Date: 2019-04-09 23:18:50
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-10 17:22:53
 */
<template>
  <div class="mine-container">
    <div class="head-wrapper">
      <div class="top-bar">
        <label for="camera" class="iconfont pull-left icon-1">&#xe69a;</label>
        <input capture="camera" type="file" accept="image/*" id="camera" style="display: none">
        <span class="iconfont pull-right icon-2">&#xe60d;</span>
      </div>
      <div class="user-name pull-left clearFix">姜定一</div>
      <pre class="mine-home">我的个人主页 <span class="iconfont">&#xe60e;</span></pre>
      <img class="mine-avatar" :src="userData.user_avatar">
    </div>
    <div class="mine-nav-wrap">
      <div class="nav-item">
        <p class="number">0</p>
        <p class="title">沟通过</p>
      </div>
      <div class="nav-item">
        <p class="number">0</p>
        <p class="title">面试</p>
      </div>
      <div class="nav-item">
        <p class="number">0</p>
        <p class="title">已投递</p>
      </div>
      <div class="nav-item">
        <p class="number">0</p>
        <p class="title">感兴趣</p>
      </div>
    </div>
    <div class="menu-container">
      <div class="menu-wrap">
        <div class="menu-item border-bottom">
          <span class="iconfont pull-left icon-1">&#xe606;</span>
          <span class="item-name pull-left">我的微简历</span>
          <span class="iconfont arrow pull-right">&#xe60e;</span>
        </div>
        <div class="menu-item border-bottom">
          <span class="iconfont pull-left icon-2">&#xe646;</span>
          <span class="item-name pull-left">附件简历</span>
          <span class="iconfont arrow pull-right">&#xe60e;</span>
        </div>
        <div class="menu-item border-bottom">
          <span class="iconfont pull-left icon-2">&#xe662;</span>
          <span class="item-name pull-left">关注公司</span>
          <span class="iconfont arrow pull-right">&#xe60e;</span>
        </div>
        <div class="menu-item">
          <span class="iconfont pull-left icon-2">&#xe648;</span>
          <span class="item-name pull-left">收藏职位</span>
          <span class="iconfont arrow pull-right">&#xe60e;</span>
        </div>
      </div>
    </div>
    <navigation :selectActive="3"></navigation>
  </div>
</template>

<script>
import Navigation from "../../components/navigationComponent";
import { getCookie, isLogin } from "../../common/lib/helper.js";
import { userInfo } from "../../common/api/api.js";

export default {
  components: {
    Navigation
  },
  data() {
    return {
      userData: {}
    };
  },
  created() {
    if (!isLogin()) {
      this.$router.push({ path: "/" });
    } else {
      userInfo({ phone: getCookie("token") }).then(res => {
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
    padding: 0 0.45rem;
    position: relative;
    .top-bar {
      width: 6.6rem;
      height: 0.3rem;
      margin: 0 auto;
      margin-top: 0.26rem;
      .iconfont {
        display: inline-block;
        height: 0.3rem;
        line-height: 0.3rem;
        color: #ffffff;
      }
      .icon-1 {
        font-size: 0.44rem;
      }
      .icon-2 {
        font-size: 0.32rem;
      }
    }
    .user-name {
      height: 1.6rem;
      line-height: 1.6rem;
      color: #ffffff;
      font-size: 0.5rem;
      font-weight: bold;
    }
    .mine-home {
      height: 0.5rem;
      line-height: 0.5rem;
      color: #ffffff;
      font-size: 0.25rem;
      position: absolute;
      bottom: 0.38rem;
      .iconfont {
        color: #ffffff;
        font-size: 0.2rem;
        font-weight: bold;
      }
    }
    .mine-avatar {
      display: block;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      position: absolute;
      right: 0.45rem;
      bottom: 0.38rem;
    }
  }
  .mine-nav-wrap {
    width: 7.5rem;
    height: 1.2rem;
    background: #ffffff;
    padding: 0 0.55rem;
    display: flex;
    justify-content: space-between;
    .nav-item {
      width: 1rem;
      height: 1.2rem;
      overflow: hidden;
      .number {
        font-size: 0.3rem;
        color: #000000;
        text-align: center;
        font-family: "微软雅黑";
        margin-top: 0.28rem;
      }
      .title {
        font-size: 0.22rem;
        color: #5d5d5d;
        text-align: center;
        margin-top: 0.16rem;
      }
    }
  }
  .menu-container {
    width: 7.5rem;
    background: #ffffff;
    margin-top: 0.16rem;
    padding: 0 0.45rem;
    .menu-wrap {
      width: 6.6rem;
      .menu-item {
        width: 6.6rem;
        height: 1.1rem;
        .iconfont {
          display: block;
          width: 0.24rem;
          line-height: 1.1rem;
          font-size: 0.44rem;
          color: #c3c3c3;
        }
        .icon-2 {
          font-size: 0.36rem;
        }
        .item-name {
          display: block;
          font-size: 0.28rem;
          line-height: 1.1rem;
          color: #7d7d7d;
          margin-left: 0.3rem;
        }
        .arrow {
          color: #a7a5a5;
          font-size: 0.2rem;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
