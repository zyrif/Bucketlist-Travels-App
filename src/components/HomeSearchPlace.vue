<template>
  <v-virtual-scroll max-height="600" itemHeight="220" :items="places">
    <template #default="{ item }">
      <place-item :place="item" narrow></place-item>
    </template>
  </v-virtual-scroll>
</template>

<script>
import { mapActions } from 'vuex'
import PlaceItem from '@/components/DashboardPlaceItem.vue'
export default {
  components: {
    PlaceItem
  },

  data: () => ({
    //
  }),

  computed: {
    places: function () {
      return this.$store.state.place.results.map((item, index) => ({
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

  methods: {
    addToBucketListHandler: function (place) {
      this.handleBucketlistLink({ action: "add", id: place.id })
    },

    removeFromBucketListHandler: function (place) {
      this.handleBucketlistLink({ action: "remove", id: place.id })
    },

    ...mapActions('place', ['fetchPlaces', 'handleBucketlistLink'])
  }
}</script>

<style>
</style>
