<template>
  <section>
    <p>Choose origin: <input v-model="flightSearch.src">
    Choose destination: <input v-model="flightSearch.dest">
    <button @click="reloadFlights">Flights</button></p>
    {{flightSearch}}
  </section>
</template>

<script>
export default {
  data () {
    return {
      flightSearch: {src: '', dest: ''},
      flights: []
    }
  },
  methods: {
    reloadFlights() {
      this.$http.get('flightAPI.php')
        .then(res => res.json())
        .then(flights => this.flights = flights);
    }
  }
}
</script>

<style scoped>

</style>
