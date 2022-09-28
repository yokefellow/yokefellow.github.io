<template>
  <div class="container">
    <img v-for="item in imgs" :src="item" :key="item" />
  </div>
</template>

<script>
export default {
  name: 'ImagesFlexContainer',
  props: {
    imagesPath: {
      required: true,
      type: String,
    },
  },
  data() {
    console.log(this.imagesPath)
    return {
      imgs: this.imagesPath.split(','),
    }
  },
  methods: {},
}
</script>

<style lang="stylus" scoped>
.container
  display flex
  justify-content center
</style>
