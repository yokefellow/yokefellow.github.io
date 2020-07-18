<template>
  <div>
    <span>{{message}}</span>
    <br/>
    <span>{{$route.path}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: window.location.href,
    }
  }
}
</script>
<style scoped>
</style>