<template>
    <section>
        <button class="add-plane" @click="toggleAddButton">{{displayAddButton}}</button>
        <table>
            <tbody>
                <tr>
                    <td class="table-header">Plane ID:</td>
                    <td class="table-header">Plane Model:</td>
                    <td class="table-header">Plane Seat Count:</td>
                    <td class="table-header">Edit:</td>
                    <td class="table-header">Delete:</td>
                </tr>
                <tr v-if="showRow">
                    <td>New Plane:</td>
                    <td>
                        <input v-model="newPlane.model">
                    </td>
                    <td>
                        <input v-model="newPlane.seat_count">
                    </td>
                    <td>
                        <button @click="addPlane">Save</button>
                    </td>
                    <td></td>
                <tr v-for="plane in planes">
                    <td>{{plane.id}}</td>
                    <td>{{plane.model}}</td>
                    <td>{{plane.seat_count}}</td>
                    <td><button>edit</button></td>
                    <td><button @click="deletePlane(plane.id)">delete</button></td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
export default {
  data () {
    return {
      planes: [],
      newPlane: {model: '', seat_count: ''},
      showRow: false,
      displayAddButton: 'Add a Plane'
    }
  },
  methods: {
    loadPlanes() {
      this.$http.get('planeAPI.php')
        .then(res => res.json())
        .then(planes => this.planes = planes);
    },
    deletePlane(idToDelete) {
        this.$http.delete(`planeAPI.php?id=${idToDelete}`);
        this.planes = this.planes.filter(plane => plane.id !== idToDelete);
    },
    toggleAddButton() {
        this.showRow = !this.showRow;
        if (!this.showRow) this.displayAddButton = 'Add a Plane';
        else this.displayAddButton = 'Hide Adding Plane';
    },
    addPlane() {
        this.$http.post('planeAPI.php', this.newPlane)
            .then(() => {
                this.loadPlanes()
                this.newPlane = {model: '', seat_count: ''}
            })
    }
},
  created () {
      this.loadPlanes();
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
    .add-plane {
        margin: 5px;
    }
</style>