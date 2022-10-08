<template>
  <div style="display:contents">
    <place-item v-for="place in places" v-bind:key="place.sortOrder" :ref="`place-item-${place.id}`" :place="place"
      :my-list="myList" @add-visited="addToBucketListHandler" @remove-visited="removeFromBucketListHandler" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import PlaceItem from '@/components/DashboardPlaceItem.vue'
export default {
  components: {
    PlaceItem
  },

  props: {
    myList: Boolean,
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

  watch: {
    myList: function () {
      this.fetchPlaces({ next: false, myList: this.myList }).catch((error) => console.debug(error))
    }
  },

  beforeMount: function () {
    this.fetchPlaces({ next: false, myList: this.myList }).catch((error) => console.debug(error))
  },

  methods: {
    addToBucketListHandler: function (place) {
      this.$refs[`place-item-${place.id}`][0].toggleAddVisitedBtnLoading()
      this
        .handleBucketlistLink({ action: "add", id: place.id })
        .catch((error) => {
          this.openMessageDialog({ title: "Error!", body: error })
        })
        .finally(() => {
          this.$refs[`place-item-${place.id}`][0].toggleAddVisitedBtnLoading()
        })
    },

    removeFromBucketListHandler: function (place) {
      this.$refs[`place-item-${place.id}`][0].toggleRemoveVisitedBtnLoading()
      this
        .handleBucketlistLink({ action: "remove", id: place.id })
        .catch((error) => {
          this.openMessageDialog({ title: "Error!", body: error })
        })
        .finally(() => {
          this.$refs[`place-item-${place.id}`][0].toggleRemoveVisitedBtnLoading()
        })
    },

    ...mapActions('place', ['fetchPlaces', 'handleBucketlistLink']),
    ...mapActions("globalStates", ["openMessageDialog"])
  }
}
</script>

<style>
</style>
