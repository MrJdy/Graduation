/*
 * @Author: 姜定一 
 * @Date: 2019-04-06 11:16:18 
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-06 11:29:05
 */
<template>
  <div class="hello">kswdjfklsdf</div>
</template>

<script>
import { test } from "../common/api/api.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    test().then(res => {
      console.log(res);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
