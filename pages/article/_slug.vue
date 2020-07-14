<template>
  <div>
    <div v-if="article" class="contentContainer">
      <div class="judulContainer">
        <h2>Ringkasan</h2>
      </div>
      <div ref="chartContainer" class="chartContainer">
        <Chart class="chartElement" :chartUrl="chartUrl" :chartEmbed="chartEmbed"/>
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
      chartEmbed:false
    };
  },
  mounted() {
    console.log("in mounted");
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
    let article;
    try {
      article = await context.$strapi.getStrapiArticle(context.params.slug); //get article data from strapi plugin
    } catch (error) {}
    return { article };
  },
  methods: {
    setChart(para) {
      console.log("setting chart",para.paraEmbed)
      if (para.paraChart && !para.paraEmbed) {
        console.log('chart found')
        this.chartEmbed=false
        this.chartUrl = `http://ringkasan.net:1337${para.paraChart.url}`;
      }  
      console.log(para.paraEmbed==true)
      if (para.paraEmbed) {
        console.log('embed found',para.paraEmbed)
        this.chartEmbed=true
        this.chartUrl = para.paraEmbed;
      }
    },
    setWatcher(para, index, root, paraContainer) {
      console.log("in setWatcher");

      let ref = paraContainer[index];
      let options = {
        root: root,
        rootMargin: "-10% 0px -90% 0px",
        threshold: 0
      };
      let callback = (changes, observer) => {
        changes.forEach(change => {
          if (change.isIntersecting == true) {
            console.log(para)
            this.setChart(para);
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
  /* max-width: 600px; */
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
  min-height: 30vh;
}
img {
  max-height: 30vh;
}
iframe{
  min-height: 30vh;
  max-height: 30vh;
  width:100%;
}
.lastPara {
  min-height: 70vh;
}
.judulContainer {
  background-color: black;
  color: white;
  padding: 10px;
}
</style>