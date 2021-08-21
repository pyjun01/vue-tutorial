<template>
  <ul>
    <li v-for="item in items" v-bind:key="item.id">
      <span>{{ item.title }}</span>
      <button v-on:click="removeItem(item.id)">삭제</button>
    </li>
  </ul>  
</template>

<script>
export default {
  name: 'List',
  props: ['items', 'removeItem'],
}
</script>