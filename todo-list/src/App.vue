<template>
  <h1>Todo List</h1>
  <Form v-bind:handle-submit="handleSubmit" />
  <List
    v-bind:items="items"
    v-bind:remove-item="removeItem"
  />
</template>

<script>
import Form from './components/Form.vue';
import List from './components/List.vue';

const getId = (() => {
  let id = 0;

  return () => ++id;
})();

export default {
  name: 'App',
  components: {
    Form,
    List,
  },
  data: () => ({
    items: [],
  }),
  methods: {
    handleSubmit: function (title) {
      this.items.push({
        id: getId(),
        title,
      });
    },
    removeItem: function (idx) {
      this.items = this.items.filter(({ id }) => id !== idx);
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul, li { list-style: none; }

#app {
  width: 600px;
  margin: 0 auto;
  text-align: center;
}
</style>
