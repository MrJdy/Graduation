<template>
  <div class="setting-position">
    <div class="head-container">
      <span class="iconfont pull-left" @click="returnPage">&#xe677;</span>
      <div class="save pull-right" @click="submitForm">保存</div>
    </div>
    <mt-field label="求职状态" placeholder="请输入求职状态" v-model="form.status"></mt-field>
    <mt-field label="期望薪资" placeholder="请输入期望薪资" v-model="form.salary"></mt-field>
    <mt-field label="期望城市" placeholder="请输入期望城市" v-model="form.city"></mt-field>
    <mt-field label="工作经历" placeholder="请输入工作经历" type="textarea" rows="4" v-model="form.workExp"></mt-field>
    <mt-field label="项目经历" placeholder="请输入项目经历" type="textarea" rows="4" v-model="form.projectExp"></mt-field>
    <mt-field
      label="教育经历"
      placeholder="请输入教育经历"
      type="textarea"
      rows="4"
      v-model="form.educationExp"
    ></mt-field>
    <mt-field label="自我介绍" placeholder="请输入自我介绍" type="textarea" rows="4" v-model="form.introduce"></mt-field>
  </div>
</template>

<script>
import { getCookie, isLogin } from '../../../common/lib/helper';
import { editResume, queryResume } from '../../../common/api/api';
import { Field, Toast } from 'mint-ui';
import Vue from 'vue';

Vue.component(Field.name, Field);
export default {
  data () {
    return {
      form: {
        status: '',
        salary: '',
        city: '',
        workExp: '',
        projectExp: '',
        educationExp: '',
        introduce: ''
      },
      validateMsg: '',
      resumeData: {},
      edit: false
    };
  },
  created () {
    if (!isLogin()) {
      this.$router.push({ path: '/' });
    } else {
      this.queryResumeData();
    }
  },
  methods: {
    async queryResumeData () {
      let phone = getCookie('token');
      let resumeData = await queryResume({ phone });
      if (resumeData.data) {
        this.form.status = resumeData.data.work_status;
        this.form.salary = resumeData.data.expectation_salary;
        this.form.city = resumeData.data.expectation_city;
        this.form.workExp = resumeData.data.work_experience;
        this.form.projectExp = resumeData.data.project_experience;
        this.form.educationExp = resumeData.data.education_experience;
        this.form.introduce = resumeData.data.self_introduction;
        this.edit = true;
      }
    },
    returnPage () {
      this.$router.go(-1);
      this.resetForm();
    },
    formValidate () {
      this.validateMsg = this.form.status ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.salary ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.city ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.workExp ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.projectExp ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.educationExp ? '' : '您有没填写的项哦~';
      this.validateMsg = this.form.introduce ? '' : '您有没填写的项哦~';
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
        data.edit = this.edit;
        editResume(data).then(res => {
          if (res.code === 0) {
            this.$router.go(-1);
            this.resetForm();
          }
        });
      }
    },
    resetForm () {
      this.form = {
        status: '',
        salary: '',
        city: '',
        workExp: '',
        projectExp: '',
        educationExp: '',
        introduce: ''
      };
      this.validateMsg = '';
      this.resumeData = {};
      this.edit = false;
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
