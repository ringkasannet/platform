<template>
  <div>
    <div v-if="article" class="contentContainer">
      <div class="judulContainer">
        <h2>Ringkasan</h2>
      </div>
      <div class="articleContainer">
        <div class="chartContainer">
          <div
            ref="chartElement"
            class="chartElement"
            v-for="(para,index) in article.paras"
            v-bind:key="index"
          >
            <transition name="fade">
              <Chart
                v-if="chartLoaded[index]"
                v-show="chartShown[index]"
                class="chart"
                :chartUrl="para.paraChart.url"
              />
            </transition>
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
            <div>
              <svg class="circleElement" width="30" height="30" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle
                  v-show="chartShown[index]"
                  cx="20"
                  cy="20"
                  fill="none"
                  r="10"
                  stroke="red"
                  stroke-width="2"
                >
                  <animate
                    attributeName="r"
                    from="5"
                    to="15"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="1"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="20" cy="20" fill="grey" r="10" />
                <circle v-show="chartShown[index]" cx="20" cy="20" fill="red" r="10" />
              </svg>
            </div>

            <para :para="para.paraText"></para>
          </div>
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
      article = await context.$strapi.getStrapiArticle(context.params.slug); //get article data from strapi plugin
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
            console.log(index, false);
          } else if (change.isIntersecting == true) {
            this.$set(this.chartShown, index, true);
            this.$set(this.chartLoaded, index, true);
            console.log(index, true);
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
.articleContainer {
  /* position: fixed;
  top: 0px; */
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.paraContainer {
  overflow: scroll;
  flex: 1;
}
.paraElement {
  margin: 0 20px 5px 0;
  background-color: white;
  display: flex;
  flex-direction: row;
}
.circleElement {
  position: sticky;
  top: 0;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media only screen and (min-width: 479px) {
  .contentContainer {
    display: flex;
    flex-direction: column;
  }
  .articleContainer {
    display: flex;
    flex-direction: row;
    height: 80%;
    margin: 40px;
    width: auto;
  }
  .chartContainer {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .chartElement {
    /* position: absolute;
    left:0px;
    bottom:0px; */
    width: 100%;
    height: 100%;
  }
  .chart {
    height: 100%;
    /* width:100%; */
    /* position: absolute;*/
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .paraContainer {
    flex: 1;
  }
  .lastPara {
    min-height: 100vh;
  }
  img {
    max-height: 100%;
    max-width: 100%;
  }
  iframe {
    height: 100%;
    width: 100%;
    min-height: 70vh;
    align-self: stretch;
  }
  span {
    width: 100%;
  }
}
</style>