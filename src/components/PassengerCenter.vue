<template>
    <section>
        <button class="add-passenger">Add a Passenger!</button>
        <table>
            <tbody>
                <tr>
                    <td class="table-header">Passenger ID:</td>
                    <td class="table-header">Passenger Name:</td>
                    <td class="table-header">Edit:</td>
                    <td class="table-header">Delete:</td>
                </tr>
                <tr v-for="passenger in passengers">
                    <td>{{passenger.id}}</td>
                    <td>{{passenger.name}}</td>
                    <td><button>edit</button></td>
                    <td><button @click="deletePassenger(passenger.id)">delete</button></td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
export default {
  data () {
    return {
      passengers: []
    }
  },
  methods: {
    loadPassengers() {
      this.$http.get('passengerAPI.php')
        .then(res => res.json())
        .then(passengers => this.passengers = passengers);
    },
    deletePassenger(idToDelete) {
        this.$http.delete(`passengerAPI.php?id=${idToDelete}`);
        this.passengers = this.passengers.filter(passenger => passenger.id !== idToDelete);
    }
  },
    created () {
      this.loadPassengers();
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
    .add-passenger {
        margin: 5px;
    }
</style>