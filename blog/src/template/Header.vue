<template>
  <header>
    <Inner>
      <h1>Blog</h1>
      <nav>
        <ul>
          <li>
            <router-link to='/'>Home</router-link>
          </li>
          <li>
            <router-link to='/h1'>H1</router-link>
          </li>
        </ul>
      </nav>
    </Inner>
  </header>
</template>

<script>
import Inner from '../components/Inner.vue';

export default {
  name: 'Header',
  components: { Inner },
}
</script>

<style scoped>
  header {
    height: 60px;
  }

  header > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  ul {
    display: flex;
    gap: 15px;
  }
</style>