<template>
  <div style="display:contents">
    <v-card v-for="place in places" v-bind:key="place.sortOrder" rounded="lg" color="grey lighten-4" elevation="0"
      class="ma-4 pa-2">
      <div class="d-flex">
        <div>
          <v-avatar tile color="grey" size="140" class="ma-4">
          </v-avatar>
        </div>
        <div>
          <v-card-title class="text-h5">
            {{ place.name }}
          </v-card-title>
          <v-card-text class="black--text">
            {{ place.description }}
          </v-card-text>
          <v-card-text>
            <v-btn icon class="mx-2">
              <v-icon dense color="black"> fas fa-map-marker-alt </v-icon>
            </v-btn>
            <v-btn icon class="mx-2">
              <v-icon dense color="black"> fas fa-location-arrow </v-icon>
            </v-btn>
            <v-btn v-if="!myList && !place.visited" icon class="mx-2">
              <v-icon dense color="black"> fas fa-plus-circle </v-icon>
            </v-btn>
            <v-btn v-if="!myList && place.visited" icon class="mx-2">
              <v-icon dense color="black"> fas fa-check-circle </v-icon>
            </v-btn>
          </v-card-text>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    myList: Boolean,
  },

  data: () => ({
    //
  }),

  computed: {
    places: function() {
      return this.$store.state.places.results.map((item, index) => ({
        id: item.id,
        sortOrder: index,
        name: item.name,
        description: item.description,
        visited: item.visited,
        coOrdinates: {
          lat: item.coordinate.lat,
          lon: item.coordinate.lon,
        }
      }))
    }
  },

  beforeMount: function () {
    this.fetchPlaces({ next: false }).catch((error) => console.debug(error))
  },

  methods: {
    ...mapActions('places', ['fetchPlaces'])
  }
}
</script>

<style>
</style>
