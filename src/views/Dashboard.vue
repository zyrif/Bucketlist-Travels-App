<template>
  <v-container fluid>
    <v-row align="start">
      <cover />
    </v-row>
    <v-row align="start">
      <v-col cols="2">
        <profile />
        <navbar />
      </v-col>
      <v-col cols="10">
        <place-search />
        <places />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Cover from '../components/DashboardCover.vue'
import Navbar from '../components/DashboardNavbar.vue'
import Profile from '../components/DashboardProfile.vue'
import PlaceSearch from '../components/DashboardPlaceSearch.vue'
import Places from '../components/DashboardPlaces.vue'
export default {
  components: { Cover, Profile, Navbar, PlaceSearch, Places }
}
</script>

<style>
</style>