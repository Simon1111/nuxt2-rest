<template>
  <div class="container">
    <section class="content-txt">
      <div class="error">
        <img src="~/assets/svg/error.svg" alt="404" />
        <div>
          <h1 v-html="title" />
          <p v-html="description" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "404 - Page not found",
    description: "The page you were looking for could not be found.<br /><br />Please check that you entered the url correctly or have a look at the links at the bottom of the page to find what you were looking for."
  })
};
</script>

<style lang="scss" scoped>
  .error{
    display: flex;
    margin: auto;
    max-width: 720px;
    img{
      margin-right: 22px;
    }
  }
  @media screen and (max-width: 768px) {
    .error{
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>

