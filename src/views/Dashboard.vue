<template>
  <v-container fluid>
    <v-row align="start">
      <cover />
    </v-row>
    <v-row align="start">
      <v-col cols="2">
        <profile />
        <navbar v-model="navActiveItem" />
      </v-col>
      <v-col cols="10">
        <div v-if="navActiveItem === 0" style="display:contents">
          <place-search />
          <place />
        </div>
        <div v-if="navActiveItem === 1" style="display:contents">
          <place my-list />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Cover from '../components/DashboardCover.vue'
import Navbar from '../components/DashboardNavbar.vue'
import Profile from '../components/DashboardProfile.vue'
import PlaceSearch from '../components/DashboardPlaceSearch.vue'
import Place from '../components/DashboardPlace.vue'
export default {
  components: { Cover, Profile, Navbar, PlaceSearch, Place },
  data: () => ({
    navActiveItem: 0,
  }),
}
</script>

<style>
</style>