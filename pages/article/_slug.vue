
<style>
:root{
  --main-bg-color: black;
}
.judulContainer {
  padding: 10px;
  background-color: var(--main-bg-color);
  color: white;
}
.contentContainer {
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
  .chartContainer {
  background-color: var(--main-bg-color);
  }
.paraElement {
    display: flex;
    /* padding: 20px 0 0 0; */
  }
img {
  width: 100%;
  object-fit: contain;
}

span {
  height: 100%;
  width: 100%;
}
.circleElement {
  position: sticky;
  top: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


@media only screen and (max-width: 470px), (min-height:500px) and (orientation:portrait){ /* portrait */
  img {
    /* max-width: 100%; */
    max-height: 35vh;
  }
  span{
    width:100%;
  }
  iframe {
    width:100%;
    height:100%;
  }
  .articleContainer {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .chartContainer {
    flex-basis: 1;
    position: relative;
    height: 35vh;
  }
  .chartElement {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 35vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .chart{
    width:100%;
    height:100%;
  }
  .paraContainer {
    flex: 1;
    max-height: 65vh;
    overflow: scroll;
    margin: 10px 10px 0 0;
  }
  .lastPara {
    min-height: 65vh;
  }
}


@media only screen and (min-width: 470px) and (orientation: landscape) { /*  Landscape */
  .articleContainer {
    display: flex;
    height: 85%;
    margin: 20px;
  }
  .paraContainer {
    flex: 1;
    overflow: scroll;
    height: 90%;
  }
  .chartContainer {
    flex: 1;
    background-color: var(--main-bg-color);
    height: 92%;
    position: relative;
  }
  .chartElement {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .chart {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lastPara {
    min-height: 100vh;
  }
  iframe {
    width: 100%;
    min-height: 50vh;
  }
}
@media only screen and (min-height:600px) and (min-width: 470px) {
  .articleContainer {
    height: 95%;
  }
   /* .lastPara {
    min-height: 65vh;
  } */
}
</style>

<template>
  <div>
    <div v-if="article" class="contentContainer">
      <!-- {{chartShown}} -->
      <Judul></Judul>
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
                v-show="chartShown[index]"
                v-if="chartLoaded[index]"
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
              <svg
                class="circleElement"
                width="30"
                height="30"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
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
      article = await context.$strapi.getStrapiArticle(context.params.slug
      ); //get article data from strapi plugin
    } catch (error) {
      return { article: { paras: [] } };
    }
    return { article };
  },
  methods: {
    setWatcher(para, index, root, paraElement) {
      let ref = paraElement[index];
      let options = {
        root: root,
        rootMargin: "-10% 0px -90% 0px",
        threshold: 0
      };
      let callback = (changes, observer) => {
        changes.forEach(change => {
          if (change.isIntersecting == false) {
            this.$set(this.chartShown, index, false);
            console.log(index, change.isIntersecting);
          } else if (change.isIntersecting == true) {
            this.$set(this.chartShown, index, true);
            this.$set(this.chartLoaded, index, true);
            console.log(index, change.isIntersecting);
          }
          // console.log(this.chartShown)
        });
      };
      let observer = new IntersectionObserver(callback, options);
      let o = observer.observe(ref);
      console.log(observer);
    }
  }
};
</script>
