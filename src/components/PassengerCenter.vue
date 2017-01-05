<template>
    <section>
        <button class="add-passenger" @click="toggleAddButton">{{displayAddButton}}</button>
        <table>
            <tbody>
                <tr>
                    <td class="table-header">Passenger ID:</td>
                    <td class="table-header">Passenger Name:</td>
                    <td class="table-header">Edit:</td>
                    <td class="table-header">Delete:</td>
                </tr>
                <tr v-if="showRow">
                    <td>New Passenger:</td>
                    <td>
                        <input v-model="newPassenger.name">
                    </td>
                    <td>                        
                        <button @click="addPassenger">Save</button>
                    </td>
                    <td></td>
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
      passengers: [],
      showRow: false,
      displayAddButton: 'Add a Passenger',
      newPassenger: {name: ''}
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
    },
    toggleAddButton() {
        this.showRow = !this.showRow;
        if (!this.showRow) this.displayAddButton = 'Add a Passenger';
        else this.displayAddButton = 'Hide Adding Passenger';
    },
    addPassenger() {
        this.$http.post('passengerAPI.php', this.newPassenger)
            .then(() => {
                this.loadPassengers()
                this.newPassenger = {name: ''}
            })
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