<template>
    <section>
        <p>
            <router-link class="section-link" to="/flights">Flights</router-link>
            <router-link class="section-link" to="/planes">Planes</router-link>
            <router-link class="section-link" to="/passengers">Passengers</router-link>
            <router-link class="section-link" to="/">Book!</router-link>
        </p>
    </section>
</template>

<script>
export default {
      name: 'main-nav',
  data () {
    return {
        section: 'book'
    }
    }
}
</script>

<style scoped>
    section {
        text-align: center;
    }
    .section-link {
        margin: 5px;
        color: black;
    }
    .section-link:hover {
        color: blue;
    }
</style>