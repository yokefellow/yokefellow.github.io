<template>
  <div class="container">
    <Content slot-key="images" />
  </div>
</template>

<script>
export default {
  name: 'ImagesFlexContainer',
  props: {},
  data() {},
}
</script>

<style lang="stylus" scoped>
.container
  display flex
  justify-content center
</style>
