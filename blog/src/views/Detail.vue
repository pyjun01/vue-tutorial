<template>
  <div class='container'>
    <div class='head'>
      <router-link :to="`/`">
        Back
      </router-link>
    </div>
    <div class='content'>
      <span v-if="loading">Loading...</span>

      <div v-if="post !== null">
        <h2>{{ post.title }}</h2>
        <p>
          {{ post.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchById } from '../API';

export default {
  name: 'Detail',
  created() {
    this.fetchData();
  },
  watch: {
    '$route': 'fetchData'
  },
  data: () => ({
    post: null,
    loading: true,
  }),
  methods: {
    fetchData() {
      this.loading = true;
      (async () => {
        this.post = null;

        const post = await fetchById(+this.$route.params.id);

        if (post) {
          this.loading = false;
          this.post = post;
          return;
        }

        this.$router.replace('/');
      })();
    }
  }
}
</script>

<style scoped>
  .container .head {
    text-align: right;
  }

  .container .content {
    margin-top: 32px;
  }

  .container .content > div > h2 {
    font-size: 24px;
    font-weight: 400;
  }

  .container .content > div > p {
    font-size: 16px;
    margin-top: 16px;
  }
</style>