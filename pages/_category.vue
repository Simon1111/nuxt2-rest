<template>
  <div class="container">
    <h1 class="chapter-title">{{categoryName}}</h1>
    <Navigation :categories="categories" />
    <Posts />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async fetch({store, params, query, error}){
    let posts = store.getters['posts/categories'];
    if (!posts.length) {
      await store.dispatch('posts/fetchCategories');
      posts = store.getters['posts/categories'];
    }
    const lenghtCategories = posts.filter(c => c.slug === params.category).length;

    if (lenghtCategories > 0) {
      await store.dispatch('posts/fetch', { page: query.page, category: params.category });
    } else {
      error({
        statusCode: 404,
        message: 'Post not found'
      });
    }
  },

  head () {
    return {
      title: `Truecaller - Blog | ${this.categoryName}`,
      meta: [
        { hid: 'description', name: 'description', content: '' }
      ]
    };
  },

  computed: {
    ...mapGetters({
      posts: 'posts/list',
      categories: 'posts/categories'
    }),

    categoryName() {
      const activeCategory = this.$nuxt.$route.params?.category;
      return this.categories.filter(c => c.slug === activeCategory)[0]?.name;
    }
  }
}
</script>

<style scoped lang="scss">
nav{
  display: flex;
  flex-direction: column;
}
</style>
