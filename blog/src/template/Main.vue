<template>
  <main>
    <Inner>
      Hello, World!
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