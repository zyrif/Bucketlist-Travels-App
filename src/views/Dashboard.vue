<template>
  <v-container fluid>
    <v-row align="start">
      <cover />
    </v-row>
    <v-row align="center">
      <v-col cols="2">
        <profile />
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="2">
        <navbar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Navbar from '../components/DashboardNavbar.vue'
import Profile from '../components/DashboardProfile.vue'
export default {
  components: { Cover, Profile, Navbar }
}
</script>

<style>

</style>