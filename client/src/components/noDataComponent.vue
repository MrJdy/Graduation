<template>
  <div v-if="!dataLength" class="no-data">还没有数据哟~</div>
</template>

<script>
export default {
  props: {
    dataLength: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
.no-data {
  color: #9e9e9e;
  font-size: .26rem;
  text-align: center;
  line-height: 1rem;
}
</style>
