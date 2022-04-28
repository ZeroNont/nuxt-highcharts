<template>
  <div id="app">
    <v-container class="bv-example-row">
  <v-row>
   <v-card
  elevation="2"
></v-card>
    <!-- <v-col><highcharts class="hc" :options="chartOptions" ref="chart"></highcharts></v-col> -->
    <v-col><chart :data='points2'></chart></v-col>
  </v-row>
</v-container>
 <figure class='highcharts-figure'>
    <div id='container'></div>
  </figure>
  </div>
</template>

<script>
import Highcharts from 'highcharts'
import axios from 'axios'
import Chart from '~/components/PieChart'
export default {
  name: 'IndexPage',
  components: {
    chart: Chart
  },
    beforeCreate () {
    let response
    let points
    axios.get('http://localhost:3001/get_data_all_courier',
    {
        }).then(function (res) {
            response = res.data

            Object.keys(response).forEach(function (el) {
            response[el] = parseInt(response[el])
            })

            this.points = response.data.courier
            console.warn(points)
            console.warn('response success')
        }).catch(function (error) {
            if (error.response) {
                response = error.response
                console.log('response error')
            }
        })
  },
  data () {
    return {
      chartOptions: {
        series: [
          {
            data: [1, 2, 3]
          }
        ]
      },

      points2:
      [
        {
                name: 'DHL',
                y: 11.7264
            },
            {
                name: 'FLASH',
                y: 12.3779
            },
            {
                name: 'SCG',
                y: 58.3062
            },
            {
                name: 'THP',
                y: 17.5896
            }
      ]
    }
  },
  mounted () {
     this.displayHighCharts()
    let response
    let points
    axios.get('http://localhost:3001/get_data_all_courier',
    {
        }).then(function (res) {
            response = res.data
            console.warn(response.data.courier)
            console.warn(res.data)
            points = response.data.courier
            console.warn(points.json())
            console.log('response success')
        }).catch(function (error) {
            if (error.response) {
                response = error.response
                console.log('response error')
            }
        })
  },

   beforeDestroy () {
  },
   methods: {
    displayHighCharts () {
      Highcharts.chart('container', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Monthly delivery list.'
        },
        accessibility: {
          announceNewData: {
            enabled: true
          }
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          title: {
            text: 'Total Delivery Items'
          }
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: '{point.y:.0f} Items'
            }
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat:
            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f} Items</b> of total<br/>'
        },
        series: [
          {
            name: 'Browsers',
            colorByPoint: true,
            data: [
              {
                name: 'Chrome',
                y: 200,
                drilldown: 'Chrome'
              },
              {
                name: 'Firefox',
                y: 10,
                drilldown: 'Firefox'
              },
              {
                name: 'Internet Explorer',
                y: 7,
                drilldown: 'Internet Explorer'
              },
              {
                name: 'Safari',
                y: 5,
                drilldown: 'Safari'
              },
              {
                name: 'Edge',
                y: 4,
                drilldown: 'Edge'
              },
              {
                name: 'Opera',
                y: 1,
                drilldown: 'Opera'
              },
               {
                name: 'KERRY',
                y: 58,
                drilldown: 'KERRY'
            },
              {
                name: 'Other',
                y: 7,
                drilldown: null
              }
            ]
          }
        ]
      })
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
