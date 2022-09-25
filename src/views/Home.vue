<template>
  <v-container fill-height>
    <v-row align="center" justify="center" style="transform: translateY(-5vw)">
      <v-col cols="8">
        <site-logo v-if="logoVisible" logotype="hero" />
        <search @results-visible="toggleLogoHandler" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SiteLogo from '../components/SiteLogo.vue'
import Search from '@/components/HomeSearch.vue'
export default {
  components: { SiteLogo, Search },

  data: () => ({
    logoVisible: true
  }),

  methods: {
    toggleLogoHandler: function (value) {
      this.logoVisible = !value
    }
  }

}
</script>

<style>
</style>
