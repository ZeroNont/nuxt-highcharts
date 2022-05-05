<script src="https://unpkg.com/vue@2.2.6/dist/vue.js"></script>
<template>
<v-container class="grey lighten-5">
   <v-card class="card" style="padding:10px ">
    <v-col cols="2" align="end" light>
         <v-select light id="year_input" v-model="year_input" :items="years" item-value="create_year"  item-text="create_year"/>
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
        {{shipping}} Items
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
         {{receive}} Items
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
         {{create}} Items
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
         {{cancel}} Items
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
   <v-col cols="2" class="d-flex justify-end" light>
         <v-select light v-model="company_model" :items="company" item-value="id" item-text="name" return-object v-on:change="company_detail" />
    </v-col>
  <div v-if="market_share">
 <v-row>
      <v-col cols="6">
        <v-card class="card" style="padding:20px">
  <p class="text-h4" style="color:#303030 !important">
        Payment
        </p>
        <v-row>
<v-col cols="6"  v-for='points2 in points2'
    :key='points2.item' >
     <v-card class="full-height"
    max-width="344"
    style="background: #FFFFFF; padding:10px">
    <v-row>
      <v-col cols="5">
        <v-img :src="require('../assets/image/'+points2.name+'.jpg')" height="100" style="border-radius: 15%; margin-top:10px;"></v-img></v-col>
      <v-col>  <v-card-text>
      <p class="text-h5 " >
       {{points2.name}}
      </p>
      <p class="text-h6">
        {{points2.y}} Items
      </p>
    </v-card-text>
    </v-col>
    </v-row>
    </v-card>
  </v-col>
  </v-row>
</v-card>
</v-col>
      <v-col cols="6">
        <v-card class="card" style="padding:20px">
  <p class="text-h4" style="color:#303030 !important">
        Market share
        </p>
        <figure class="highcharts-figure">
        <div id="container-pie"></div>
        </figure>
        </v-card>
      </v-col>
    </v-row>
    </div>
    <div v-if="com_detail">
 <v-row>
      <v-col cols="6">
        <v-card class="card" style="padding:20px">
  <p class="text-h4" style="color:#303030 !important">
        Payment
        </p>
        <v-row>
    <v-col cols="12" >
     <v-card class="full-height"
    style="background: #FFFFFF; padding:10px">
    <v-row>
      <v-col cols="3">
        <v-img :src="require('../assets/image/'+this.company_model.name+'.jpg')" height="150" style="border-radius: 15%; margin-top:10px;"></v-img>
        </v-col>
      <v-col cols="6">
      <v-card-text>
      <v-col> <p class="text-h5 " >
       {{this.com_margin.name}}
      </p></v-col>
       <v-col> <p class="text-h5 " >
        {{this.com_margin.amount}} Items
      </p></v-col>
    </v-card-text>
    </v-col>
    </v-row>
    </v-card>
  </v-col>
  <v-row>
      <v-col cols="6" >
     <v-card class="full-height"
    style="background: #FFFFFF; padding:10px">
    <v-row>
      <v-col cols="12">
      <v-card-text>
      <v-col > <p class="text-h5 " >
       Total freight fee
      </p></v-col>
       <v-col> <p class="text-h5 " >
        {{this.com_margin.sum}} ฿
      </p></v-col>
    </v-card-text>
    </v-col>
    </v-row>
    </v-card>
  </v-col>  <v-col cols="6" v-show="com_detail_margin" >
     <v-card class="full-height"
    style="background: #FFFFFF; padding:10px" >
    <v-row>
      <v-col cols="12" >
      <v-card-text>
      <v-col> <p class="text-h5 " >
       Total profit margin
      </p></v-col>
       <v-col> <p class="text-h5 " >
        {{this.com_margin.margin}} ฿
      </p></v-col>
    </v-card-text>
    </v-col>
    </v-row>
    </v-card>
  </v-col>
  </v-row>
  </v-row>
</v-card>
</v-col>
      <v-col cols="6" v-show="com_detail_margin">
        <v-card class="card" style="padding:20px">
  <p class="text-h4" style="color:#303030 !important">
        Total profit margin
        </p>
        <figure class="highcharts-figure">
        <div id="container-detail"></div>
        </figure>
        </v-card>
      </v-col>
    </v-row>
    </div>
</v-card>
</v-container>
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
      title: 'Store Layout',
      year_input :new Date().getFullYear(),
        company_model:{
            name: 'Please select'
          },
        create:'',
        receive:'',
        cancel:'',
        shipping:'',
        points: [],
        courier: [],
        points2: [],
        years: [],
        status:[],
         company: [
           {
            name: 'Please select',
            item: null,
            y: null
          }
        ],
         bar: [],
         market_share:true,
         com_detail:false,
         com_detail_margin:false,
         com_margin:[]
    }),
  async mounted () {
    let response
        this.years = await axios.get('http://localhost:3001/show_data_year',{}).then(function (res) {
            response = res.data
            console.warn('response success')
        }).catch(function (error) {
            if (error.response) {
                response = error.response
                console.log('response error')
            }
        })
       this.years = response.data
       this.years = this.years['parcels']
       console.log(this.years)
       await this.getYear()
       await this.getcourier()
       await this.getstatus()
       await this.getbar()
       await this.getDataCourier()
       this.displayHighCharts()
       this.displayPieCharts()
  },
methods: {
    async company_detail () {
      if((this.company_model.name!='Please select')) {
        console.log(this.company_model.name)
        this.market_share=false
        this.com_detail=true
       await this.getDataCourier()
       await this.getComDetail()
       if(this.company_model.name=='SCG'||this.company_model.name=='DHL'){
          this.com_detail_margin=false
       }else{
          this.com_detail_margin=true
          this.displayMarginChart()
       }
      }else{
        this.market_share=true
        this.com_detail=false
       await this.getcourier()
       await this.getstatus()
       await this.getbar()
       await this.getDataCourier()
       await this.displayPieCharts()
      }
    },
    async getYear (){
    console.log(this.year_input)
    },
    async getcourier(){
    let response
    this.courier = await axios.get('http://localhost:3001/get_data_all_courier/'+this.year_input,{}).then(function (res) {
            response = res.data
            console.warn('response success')
        }).catch(function (error) {
            if (error.response) {
                response = error.response
                console.log('response error')
            }
        })
        this.courier = response.data
        this.company=[...this.company,...this.courier['courier']]
        console.log(this.company)
    },
    async getComDetail(){
      let response
      let com=this.company_model.name
      console.log("com:",com)
      this.com_margin = await axios.get('http://localhost:3001/showDataByCourire/'+this.year_input,{
      params: {"courier_code": com}}
      ).then(function (res) {
            response = res.data
            console.warn('response success')
        }).catch(function (error) {
            if (error.response) {
                response = error.response
                console.log('response error')
            }
        })
        this.com_margin = response.data
        console.log(response)
        console.log(this.com_margin['courier'])
        this.com_margin = this.com_margin['courier'][0]
        console.log(this.com_margin.name)
    },
    async getDataCourier(){
    let response
    this.points2 = await axios.get('http://localhost:3001/showCourier/'+this.year_input,{}).then(function (res) {
            response = res.data
            console.warn('response success')
        }).catch(function (error) {
            if (error.response) {
                response = error.response
                console.log('response error')
            }
        })
        this.points2 = response.data
        console.log(response)
        console.log(this.points2['courier'])
        this.points2 = this.points2['courier']
        console.log(this.points2)
    },
    async getstatus(){
      let response
        this.status = await axios.get('http://localhost:3001/get_data_by_status/'+this.year_input,{}).then(function (res) {
            response = res.data
            console.warn('response success')
        }).catch(function (error) {
            if (error.response) {
                response = error.response
                console.log('response error')
            }
        })
       this.status = response.data
       this.status = this.status['return']
       console.log(this.status)
       console.log(this.status[0].num)
       this.create=this.status[2].num
      this.cancel=this.status[1].num
       this.receive=this.status[3].num
       this.shipping=this.status[5].num+this.status[0].num
    },
    async getbar(){
       let response
    this.bar = await axios.get('http://localhost:3001/show_data_by_month/'+this.year_input,{}).then(function (res) {
            response = res.data
            console.warn('response success')
        }).catch(function (error) {
            if (error.response) {
                response = error.response
                console.log('response error')
            }
        })
        console.log(this.bar)
      this.bar = response.data
      this.bar = this.bar['parcels']
      const refArray = [ 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March'];
      this.bar.sort((a,b) => { return refArray.indexOf(a.name) - refArray.indexOf(b.name)});
      console.log(this.bar[0].name)
    },
  displayPieCharts () {
    Highcharts.chart('container-pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: null
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'market share',
        colorByPoint: true,
        data: this.points2
    }]
});
  },
    displayMarginChart(){
   Highcharts.chart('container-detail', {
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
            text: 'Total profit margin'
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
              format: '{point.y:.0f} ฿'
            }
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat:
            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}฿</b><br/>'
        },
        series: [
          {
            name: 'Item',
            colorByPoint: true,
            data: [
              {
                name: 'Total freight fee',
                y: this.com_margin.sum,
                drilldown: 'Total freight fee'
              },
              {
                name: 'Total profit',
                y: this.com_margin.margin,
                drilldown: 'Total profit'
              }
            ]
          }
        ]
      })
    },
    displayHighCharts () {
      console.log(this.bar[0]['total'])
      var test =[];
      this.test== this.bar.map(a => a.total);
      console.log(this.bar.map(a => a.total))
     Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: null
    },
    xAxis: {
        categories: this.bar.map(a => a.name),
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'amount of items'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} Items</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'DHL',
        data: this.bar.map(a => a.DHL)

    }, {
        name: 'SCG',
        data: this.bar.map(a => a.SCG)

    }, {
        name: 'THP',
        data: this.bar.map(a => a.THP)

    }, {
        name: 'FLASH',
        data: this.bar.map(a => a.FLASH)
    }
    , {
        name: 'Total',
        data: this.bar.map(a => a.total)
    }]
});
    }
  }
}
</script>
<style scoped>
.highcharts-figure,
.highcharts-data-table table {
  min-width: 310px;
  max-width: 100%;
  margin: 1em auto;
}

#container {
  height: 90%;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 100%;
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
