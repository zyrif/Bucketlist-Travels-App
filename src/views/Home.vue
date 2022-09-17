<template>
  <v-container fill-height>
    <v-row align="center" justify="center" style="transform: translateY(-5vw)">
      <v-col cols="8">
        <site-logo v-if="!resultsVisible" logotype="hero" />
        <search />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SiteLogo from '../components/SiteLogo.vue'
import Search from '@/components/HomeSearch.vue'
export default {
  components: { SiteLogo, Search },

  computed: {
    resultsVisible: function () {
      return this.$store.state.count > 0
    }
  },
}
</script>

<style>
</style>
