<template>
  <div id='app'>
    <chart :data='points2'></chart>
  </div>

</template>
<script>
import Chart from '~/components/BarChart'

export default {
  name: 'app',
  components: {
    chart: Chart
  },
  data () {
    return {
      points2: [
              {
                name: 'Chrome',
                y: 200.74,
                drilldown: 'Chrome'
              },
              {
                name: 'Firefox',
                y: 10.57,
                drilldown: 'Firefox'
              },
              {
                name: 'Internet Explorer',
                y: 7.23,
                drilldown: 'Internet Explorer'
              },
              {
                name: 'Safari',
                y: 5.58,
                drilldown: 'Safari'
              },
              {
                name: 'Edge',
                y: 4.02,
                drilldown: 'Edge'
              },
              {
                name: 'Opera',
                y: 1.92,
                drilldown: 'Opera'
              },
              {
                name: 'Other',
                y: 7.62,
                drilldown: null
              }
            ]
    }
  },
  beforeDestroy () {
  },
  mounted () {}
}
</script>
