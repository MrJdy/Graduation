/*
 * @Author: 姜定一
 * @Date: 2019-04-08 15:11:40
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-14 09:44:28
 */
<template>
  <div class="login-container">
    <div class="form-wrapper">
      <h3 class="title">用户登录</h3>
      <ul class="input-list">
        <li class="phone">
          <span class="pull-left input-before area-code">+86</span>
          <div class="border-empity border-right"></div>
          <input type="number" autofocus class="text-input pull-left" v-model="form.phoneNumber">
        </li>
        <li class="message-code">
          <span class="pull-left input-before iconfont">&#xe615;</span>
          <div class="border-empity border-right"></div>
          <input type="number" class="text-input pull-left" v-model="form.vCode">
          <div class="get-code" v-show="againGetCode" @click="getCode">获取验证码</div>
          <div class="get-code" v-show="!againGetCode">{{countDown}}秒后重新获取</div>
        </li>
        <li class="submit-btn" :disabled="disabled" @click="signIn">进入</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { login } from '../../../common/api/api.js';
import { Toast, Indicator } from 'mint-ui';
import { setCookie, isLogin } from '../../../common/lib/helper.js';
export default {
  data () {
    return {
      form: {
        phoneNumber: '',
        vCode: ''
      },
      checkCode: '',
      againGetCode: true,
      countDown: 60,
      disabled: true
    };
  },
  created () {
    // 检查用户是否为登录状态
    if (isLogin()) {
      this.$router.push({ path: '/position' });
    }
  },
  methods: {
    // 生成验证码
    createCode () {
      let code = '';
      // 验证码的长度
      let codeLength = 4;
      // 随机数
      let random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      // 循环随机取每一个数字来组成验证码
      for (let i = 0; i < codeLength; i++) {
        // 取得随机数的索引（0~9）
        let index = Math.floor(Math.random() * 10);
        // 根据索引取得随机数加到code上
        code += random[index];
      }
      // 把code值赋给验证码
      this.checkCode = code;
    },
    getCode () {
      // 获取用户输入手机号长度
      let phoneNumber = this.form.phoneNumber.split('');
      // 输入号码正确进行以下操作
      if (phoneNumber.length === 11) {
        // 生成验证码
        this.createCode();
        Toast({
          message: `您的验证码为 【 ${this.checkCode} 】`,
          position: 'top',
          duration: 5000
        });
        // 出现倒计时文案，并进行倒计时逻辑
        this.againGetCode = false;
        let timer = setInterval(() => {
          this.countDown--;
        }, 1000);
        setTimeout(() => {
          this.againGetCode = true;
          this.countDown = 60;
          clearInterval(timer);
          timer = null;
        }, 60000);
      } else {
        // 输入手机号码错误提示信息
        Toast({
          message: '请输入正确的手机号码',
          position: 'top',
          duration: 3000
        });
      }
    },
    // 登陆逻辑
    signIn () {
      // 当用户输入验证码和系统发送验证码相同则登陆成功
      if (
        this.form.vCode &&
        this.checkCode &&
        this.form.vCode === this.checkCode
      ) {
        Indicator.open({
          spinnerType: 'triple-bounce'
        });
        // 调取登录接口
        login({
          phone: this.form.phoneNumber,
          userName: `用户_${this.form.phoneNumber.substring(7)}`
        }).then(res => {
          // 判断是否登录成功
          if (res.code === 0) {
            Indicator.close();
            // 登录验证通过，设置token
            setCookie('token', this.form.phoneNumber, 10);
            this.$router.push({ path: '/position' });
          } else {
            Toast({
              message: '系统错误',
              position: 'top',
              duration: 2000
            });
          }
        });
      } else {
        Toast({
          message: '验证码错误，请重新输入。',
          position: 'top',
          duration: 3000
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  position: fixed;
  z-index: -1;
  width: 7.5rem;
  height: 100%;
  background: linear-gradient(to bottom, #a46e92 0%, #27455d 100%);
  .form-wrapper {
    width: 6.75rem;
    position: absolute;
    top: 17%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    .title {
      color: #ffffff;
      font-size: 0.7rem;
      text-align: center;
      line-height: 0.86rem;
      font-weight: bold;
      margin-bottom: 0.84rem;
    }
    .input-list {
      li {
        width: 100%;
        height: 0.9rem;
        border-radius: 0.432rem;
        background: rgba(154, 165, 181, 0.3);
        position: relative;
        margin-top: 0.4rem;
        .input-before {
          display: inline-block;
          width: 0.8rem;
          height: 0.9rem;
          line-height: 0.9rem;
          font-size: 0.36rem;
          color: #ffffff;
          margin-left: 0.3rem;
        }
        .area-code {
          font-size: 0.26rem;
        }
        .border-empity {
          width: 1.1rem;
          height: 0.32rem;
          position: absolute;
          left: 0;
          top: 0.29rem;
        }
        .text-input {
          display: block;
          width: 4rem;
          height: 0.32rem;
          color: #ffffff;
          font-size: 0.3rem;
          outline: none;
          caret-color: #eaeaea;
          background: transparent;
          margin-top: 0.29rem;
          margin-left: 0.06rem;
        }
        .get-code {
          height: 0.4rem;
          line-height: 0.4rem;
          text-align: center;
          border: 0.5px solid #eaeaea;
          border-radius: 0.18rem;
          color: #ffffff;
          font-size: 0.2rem;
          padding: 0 0.18rem;
          position: absolute;
          top: 0.29rem;
          right: 0.2rem;
        }
      }
      .submit-btn {
        line-height: 0.9rem;
        color: #ffffff;
        text-align: center;
        font-size: 0.4rem;
        margin-top: 1rem;
        background: #53cac3;
      }
    }
  }
}
</style>
