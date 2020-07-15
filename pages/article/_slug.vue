<template>
  <div>
    <div v-if="article" class="contentContainer">
      {{chartShown}}
      <div class="judulContainer">
        <h2>Ringkasan</h2>
      </div>

      <div class="chartContainer">
        <div
          ref="chartElement"
          class="chartElement"
          v-for="(para,index) in article.paras"
          v-bind:key="index"
        >
          <Chart
            v-if="chartLoaded"
            v-show="chartShown[index]"
            class="chart"
            :chartUrl="para.paraChart.url"
          />
        </div>
      </div>

      <div ref="paraContainer" class="paraContainer">
        <div
          ref="paraElement"
          class="paraElement"
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
      chartEmbed: false,
      chartShown: [],
      chartLoaded: []
    };
  },
  mounted() {
    console.log("in mounted");
    this.article.paras.forEach((para, index) => {
      this.chartShown.push(false);
      this.chartLoaded.push(false);
      this.setWatcher(
        para,
        index,
        this.$refs.paraContainer,
        this.$refs.paraElement
      );
    });
  },
  async asyncData(context) {
    let article;
    try {
      article = await context.$strapi.getStrapiArticle(
        context.params.slug
      ); //get article data from strapi plugin
    } catch (error) {
      return { article: { paras: [] } };
    }
    return { article };
  },
  methods: {
    setWatcher(para, index, root, paraElement) {
      console.log(this.chartShown);
      let ref = paraElement[index];
      let options = {
        root: root,
        rootMargin: "-10% 0px -90% 0px",
        threshold: 0
      };
      let callback = (changes, observer) => {
        console.log("in callback");
        changes.forEach(change => {
          if (change.isIntersecting == false) {
            this.$set(this.chartShown, index, false);
            console.log(index,false);
          } else if (change.isIntersecting == true) {
            this.$set(this.chartShown, index, true);
            this.$set(this.chartLoaded, index, true);
            console.log(index,true);
          }
          // console.log(this.chartShown)
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
.paraContainer {
  overflow: scroll;
  flex: 1;
}
.paraElement {
  margin: 0 20px;
  background-color: white;
}

.chartContainer {
  flex-basis: 200px;
  text-align: center;
  justify-content: center;
  background-color: black;
  min-height: 30vh;
  position: relative;
}
.chartElement {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
}
img {
  max-height: 30vh;
}
iframe {
  min-height: 30vh;
  max-height: 30vh;
  width: 100%;
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