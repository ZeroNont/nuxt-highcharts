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
    tooltip: {
      pointFormat: '{series.name}: <br>{point.percentage:.2f} %<br>'
    },
      plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>:<br>{point.percentage:.2f} %<br>'
        }
      }
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
<style scoped>
.highcharts-figure,
.highcharts-data-table table {
  min-width: 310px;
  max-width: 800px;
  margin: 1em auto;
}

#container {
  height: 400px;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}
.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}
.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}
.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}
.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}
.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>
