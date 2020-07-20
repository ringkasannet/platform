
<template>
  <div>
    <span v-html="chartHtml"></span>
  </div>
</template>
<script>
export default {
  props: ["chartUrl"],
  mounted() {
    this.setupChart();
  },
  methods: {
    setupChart() {
      let ext = this.chartUrl.split(".").pop();
      console.log(ext);
      switch (ext) {
        case "jpeg":
        case "jpg": {
          this.chartHtml = `<img src="http://ringkasan.net:1337${this.chartUrl}" />`;
          break;
        }
        case "html": {
          // let chartHtml = this.$axios.$get(
          //   `http://ringkasan.net:1337${this.chartUrl}`
          // );
            this.chartHtml = `<iframe src="http://ringkasan.net:1337${this.chartUrl}" style="border:none"></iframe>`;          
        }
      }
      this.$forceUpdate();
    }
  },
  data() {
    return {
      chartHtml: `<div>init</div>`
    };
  }
};
</script>