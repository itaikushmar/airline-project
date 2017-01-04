<template>
    <section>
        <button class="add-flight">Add a Flight!</button>
        <table>
            <tbody>
                <tr>
                    <td class="table-header">Flight ID:</td>
                    <td class="table-header">Flight Origin:</td>
                    <td class="table-header">Flight destination:</td>
                    <td class="table-header">Departure Time:</td>
                    <td class="table-header">Plane:</td>
                    <td class="table-header">Edit:</td>
                    <td class="table-header">Delete:</td>
                </tr>
                <tr v-for="flight in flights">
                    <td>{{flight.id}}</td>
                    <td>{{flight.origin}}</td>
                    <td>{{flight.dest}}</td>
                    <td>{{flight.departure_at}}</td>
                    <td>{{flight.plane_id}}</td>
                    <td><button>edit</button></td>
                    <td><button @click="deleteFlight(flight.id)">delete</button></td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
export default {
  data () {
    return {
      flights: []
    }
  },
  methods: {
    loadFlights() {
      this.$http.get('flightAPI.php')
        .then(res => res.json())
        .then(flights => this.flights = flights);
    },
    deleteFlight(idToDelete) {
        this.$http.delete(`flightAPI.php?id=${idToDelete}`);
        this.flights = this.flights.filter(flight => flight.id !== idToDelete);
    }
  },
  created () {
      this.loadFlights();
  }
}
</script>

<style scoped>
    table {
        width: 100%
    }
    td {
        border: 1px solid black;
    }
    .table-header {
        text-decoration: underline;
    }
    button {
        cursor: pointer;
    }
    .add-flight {
        margin: 5px;
    }
</style>