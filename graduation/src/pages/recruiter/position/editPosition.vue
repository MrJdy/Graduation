/*
 * @Author: 姜定一
 * @Date: 2019-04-13 09:38:17
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-14 18:59:13
 */
<template>
  <div class="edit-position">
    <div class="head-container">
      <router-link to="/hr-position" class="iconfont pull-left">
        <span @click="resetForm">&#xe677;</span>
      </router-link>
      <div class="save pull-right" @click="submitForm">保存</div>
    </div>
    <mt-field label="职位名称" placeholder="请输入职位名称" v-model="form.name"></mt-field>
    <mt-field label="工资范围" placeholder="请输入工资范围" v-model="form.salary"></mt-field>
    <mt-field label="工作经验" placeholder="请输入工作经验" v-model="form.workTime"></mt-field>
    <mt-field label="学历要求" placeholder="请输入学历要求" v-model="form.education"></mt-field>
    <mt-field
      label="职位描述"
      placeholder="请输入职位描述"
      type="textarea"
      rows="4"
      v-model="form.description"
    ></mt-field>
    <mt-field label="技能要求" placeholder="请输入技能要求" type="textarea" rows="4" v-model="form.require"></mt-field>
  </div>
</template>

<script>
import { editPosition, queryCompany } from '../../../common/api/api';
import { uuid, getCookie } from '../../../common/lib/helper';
import { Field, Toast } from 'mint-ui';
import Vue from 'vue';

Vue.component(Field.name, Field);

export default {
  data () {
    return {
      form: {
        name: '',
        salary: '',
        workTime: '',
        education: '',
        description: '',
        require: ''
      },
      validateMsg: '',
      companyId: '',
      positionId: ''
    };
  },
  created () {
    let phone = getCookie('token');
    queryCompany({ phone }).then((res) => {
      if (res.code === 0) {
        this.companyId = res.data.company_id;
      }
    });
    // 编辑时初始化数据
    if (this.$route.query.data) {
      let data = JSON.parse(this.$route.query.data);
      this.positionId = data.position_id;
      this.form.name = data.position_name;
      this.form.salary = data.position_salary;
      this.form.workTime = data.position_time;
      this.form.education = data.position_education;
      this.form.description = data.position_details;
      this.form.require = data.position_require;
    }
  },
  methods: {
    formValidate () {
      this.validateMsg = this.form.name ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.salary ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.workTime ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.education ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.description ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.require ? '' : '您有没填写的项哦~';
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
        if (this.$route.query.data) {
          data.positionId = this.positionId;
          data.edit = true;
        } else {
          data.positionId = uuid(8, 16);
          data.edit = false;
        }
        data.companyId = this.companyId;
        editPosition(data).then(res => {
          if (res.code === 0) {
            this.$router.push({ path: './hr-position' });
            this.resetForm();
          }
        });
      }
    },
    resetForm () {
      this.form = {
        name: '',
        salary: '',
        workTime: '',
        education: '',
        description: '',
        require: ''
      };
      this.validateMsg = '';
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
