<template>
  <Header />
  <Main />
  <Footer />
</template>

<script>
import Header from './template/Header.vue';
import Main from './template/Main.vue';
import Footer from './template/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  }
}
</script>
