<template>
  <main>
    <Inner>
      <router-view />
    </Inner>
  </main>
</template>

<script>
import Inner from '../components/Inner.vue'

export default {
  name: 'Main',
  components: { Inner },
}
</script>

<style scoped>
  main {
    min-height: calc(100vh - 60px);
  }
</style>