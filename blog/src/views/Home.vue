<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <router-link :to="`/v/${item.id}`">
          <span>{{ item.title }}</span>
          <p>{{ item.description }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    items: [
      {
        id: 2,
        title: 'Test test',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: 1,
        title: 'Hello, world!',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      },
    ]
  }),
}
</script>

<style scoped>
  li > a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 16px 0;
  }

  li + li {
    border-top: 1px solid #ddd;
  }

  li span {
    font-size: 24px;
  }

  li p {
    margin-top: 16px;
    font-size: 16px;
  }
</style>