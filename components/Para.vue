
<script>
import Judul from "~/components/Judul.vue";
import Logo from "~/components/Logo.vue"

export default {
  computed: {
    dynamicComponent() {
      return {
        template: `<div> ${this.para} </div>`,
        components:{Judul,Logo}
      };
    }
  },
  props: ["para"],
  render: function(createElement) {
    return createElement("div", [createElement(this.dynamicComponent)]);
  }
};
</script>