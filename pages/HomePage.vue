<script src="https://unpkg.com/vue@2.2.6/dist/vue.js"></script>
<template>
<v-container class="grey lighten-5">
    <v-col cols="2" align="end" light>
         <v-select light v-model="input.year_id" :items="years" item-value="id" item-text="name"  />
    </v-col>
<v-card class="card" style="padding:10px ">
<v-row >
   <v-col cols="3"   light>
        <p class="text-h4" style="color:#303030 !important">
        Shipping
        </p>
  </v-col>
</v-row>
 <v-row>
   <v-col><v-card
    class="mx-auto"
    max-width="344"
    style="background: #369FFF;"
  >
<v-card-text>
      <p class="h4 " >
        อยู่ระหว่างขนส่ง
      </p>
      <p class="h5">
        14 Items
      </p>
    </v-card-text>
  </v-card></v-col>
   <v-col><v-card
    class="mx-auto"
    max-width="344"
    style="background: #FF7E07; "
  >
   <v-card-text>
      <p class="h4 " >
        ได้รับพัสดุแล้ว
      </p>
      <p class="h5">
        14 Items
      </p>
    </v-card-text>
  </v-card></v-col>
   <v-col><v-card
    class="mx-auto"
    max-width="344"
    style="background: #8AC53E;"
  >
   <v-card-text>
      <p class="h4 ">
        Order ที่ถูกสร้าง
      </p>
      <p class="h5">
        14 Items
      </p>
    </v-card-text>
  </v-card></v-col>
   <v-col><v-card
    class="mx-auto"
    max-width="344"
    style="background: #FFC000;"
  >
   <v-card-text>
      <p class="h4 " >
        พัสดุที่ถูกยกเลิก
      </p>
      <p class="h5" >
        14 Items
      </p>
    </v-card-text>
  </v-card></v-col>
 </v-row>
 <br>
</v-card>
<br><hr><br>
 <v-card class="card" style="padding:10px">
 <p class="text-h4" style="color:#303030 !important">
        Monthly delivery list
      </p>
 <v-col >
     <figure class='highcharts-figure'>
    <div id='container'></div>
  </figure>
 </v-col>
 </v-card>
 <br><hr><br>
 <v-card class="card" style="padding:10px ">
   <v-col cols="2" class="d-flex justify-end" light>
         <v-select light v-model="input.company_id" :items="company" item-value="id" item-text="name"  />
    </v-col>
 <v-row>
      <v-col cols="6">
        <v-card class="card" style="padding:20px">
  <p class="text-h4" style="color:#303030 !important">
        Payment
        </p>
        <v-row>
<v-col cols="6">
     <v-card class="full-height"
    max-width="344"
    style="background: #FFFFFF; padding:10px">
    <v-row>
      <v-col cols="5">  <v-img
  src="https://assets.dpdhl-brands.com/guides/dhl/guides/design-basics/logo-and-claim/logo/versions-01.png" height="100" style="border-radius: 15%; margin-top:10px;"
></v-img></v-col>
      <v-col>  <v-card-text>
      <p class="text-h5 " >
       DHL
      </p>
      <p class="text-h6">
        14 Items
      </p>
    </v-card-text></v-col>
    </v-row>
    </v-card>
  </v-col>
 <v-col cols="6">
     <v-card class="full-height"
    max-width="344"
    style="background: #FFFFFF; padding:10px">
    <v-row>
      <v-col cols="5">  <v-img
  src="https://download-th.com/wp-content/uploads/2021/02/Flash-express.jpg" height="100" style="border-radius: 15%; margin-top:10px;"
></v-img></v-col>
      <v-col>  <v-card-text>
      <p class="text-h5 " >
       FLASH
      </p>
      <p class="text-h6">
        14 Items
      </p>
    </v-card-text></v-col>
    </v-row>
    </v-card>
  </v-col>
  </v-row>
  <v-row>
 <v-col cols="6">
     <v-card class="full-height"
    max-width="344"
    style="background: #FFFFFF; padding:10px">
    <v-row>
      <v-col cols="5">  <v-img
  src="https://www.scgexpress.co.th/wp-content/themes/scgx/assets/img/brand-logo-square.jpg" height="100" style="border-radius: 15%; margin-top:10px;"
></v-img></v-col>
      <v-col>  <v-card-text>
      <p class="text-h5 " >
       SCG
      </p>
      <p class="text-h6">
        14 Items
      </p>
    </v-card-text></v-col>
    </v-row>
    </v-card>
  </v-col>
  <v-col cols="6">
     <v-card class="full-height"
    max-width="344"
    style="background: #FFFFFF; padding:10px">
    <v-row>
      <v-col cols="5">  <v-img
  src="https://file.thailandpost.com/upload/content/logothp_576cab0fedfee.jpg" height="100" style="border-radius: 15%; margin-top:10px;"
></v-img></v-col>
      <v-col>  <v-card-text>
      <p class="text-h5 " >
       THAI POST
      </p>
      <p class="text-h6">
        14 Items
      </p>
    </v-card-text></v-col>
    </v-row>
    </v-card>
  </v-col>
  </v-row>
</v-card>
</v-col>
      <v-col cols="6">
        <v-card class="card" style="padding:10px">
  <p class="text-h4" style="color:#303030 !important">
        Market share
        </p>
        <chart :data='points2'></chart>
        </v-card>
      </v-col>
    </v-row>
</v-card>
 </v-container >
</template>
<script>

</script>
<script>
import Highcharts from 'highcharts'
import axios from 'axios'
import Chart from '~/components/PieChart'
export default {
  components: {
    chart: Chart
  },
  data: () => ({
        input: {
            year_id: 4,
            company_id: 0,
        },
        points2: [
        {
          name: 'test1',
          y: 20.0
        },
        {
          name: 'test2',
          y: 40.0
        },
        {
          name: 'test3',
          y: 40.0
        },
        {
          name: 'test4',
          y: 40.0
        }
      ],
        years: [
        {
            id: 1,
            name: 2019,
          },
          {
            id: 2,
            name: 2020,
          },
          {
            id: 3,
            name: 2021,
          },
          {
            id: 4,
            name: 2022,
          }
        ],
         company: [
           {
            id: 0,
            name: 'Please select',
          },{
            id: 1,
            name: 'SCG',
          },
          {
            id: 2,
            name: 'THP',
          },
          {
            id: 3,
            name: 'FLASH',
          }
          ,
          {
            id: 4,
            name: 'DHL',
           }
        ]
    }),
  mounted () {
    this.displayHighCharts()
  },
  methods: {
    displayHighCharts () {
      Highcharts.chart('container', {
        chart: {
          type: 'column'
        },
        title: {
          text: null
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
            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}Items</b> of total<br/>'
        },
        series: [
          {
            name: 'Browsers',
            colorByPoint: true,
            data: [
              {
                name: 'ม.ก',
                y: 200.74,
                drilldown: 'ม.ก'
              },
              {
                name: 'ก.พ',
                y: 10.57,
                drilldown: 'ก.พ'
              },
              {
                name: 'มี.ค',
                y: 7.23,
                drilldown: 'มี.ค'
              },
              {
                name: 'ม.ย',
                y: 5.58,
                drilldown: 'ม.ย'
              },
              {
                name: 'พ.ค',
                y: 5.58,
                drilldown: 'พ.ค'
              },
              {
                name: 'มิ.ย',
                y: 4.02,
                drilldown: 'มิ.ย'
              },
              {
                name: 'ก.ค',
                y: 1.92,
                drilldown: 'ก.ค'
              },
              {
                name: 'ส.ค',
                y: 7.62,
                drilldown: 'ส.ค'
              },
              {
                name: 'ก.ย',
                y: 7.62,
                drilldown: 'ก.ย'
              },
              {
                name: 'ต.ค',
                y: 7.62,
                drilldown: 'ต.ค'
              },
              {
                name: 'พ.ย',
                y: 7.62,
                drilldown: 'พ.ย'
              },
              {
                name: 'ธ.ค',
                y: 7.62,
                drilldown: 'ธ.ค'
              }
            ]
          }
        ]
      })
    }
  }
}
</script>
<style >
body {
  background-color: #ffffff;
  color: rgb(0, 0, 0) !important;
}
.mx-auto {
  border-radius: 30px;
}
.year{
  color: rgb(0, 0, 0) !important;
}
.v-select__selection,
.v-select__selection--comma,
.v-select.v-text-field input {
  color: rgb(0, 0, 0) !important;
}
.text-h4,
.text-h5
 {
 color: rgb(0, 0, 0) ;
 font-family: "Times New Roman", Times, serif !important;
}
</style>
<style scoped>
.red {
  background-color: red;
  margin-bottom: 5px;
}
.green {
  background-color: green;
  margin-bottom: 5px;
}
.blue {
  background-color: lightblue;
  margin-bottom: 5px;
}
.short {
  height: 50px;
}
.tall {
  height: 100px;
}
.middle {
  height: 75px;
}
.card {
  height: 100%;
}
.full-height{
 border-radius:15px;
}
.h5{
  font-size: 1.5rem !important;
  font-weight: 400;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
  font-family: "Roboto", sans-serif !important;
  color: #ffffff !important;
}
.h4{
  font-size: 2.125rem !important;
  font-weight: 400;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
  font-family: "Roboto", sans-serif !important;
  color: #ffffff !important;
}
.col-2 {
  flex: 0 0 8.3333333333%;
  max-width: 10%;
  margin-left: 90%;
}
</style>
