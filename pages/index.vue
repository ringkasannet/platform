<style scoped>
@media screen and (max-width: 470){
  
}
a {
  text-decoration: none;
  color: black;
}
.mainContainer {
  background-color: black;
  min-height: 100vh;
}
.categoryContainer {
  margin: 10px 20px;
  border-top: white 1px solid;
}
.categoryElement {
  margin: 0 0 20px 0;
}
.categoryHeader {
  color: white;
  margin: 0 0 10px 0;
}
.articleContainer {
  border: black 1px solid;
  background-color: white;
}
.captionContainer {
  padding: 10px;
}
.captionImage {
  width: 100%;
}
</style>
<template>
  <div class="mainContainer">
    <Judul></Judul>
    <div class="categoryContainer">
      <div class="categoryElement" v-for="(category,index) in categories" v-bind:key="index">
        <div class="categoryHeader">
          <h1>{{category.name}}</h1>
        </div>
        <div
          class="articleContainer"
          v-for="(article,index) in category.articles"
          v-bind:key="index"
        >
          <nuxt-link :to="'/article/'+article.slug">
            <img class="captionImage" :src="'http://ringkasan.net:1337'+article.articleImage.url" />
            <div class="captionContainer">
              <h3>{{article.articleTitle}}</h3>
              <p>{{article.articleSummary}}</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    let categories = await context.$strapi.getStrapiCategories();
    return { categories };
  }
};
</script>

