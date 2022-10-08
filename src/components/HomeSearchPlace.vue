<template>
  <v-virtual-scroll max-height="600" itemHeight="220" :items="places">
    <template #default="{ item }">
      <place-item :place="item" narrow @add-visited="addToBucketListHandler"
        @remove-visited="removeFromBucketListHandler"></place-item>
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
      this
        .handleBucketlistLink({ action: "add", id: place.id })
        .catch((error) => {
          this.openMessageDialog({ title: "Error!", body: error })
        })
    },

    removeFromBucketListHandler: function (place) {
      this
        .handleBucketlistLink({ action: "remove", id: place.id })
        .catch((error) => {
          this.openMessageDialog({ title: "Error!", body: error })
        })
    },

    ...mapActions("place", ["fetchPlaces", "handleBucketlistLink"]),
    ...mapActions("globalStates", ["openMessageDialog"])
  }
}</script>

<style>
</style>
