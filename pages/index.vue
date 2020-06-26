<template>
  <div class="main-container">
    <div id="demo">
    </div>
<!-- <div class="anim"></div> -->

    <div class="app-title">
      <h4>Ringkasan</h4>
    </div>
    <div class="content-container">
      <div class="chart-container">
        <transition name="fade">
          <img :src="img" class="chart" />
        </transition>
      </div>
      <div>
        <div class="element-container" ref="elementContainer">
          <!-- <div v-for="title in titles" :key="title" ref="elementArray" style="height:50px">{{title}}</div> -->
          <ArticleElement
            v-bind:parentRef="elementContainer"
            title="coba judul"
            v-on:activated="onActivated"
          ></ArticleElement>
          <ArticleElement
            v-bind:parentRef="elementContainer"
            title="coba judul2"
            v-on:activated="onActivated"
          ></ArticleElement>

          <div>
            Bawah
            <h3>Cerita 3</h3>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h3>Cerita 4</h3>
            <p>coba</p>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h3>Cerita 5</h3>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h3>Cerita 6</h3>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Element from "~/components/ArticleElement.Vue";
export default {
  // components: { Element },
  data: function() {
    return {
      img: "/covid.jpg",
      intersectionObserver: {},
      titles: ["a", "b", "c"],
      elementContainer: {},
      show:true
    };
  },
  mounted: function() {
    this.intersectionObserver = this.getObserver();
    this.setelementArea(this.$refs.elementContainer);
    this.elementContainer = this.$refs.elementContainer;
  },
  computed: {
    elementParent: function() {
      return this.$refs.elementContainer;
    }
  },
  methods: {
    onActivated(element) {
      console.log("in activated" + element);
      if (element == "coba judul2") {
        this.img = "/covid2.jpg";
      } else {
        this.img = "/covid.jpg";
      }
    },
    getObserver() {
      let options = {
        root: this.$refs.elementContainer,
        rootMargin: "0px 0px -90% 0px",
        threshold: 0
      };
      let callback = function(changes, observer) {
        changes.forEach(change => {
          console.log(change);
        });
      };
      let observer = new IntersectionObserver(callback, options);
      // this.$refs.elementArray.forEach(r=>{
      //   observer.observe(r)
      // })
      // observer.observe(this.$refs.elementContainer);
      return observer;
    },
    setelementArea(ref) {
      // console.log(ref.e)
      console.log("setting element area");
      console.log(window.innerHeight);
      console.log(ref.getBoundingClientRect());
      let height = window.innerHeight - ref.getBoundingClientRect().top + "px";
      console.log(height);
      ref.style.height = height;
    },
    fadeChange(){
      this.$refs.fadeitem.textContent="Halo berubah"
      console.log(this.$refs.fadeitem.textContent)
    }
  }
};
</script>

<style>
@media only screen and (max-width: 800px) {
  .main-container {
    position: fixed;
    top: 0px;
  }
  .chart {
    width: 100%;
  }
  .chart-container{
    /* animation-name: example;
    height:500px;
    background-color: red; */
  }
  .content-container {
    display: flex;
    flex-direction: column;
  }
  .element-container {
    /* height: 400px; */
    overflow: scroll;
  }
  
.anim {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}
}
</style>