/*
 * @Author: 姜定一
 * @Date: 2019-04-12 16:49:55
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-12 21:32:22
 */

<template>
  <div class="mine-container">
    <div class="head-wrapper">
      <div class="top-bar">
        <label for="camera" class="iconfont pull-left icon-1">&#xe69a;</label>
        <input capture="camera" type="file" accept="image/*" id="camera" style="display: none">
        <span class="iconfont pull-right icon-2">&#xe60d;</span>
      </div>
      <div class="user-name pull-left clearFix">{{userData.user_name}}</div>
      <!-- <pre class="mine-home">编辑我的信息 <span class="iconfont">&#xe60e;</span></pre> -->
      <img class="mine-avatar" :src="userData.user_avatar">
    </div>
    <div class="mine-nav-wrap" v-if="isPersonal">
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
      <div class="menu-wrap" v-if="isPersonal">
        <div class="menu-item border-bottom">
          <span class="iconfont pull-left icon-1">&#xe606;</span>
          <span class="item-name pull-left">我的简历</span>
          <span class="iconfont arrow pull-right">&#xe60e;</span>
        </div>
        <!-- <div class="menu-item border-bottom">
          <span class="iconfont pull-left icon-2">&#xe646;</span>
          <span class="item-name pull-left">附件简历</span>
          <span class="iconfont arrow pull-right">&#xe60e;</span>
        </div>-->
        <div class="menu-item border-bottom">
          <span class="iconfont pull-left icon-2">&#xe662;</span>
          <span class="item-name pull-left">关注公司</span>
          <span class="iconfont arrow pull-right">&#xe60e;</span>
        </div>
        <div class="menu-item border-bottom">
          <span class="iconfont pull-left icon-2">&#xe648;</span>
          <span class="item-name pull-left">收藏职位</span>
          <span class="iconfont arrow pull-right">&#xe60e;</span>
        </div>
        <div class="menu-item border-bottom" @click="checkoutId('hr')">
          <span class="iconfont pull-left icon-2">&#xe6b8;</span>
          <span class="item-name pull-left">切换身份</span>
          <span class="iconfont arrow pull-right">&#xe60e;</span>
        </div>
        <div class="menu-item" @click="loginOut">
          <span class="iconfont pull-left icon-2">&#xe608;</span>
          <span class="item-name pull-left">退出登录</span>
          <span class="iconfont arrow pull-right">&#xe60e;</span>
        </div>
      </div>
      <div class="menu-wrap" v-if="!isPersonal">
        <div class="menu-item border-bottom">
          <router-link class="router-link" to='/hr-message' >
            <span class="iconfont pull-left icon-2">&#xe67c;</span>
            <span class="item-name pull-left">我的消息</span>
            <span class="iconfont arrow pull-right">&#xe60e;</span>
          </router-link>
        </div>
        <div class="menu-item border-bottom">
          <router-link class="router-link" to='/edit-company' >
            <span class="iconfont pull-left icon-2">&#xe662;</span>
            <span class="item-name pull-left">公司信息</span>
            <span class="iconfont arrow pull-right">&#xe60e;</span>
          </router-link>
        </div>
        <div class="menu-item border-bottom">
          <router-link class="router-link" to='/hr-position' >
            <span class="iconfont pull-left icon-1">&#xe622;</span>
            <span class="item-name pull-left">发布职位</span>
            <span class="iconfont arrow pull-right">&#xe60e;</span>
          </router-link>
        </div>
        <div class="menu-item border-bottom" @click="checkoutId('personal')">
          <span class="iconfont pull-left icon-2">&#xe6b8;</span>
          <span class="item-name pull-left">切换身份</span>
          <span class="iconfont arrow pull-right">&#xe60e;</span>
        </div>
        <div class="menu-item" @click="loginOut">
          <span class="iconfont pull-left icon-2">&#xe608;</span>
          <span class="item-name pull-left">退出登录</span>
          <span class="iconfont arrow pull-right">&#xe60e;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { deleteCookie } from '../common/lib/helper.js';
import { MessageBox } from 'mint-ui';

export default {
  props: {
    userData: {
      type: Object
    },
    isPersonal: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    // 切换身份
    checkoutId (id) {
      MessageBox.confirm('', {
        title: '提示',
        message: id === 'hr' ? '确定要切换到企业用户吗?' : '确定要切换到个人用户吗?',
        confirmButtonClass: 'confirm-ok',
        cancelButtonClass: 'confirm-cancel'
      }).then(action => {
        if (action === 'confirm') {
          this.$router.push({ path: id === 'hr' ? '/hr-mine' : 'mine'});
        }
      }).catch(action => {
        return 0;
      });
    },
    // 退出登录
    loginOut () {
      MessageBox.confirm('', {
        title: '提示',
        message: '确定要退出登录吗?',
        confirmButtonClass: 'confirm-ok',
        cancelButtonClass: 'confirm-cancel'
      }).then(action => {
        if (action === 'confirm') {
          deleteCookie('token');
          this.$router.push({ path: '/' });
        }
      }).catch(action => {
        return 0;
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
      margin-top: 0.3rem;
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
    margin-bottom: .16rem;
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
    padding: 0 0.45rem;
    .menu-wrap {
      width: 6.6rem;
      .menu-item {
        width: 6.6rem;
        height: 1.1rem;
        .router-link {
          display: block;
          width: 6.6rem;
          height: 1.1rem;
        }
        .iconfont {
          display: block;
          width: 0.26rem;
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
