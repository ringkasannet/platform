<template>
  <div class="main-container">
    <div class="content-container">
      <div class="app-title">
        <h4>Ringkasann</h4>
      </div>
      <div class="chart-container" ref="chartContainer">
        <!-- <div v-for="(p,index) in article.paras" :key="index" class="chart-roller" ref="chartRoller">
          <img :src="p.paraImage" class="chart" />
        </div>-->
        <img :src="activeChart" ref="chart" class="chart" />
      </div>
      <div ref="articleContainer" class="article-container">
        <div
          v-for="(p,index) in article.paras"
          :key="index"
          class="para-container"
          ref="paraContainer"
          v-bind:class="{lastPara : index === (article.paras.length-1)}"
        >
          <ArticleElement :title="p.paraTitle" :text="p.paraText" :parentRef="articleContainer" :index="index"></ArticleElement>
          <!-- <h2 class="para-title">{{p.paraTitle}}</h2>
          <p>{{p.paraText}}</p>
          <p>"1 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>-->
        </div>
      </div>
    </div>
    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
  </div>
</template>

<script>
import gsap from "gsap";
// import categoriesQuery from '~/apollo/queries/category/categories'

export default {
  // apollo: {
  //   categories: {
  //     prefetch: true,
  //     query: categoriesQuery
  //   }
  // },
  asyncData(context) {
    let article = {};
  },
  data: function() {
    return {
      article: {
        title: "dampak pandemi",
        paras: [
          {
            paraTitle: "Ini para 1",
            paraText: "Ini text para 1",
            paraImage: "/uploads/thumbnail_Global_crash_fears_as_virus_hammers_US_economy_171c6ccb266_large_5a859856ee.jpeg"
          },
          {
            paraTitle: "Ini para 2",
            paraText: "Ini text para 2",
            paraImage: "https://imgur.com/T8zCfZe"
          }
        ] 
      },
      activeChart: "/uploads/thumbnail_Global_crash_fears_as_virus_hammers_US_economy_171c6ccb266_large_5a859856ee.jpeg",
      articleContainer: {},
      animActive: true
    };
  },
  mounted: function() {
    this.articleContainer = this.$refs.articleContainer;
    console.log(this.$refs.paraContainer.index);
  },
  methods: {
    fadeIn(el) {
      gsap.fromTo(el, { opacity: 0 }, { duration: 2, opacity: 1 });
      // this.animActive=true;
    },
    onActivated(para) {
      if (para == "coba judul2") {
        this.img = "/covid2.jpg";
        this.fadeIn(this.$refs.chartContainer);
      } else {
        this.img = "/covid.jpg";
        this.fadeIn(this.$refs.chartContainer);
      }
    },
    getObserver() {
      let options = {
        root: this.$refs.articleContainer,
        rootMargin: "0px 0px -100% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
      };
      let callback = function(changes, observer) {
        changes.forEach(change => {});
      };
      let observer = new IntersectionObserver(callback, options);
      return observer;
    }
  }
};
</script>

<style>
p {
  line-height: 1.5rem;
}
.app-title {
  background-color: rgb(34, 33, 33);
  color: white;
  padding: 10px;
}
.para-title {
  padding: 10px 0 20px 0;
}
@media only screen and (max-width: 800px) {
  .main-container {
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100%;
    /* overflow: scroll; */
  }
  .content-container {
    /* display: flex;
    flex-direction: column;
        display:flex  */
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .chart-container {
    /* position: absolute;
    top: 0px; */
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    flex-basis: 35vh;
    background-color: black;
  }

  .chart {
    /* height: 300px; */
    height: 35vh;
  }

  .article-container {
    width: 100%;
    overflow: scroll;
    flex: 1;
  }
  .para-container {
    /* height: 400px; */
    /* position: relative;
    top: 50px; */
    width: 100%;
    padding: 20px 20px 0px 20px;
    /* margin: auto; */
  }
  .lastPara {
    min-height: 100%;
    padding: 20px;
  }

  .anim {
    animation-name: example;
    animation-duration: 1s;
  }
  @keyframes example {
    from {
      opacity: 0.2;
    }
    to {
      opacity: 1;
    }
  }
}
</style>