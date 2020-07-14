

<script>
export default {
  computed: {
    dynamicComponent() {
      return {
        template: this.chartHtml,
        props: ["chartUrl"]
      };
    }
  },
  props: ["chartEmbed","chartUrl"],
  watch: {
    chartUrl(c) {
      console.log("embed: ",this.chartEmbed,this.chartUrl);
      let ext = this.chartUrl.split(".").pop();
      if (!this.chartEmbed){
      switch (ext) {
        case "jpeg":
        case "jpg": {
          this.chartHtml = `<div> <img :src="chartUrl" /> </div>`;
          break;
        }
      }} else if (this.chartEmbed){
        console.log('assigning embed')
        this.chartHtml = `<div> <span v-html="chartUrl"></span></div>`
      }
      this.$forceUpdate();
    }
  },
  data() {
    return {
      chartHtml: `<div>init</div>`
    };
  },
  render: function(createElement) {
    return createElement("div", [
      createElement(this.dynamicComponent, {
        props: { chartUrl: this.chartUrl }
      })
    ]);
  }
};
</script>