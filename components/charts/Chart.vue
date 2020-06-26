<template> 
<div> 
    <!-- <p class="ChartTitle">Peta Sebaran Pertumbuhan Ekonomi Dunia </p> -->
    <GChart
    type="GeoChart"
    :data="countryData"
    :options="chartOptions"
    :resizeDebounce="500"
    />
    <p class="ChartNote">*Data proyeksi Bank Dunia per Juni 2020, tidak semua negara tersedia</p>
</div>
</template>

<style scoped>
.ChartTitle{
  /* text-align:center; */
  /* text-decoration: underline; */
  margin: 1em 0;
  font-size: 15px;
}
.ChartNote{
  font-size: 10px;
}
</style>

<script>
import { GChart } from 'vue-google-charts'
import Data from './growth2020.js'
var holder=[['Country','Growth']]
Data.map(d=>{
    var dummy=[d['Country Name'],Number(d['2020'])]
    holder.push(dummy)
})

export default {
    components: {
    GChart
  },
  data () {
    return {
      chartOptions: {
          title: 'Company ',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        colorAxis: {
            values:[-15,-5,-0.0001,0,7],
            colors: ['black','#99000d','#fee5d9', '#ffffd4', '#fec44f']}
            // backgroundColor: '#c7e2f2',


      }
    }
  },
  computed:{
      countryData:function(){
          return holder
  }
  }
}
</script>