<template>
  <div class="setting-position">
    <div class="head-container">
      <span class="iconfont pull-left" @click="returnPage">&#xe677;</span>
      <div class="save pull-right" @click="submitForm">保存</div>
    </div>
    <mt-field label="姓名" placeholder="请输入您的姓名" v-model="form.name"></mt-field>
    <mt-field label="性别" placeholder="请输入您的性别" v-model="form.sex"></mt-field>
    <mt-field label="邮箱" placeholder="请输入您的邮箱" v-model="form.email"></mt-field>
  </div>
</template>

<script>
import { getCookie } from '../../common/lib/helper';
import { editUserInfo } from '../../common/api/api';
import { Field, Toast } from 'mint-ui';
import Vue from 'vue';

Vue.component(Field.name, Field);
export default {
  data () {
    return {
      form: {
        name: '',
        sex: '',
        email: ''
      },
      validateMsg: ''
    };
  },
  created () {
    if (this.$route.query.data) {
      let data = JSON.parse(this.$route.query.data);
      this.form.name = data.user_name;
      this.form.sex = data.user_sex;
      this.form.email = data.user_email;
    }
  },
  methods: {
    returnPage () {
      this.$router.go(-1);
      this.resetForm();
    },
    formValidate () {
      this.validateMsg = this.form.name ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.sex ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.email ? '' : '您有没填写的项哦~';
      if (this.validateMsg) {
        Toast({
          message: this.validateMsg,
          position: 'top',
          duration: 2000
        });
        return false;
      }
      return true;
    },
    submitForm () {
      if (this.formValidate()) {
        // 表单验证通过
        let data = this.form;
        let phone = getCookie('token');
        data.phone = phone;
        editUserInfo(data).then(res => {
          if (res.code === 0) {
            this.$router.go(-1);
            this.resetForm();
          }
        });
      }
    },
    resetForm () {
      this.form = {
        name: '',
        sex: '',
        email: ''
      };
      this.validateMsg = '';
    }
  }
};
</script>

<style lang="scss" scoped>
.setting-position {
  width: 7.5rem;
  padding-top: 1rem;
  font-family: "微软雅黑";
  .head-container {
    z-index: 111;
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
    .iconfont {
      height: 1rem;
      line-height: 1.2rem;
      color: #ffffff;
      font-size: 0.36rem;
      font-weight: bold;
    }
    .save {
      display: inline-block;
      height: 1rem;
      line-height: 1.2rem;
      color: #ffffff;
      font-size: 0.28rem;
    }
  }
}
</style>
