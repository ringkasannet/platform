<template>
  <div ref="elementArea">
    <h3>{{ }}</h3>
    <p>{{text}}</p>
    <button v-on:click="alert">Show Parent Ref </button>
  </div>
</template>


<script>
export default {
  props: ["parentRef", "title","text","index"],
  mounted:function(){
    // console.log(this.$parent)
    // console.log('in Mounted')
  },
  methods: {
    alert(){console.log(this.index,this.title)},
    setWatcher() {
      let options = {
        root: this.parentRef,
        rootMargin: "-10% 0px -90% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
      };

      let callback = (changes, observer) => {
        changes.forEach(change => {
          console.log(change.target,change.isIntersecting,change.intersectionRatio)
          if (change.isIntersecting == true) {
            this.$emit("activated", this.title);
          } 
        });
      };
      let observer = new IntersectionObserver(callback, options);
      observer.observe(this.$refs.elementArea);
      //   return observer;
    }
  },
  // watch: {
  //   parentRef: function(r) {
  //       console.log(r)
  //     // this.setWatcher();
  //   }
  // }
};
</script>