<template>
  <form v-on:submit.prevent="onSubmit">
    <input v-model="title" />
    <button>Add</button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: ['handleSubmit'],
  data: () => ({
    title: '',
  }),
  methods: {
    onSubmit: function() {
      this.handleSubmit(this.title);

      this.title = '';
    }
  }
}
</script>