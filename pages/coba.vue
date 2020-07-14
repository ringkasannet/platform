<template>
  <div>
    <div v-if="article" class="contentContainer">
      <h1>Halo {{name}}</h1>
      <div class="judulContainer">
        <h2>Ringkasan</h2>
      </div>
      <div ref="chartContainer" class="chartContainer">
        <Chart class="chartElement" :chartUrl="chartUrl" />
      </div>
      <div ref="articleContainer" class="articleContainer">
        <div
          ref="paraContainer"
          class="paraContainer"
          v-for="(para,index) in article.paras"
          v-bind:key="index"
          :class="{lastPara:index===(article.paras.length-1)}"
        >
          <para :para="para.paraText"></para>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: { paras: [] },
      chartUrl: "init",
      name: "evan"
    };
  },
  mounted() {
    this.name = "evan Oktavianus";
    console.log(this.article.paras)
    this.article.paras.forEach((para, index) =>
      this.setWatcher(
        para,
        index,
        this.$refs.articleContainer,
        this.$refs.paraContainer
      )
    );
  },
  async asyncData(context) {
    return {article: await context.$strapi.getStrapiArticle('ekonomi-dunia-dilanda-pandemi')} ;
  },
  //   asyncData(context) {
  //     var article;
  //     console.log("in asyncdata");
  //     return {};
  //     // article = await context.$strapi.getArticle(context.params.slug);
  //     // try {
  //     //   article = await context.$strapi.getArticle(context.params.slug); //get article data from strapi plugin
  //     // } catch {
  //     //   console.log("Article not found");
  //     // }
  //     // return {  };
  //   },
  methods: {
    setChart(chart) {
      this.chartUrl = `http://ringkasan.net:1337${chart.url}`;
    },
    setWatcher(para, index, root, paraContainer) {
        let ref = paraContainer[index];
        let options = {
          root: root,
          rootMargin: "-10% 0px -90% 0px",
          threshold: 0
        };
        let callback = (changes, observer) => {
          changes.forEach(change => {
            if (change.isIntersecting == true) {
              this.setChart(para.paraChart);
            }
          });
        };
        let observer = new IntersectionObserver(callback, options);
        observer.observe(ref);
    }
  }
};
</script>

<style>
.contentContainer {
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.articleContainer {
  overflow: scroll;
  flex: 1;
}
.paraContainer {
  margin: 0 20px;
  background-color: white;
}
.chartContainer {
  flex-basis: 200px;
  text-align: center;
  background-color: black;
}
img {
  max-height: 30vh;
}
.lastPara {
  min-height: 100vh;
}
.judulContainer {
  background-color: black;
  color: white;
  padding: 10px;
}
</style>