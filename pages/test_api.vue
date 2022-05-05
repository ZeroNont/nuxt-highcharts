<template>
<div class="container">
  <div :class="{ invisible: value1 }">I'm visible!</div>
  <div :class="{ invisible: value2 }">Only my space is visible!</div>
  <div>Dummy text</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      value1: true,
      value2: false
    }
  }
}
</script>
<style>
  .invisible {
    visibility: hidden;
  }
</style>
