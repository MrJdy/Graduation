<template>
  <div>
    <div>公司</div>
    <header-top></header-top>
    <navigation :selectActive="1"></navigation>
  </div>
</template>

<script>
import Navigation from "../../components/navigationComponent";
import HeaderTop from "../../components/headComponent";

export default {
  components: {
    Navigation,
    HeaderTop
  }
};
</script>

<style lang="scss" scoped>
</style>
