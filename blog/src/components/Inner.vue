<template>
  <div class="inner">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Inner'
}
</script>

<style scoped>
  .inner {
    max-width: 900px;
    margin: 0 auto;
  }
</style>