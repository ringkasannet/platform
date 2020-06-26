<template>
  <div>
    <div style="height:100px"></div>
    <div ref="mainContainer" class="main-container">
      <div style="height:200px; background-color:blue">Top</div>
      <div ref="innerContainer" class="inner-container">
        <h1>coba</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function() {
    let options = {
      root: this.$refs.mainContainer,
      rootMargin: "0px 0px -90% 0px",
      threshold: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.7,0.9,1]
    };

    let callback = function(changes, observer) {
      changes.forEach(change => {
        console.log(change.intersectionRatio);
        console.log(change)
      });
    };
    let observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.innerContainer);
  }
};
</script>

<style scoped>
.main-container {
  height: 400px;
  background-color: yellow;
  overflow: scroll;
}
.inner-container {
  background-color: green;
  height: 500px;
}
</style>