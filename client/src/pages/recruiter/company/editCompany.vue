/*
 * @Author: 姜定一
 * @Date: 2019-04-13 09:37:36
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-14 17:57:20
 */
<template>
  <div class="edit-position">
    <div class="head-container">
      <router-link
        :to="this.$route.query.identity === 'hr' ? '/mine' : '/hr-mine'"
        class="iconfont pull-left"
      >
        <span @click="resetForm">&#xe677;</span>
      </router-link>
      <div class="save pull-right" @click="submitForm">保存</div>
    </div>
    <mt-field label="公司名称" placeholder="请输入公司名称" v-model="form.companyName"></mt-field>
    <mt-field label="地址" placeholder="请输入公司地址" v-model="form.local"></mt-field>
    <mt-field label="公司人数" placeholder="请输入公司人数" v-model="form.peopleNumber"></mt-field>
    <mt-field label="公司类型" placeholder="请输入公司类型" v-model="form.companyType"></mt-field>
    <mt-field label="融资情况" placeholder="请输入融资情况" v-model="form.companyFinancing"></mt-field>
    <mt-field label="公司邮箱" placeholder="请输入公司邮箱" type="email" v-model="form.email"></mt-field>
    <mt-field
      label="公司介绍"
      placeholder="请输入公司介绍"
      type="textarea"
      rows="4"
      v-model="form.introduction"
    ></mt-field>
  </div>
</template>

<script>
import { Field, Toast } from 'mint-ui';
import Vue from 'vue';

import { editCompany } from '../../../common/api/api';
import { getCookie, uuid } from '../../../common/lib/helper';

Vue.component(Field.name, Field);

export default {
  data() {
    return {
      form: {
        companyName: '',
        local: '',
        peopleNumber: '',
        companyType: '',
        companyFinancing: '',
        email: '',
        introduction: ''
      },
      validateMsg: '',
      companyId: ''
    };
  },
  created() {
    if (this.$route.query.data) {
      let data = JSON.parse(this.$route.query.data);
      this.companyId = data.company_id;
      this.form.companyName = data.company_name;
      this.form.local = data.company_local;
      this.form.peopleNumber = data.people_num;
      this.form.companyType = data.company_type;
      this.form.companyFinancing = data.company_financing;
      this.form.email = data.company_email;
      this.form.introduction = data.company_introduction;
    }
  },
  methods: {
    formValidate() {
      this.validateMsg = this.form.companyName ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.local ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.peopleNumber ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.companyType ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.companyFinancing ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.email ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.introduction ? '' : '您有没填写的项哦~';
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
    submitForm() {
      if (this.formValidate()) {
        // 表单验证通过
        let data = this.form;
        if (this.$route.query.data) {
          data.companyId = this.companyId;
          data.edit = true;
        } else {
          data.companyId = uuid(8, 16);
          data.edit = false;
        }
        data.phone = getCookie('token');
        editCompany(data).then(res => {
          if (res.code === 0) {
            this.$router.push({ path: './hr-mine' });
            this.resetForm();
          }
        });
      }
    },
    resetForm() {
      this.form = {
        salary: '',
        workTime: '',
        education: '',
        description: '',
        require: ''
      };
      this.validateMsg = '';
      this.companyId = '';
    }
  }
};
</script>

<style lang="scss" scoped>
.edit-position {
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
