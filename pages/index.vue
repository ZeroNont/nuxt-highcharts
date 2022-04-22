<template>
  <div id="app">
    <v-container class="bv-example-row">

  <v-row>
   <v-card
  elevation="2"
></v-card>
    <v-col><highcharts class="hc" :options="chartOptions" ref="chart"></highcharts></v-col>
    <v-col><chart :data='points2'></chart></v-col>
  </v-row>
</v-container>
  </div>
</template>

<script>
import axios from 'axios'
import Chart from '~/components/PieChart'

export default {
  name: 'IndexPage',
  components: {
    chart: Chart
  },
  mounted () {
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
   beforeDestroy () {
  },
  methods: {
}
}
</script>
