<template>

  
  <div class="main-container" v-on:scroll="alert" >
    <!-- <Chart class="chart"></Chart> -->

    <div class="main-title">
      <h1 class="app-title"> Ringkasan </h1>
    </div>
    <div class="content-container">
    <h1 class="article-title"> Lumpuhnya Ekonomi Dunia Di Masa Pandemi </h1>

    <div class="chart-container" ref="chartArea">
      <p class="chart-title">Peta Dampak Pandemi Pada Ekonomi Dunia</p>
      <Chart class="chart" ref="chart"></Chart>
    </div>

    <div class="text-container" ref="textArea">
      <h2> Negara di dunia lumpuh karena Corona </h2>
      <h3>Cerita 1</h3>
      <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h3>Cerita 2</h3>
      <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h3>Cerita 3</h3> 
      <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h3>Cerita 4</h3>
      <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h3>Cerita 5</h3>
      <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h3>Cerita 6</h3>
      <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h3>Cerita 7</h3>
      <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
    </div> 

    </div>
    <!-- <div class="bottom">
      Bottom
    </div> -->
  </div>
</template>

<script>
// import Logo from "~/components/Logo.vue";
// import Chart from "~/components/charts/Chart.vue";


export default {

  data: function() {
    return {
      obs:{},
      intersected:'nothing',
      textRefs:{},
      textY:0,
      chartHeight:0,
    };
  },
  computed:{
    textRef:function(){
      return this.$refs.chartArea
    }
    
  },
  mounted:function(){
    console.log('mounted')
    let sf=require('stickyfilljs') 
    console.log(sf)
    sf.add(this.$refs.chartArea)

    let options = {
      root: null, // relative to document viewport 
      rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 1 // visible amount of item shown in relation to root
    };
    console.log(this.$refs.chartArea)

    var onChange= (changes,observer)=>{
      changes.forEach(change=>{
        console.log(change)
        this.intersected=change.isIntersecting
        console.log(change.intersectionRatio)
        if (change.intersectionRatio<1) {
          this.intersected="false"
        } else {
          this.intersected="true"
        }
        this.obs=change
      })
    };
    let observer = new IntersectionObserver(onChange, options);
    observer.observe(this.$refs.chartArea)
  },
  methods:{
    alert:function(){
      // var textY=this.$refs.textArea.$el.getBoundingClientRect().y
      var chartHeight=this.$refs.chartArea.getBoundingClientRect().height
      // var textY=this.$refs.textArea.getBoundingClientRect().y
      var textY=this.$refs.textArea.offsetTop

      var dif=textY-chartHeight
      console.log(textY,chartHeight)
      this.textY=textY
      this.chartHeight=chartHeight
      if (dif<0) { 
        console.log("reached top")
      }
      this.textRefs=this.$refs.textArea
      console.log(this.$refs.chartArea)


      // console.log(chartY)
      // if (chartY<0) {
      //   console.log('reached the top')
      // }
    }
  }
};
</script>

<style>


p{
  margin:10px 0;
}
h3{
  margin:10px 0;
  color:#99000d;
}
.app-title{
  color:#99000d;

}
.article-title{
  color:rgb(20, 20, 20);
}
.main-container{
  height: 600px;
  display:flex;
  flex-direction: column;
    padding:30px;

  /* overflow: hidden; */
}
.content-container{
  display:flex;
  flex-direction:row;
  padding:30px 0;
  width:50%;
}
.chart-container {
  border: solid lightgray 1px;
  /* position: fixed;
  left:calc(100%/2); */
  /* top: 110px; */
  flex:1.5;
  align-self: flex-start;
      padding:30px 15px;
      margin: 10px 30px 0 30px;

}
.text-container{
  flex:1;
  padding:15px 0;
  min-width:400px;
  min-height:calc(100%*3);
}
.bottom{
  position: fixed;;
  bottom:0;
  width:100%;
  height:50px;
  background-color:white;
}
.chart {
  padding: 15px 0;
  /* display: flex;
  flex-direction: column;
  opacity: 0.8;
  flex:1; */
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* display: block; */
  /* font-weight: 300; */
  /* font-size: 70px; */
  color: #0c0502c2;
  letter-spacing: 1px;
  /* text-align:center; */
  font-weight: normal;
  padding: 0 30px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.body{
  font-family:helvetica;
}

@media only screen and (max-width: 800px) {

  .main-container{
  height: 600px;
  display:block;
  /* display:flex;
  flex-direction: column; */
  padding:30px 15px;
  width:100%;
  /* overflow: hidden; */
}
.content-container{
  display:flex;
  flex-direction:column;
  padding:10px 0;
  width:100%;
}
.chart-container {
  border: none;
  /* position: fixed;
  left:calc(100%/2);
  top: 110px; */
  position:sticky;
  top:0px;
  /* position:sticky;
  position:-webkit-sticky;
  top:10px; */
  /* top:0px; */
  width:100%;
  flex:1.5;
  align-self: flex-start;
      padding:10px;
      margin: 0;
      background-color:white;

}
.chart {
  padding: 15px 0;
  /* display: flex;
  flex-direction: column;
  opacity: 0.8;
  flex:1; */
}
.chart-title{
  margin:15px 0;
}
.text-container{
  flex:1;
  padding:15px 0;
  width:100%;
  min-width:0;
  /* min-height:calc(100%*3); */
  display:flex;
  flex-direction: column;
}
}
</style>
