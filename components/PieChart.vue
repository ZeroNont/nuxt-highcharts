<template>
  <highcharts :options="chartOptions" :updateArgs="updateArgs"></highcharts>
</template>

<script>
export default {
  props: ['data', 'title'],
  data () {
    return {
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        exporting: {
          enabled: false
        },
        title: {
          text: ''
        },
        series: [
          {
            data: this.data
          }
        ]
      }
    }
  },
  watch: {
    title (newValue) {
      this.chartOptions.title.text = newValue
    },
    data (newValue, oldValue) {
      console.log('pie watch fired', newValue)
      for (const obj of newValue) {
        const x = this.$children[0].chart.series[0].data.findIndex(
          s => s.name === obj.name
        )
        if (x !== -1) {
          console.log('pair found', obj, obj.y)
          this.$children[0].chart.series[0].data[x].update(obj.y)
        }
      }
    }
  },
  mounted () {
    if (typeof this.title !== 'undefined') {
      this.chartOptions.title.text = this.title
    }
  }
}
</script>
