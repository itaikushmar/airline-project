<template>
  <div>
    <img src="./assets/logo.png">
    <router-view></router-view>
    <Navbar></Navbar>
  </div>
</template>

<script>
import FlightSearch from './components/FlightSearch'
import Navbar from './components/Navbar'
import PlaneCenter from './components/PlaneCenter'
import PassengerCenter from './components/PassengerCenter'

export default {
  components: {
    FlightSearch,
    Navbar,
    PlaneCenter,
    PassengerCenter
  },
  mounted () {
    console.log('THIS HAS LOADED HOME')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  img {
    max-width: 750px;
    width: 100%;
    height: auto;
  }
</style>
