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
  },
  methods: {
      changeSection(section) {
          this.section = section;
          console.log(this.section)
          this.$emit('changeSection', section)
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
    }
</style>