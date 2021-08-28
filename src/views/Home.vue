<template>
  <v-container fill-height>
    <v-row align="center" justify="center" style="transform: translateY(-5vw)">
      <v-col cols="8">
        <site-logo logotype="hero"/>
        <v-text-field
          filled
          rounded
          background-color="grey lighten-2"
          color="green"
          placeholder="Search a place you wanna go..."
        >
          <template #prepend-inner>
            <v-icon dense left>
              fas fa-search
            </v-icon>
          </template> 

          <template #append>
            <v-btn
              rounded
              elevation="0"
              style="top: -7px; left: 14px"
            >
              GO!
            </v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SiteLogo from '../components/SiteLogo.vue'
export default {
  components: { SiteLogo }
}
</script>

<style>

</style>