<template>
  <div class="edit-position">
    <div class="head-container">
      <router-link to='/hr-position' class="iconfont pull-left"><span @click="resetForm">&#xe677;</span></router-link>
      <div class="save pull-right" @click="submitForm">保存</div>
    </div>
    <mt-field label="工资范围" placeholder="请输入工资范围" v-model="form.salary"></mt-field>
    <mt-field label="工作经验" placeholder="请输入工作经验" v-model="form.workTime"></mt-field>
    <mt-field label="学历要求" placeholder="请输入学历要求" v-model="form.education"></mt-field>
    <mt-field label="职位描述" placeholder="请输入职位描述" type="textarea" rows="4" v-model="form.description"></mt-field>
    <mt-field label="技能要求" placeholder="请输入技能要求" type="textarea" rows="4" v-model="form.require"></mt-field>
  </div>
</template>

<script>
import { Field, Toast } from 'mint-ui';
import Vue from 'vue';

import { editPosition } from '../../../common/api/api';

Vue.component(Field.name, Field);

export default {
  data () {
    return {
      form: {
        salary: '',
        workTime: '',
        education: '',
        description: '',
        require: '',
      },
      validateMsg: ''
    }
  },
  created () {
    // 编辑时初始化数据
    this.form.salary = 100;
  },
  methods: {
    formValidate () {
      this.validateMsg = this.form.salary ? '' : '表单不能为空';
      this.validateMsg = this.form.workTime ? '' : '表单不能为空';
      this.validateMsg = this.form.education ? '' : '表单不能为空';
      this.validateMsg = this.form.description ? '' : '表单不能为空';
      this.validateMsg = this.form.require ? '' : '表单不能为空';
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
        editPosition(this.form).then((res) => {
          if (res.code === 0) {
            this.$router.push({ path: './hr-position' })
            this.resetForm();
          }
        });
      }
      return;
    },
    resetForm () {
      this.form = {
        salary: '',
        workTime: '',
        education: '',
        description: '',
        require: '',
      };
      this.validateMsg = '';
    }
  }
}
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
