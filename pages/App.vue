<template>
  <div id='app'>
    <chart :data='points2'></chart>
  </div>
</template>

<script>
import Chart from '~/components/PieChart'

export default {
  name: 'app',
  components: {
    chart: Chart
  },
  data () {
    return {
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
        }
      ]
    }
  },
  beforeDestroy () {
  },
  mounted () {}
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #195897;
  margin: 0 auto;
  margin-top: 60px;
  width: 70%;
} */
</style>
