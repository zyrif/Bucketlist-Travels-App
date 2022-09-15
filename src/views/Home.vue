<template>
  <v-container fill-height>
    <v-row align="center" justify="center" style="transform: translateY(-5vw)">
      <v-col cols="8">
        <site-logo v-if="!resultsVisible" logotype="hero"/>
        <v-text-field
          ref="searchInput"
          v-model="searchText"
          filled
          rounded
          background-color="white"
          color="green"
          placeholder="Search a place you wanna go..."
          :class="searchInputClasses"
        >
          <template #prepend-inner>
            <v-icon dense left>
              fas fa-search
            </v-icon>
          </template> 

          <template #append>
            <v-btn
              dark
              rounded
              color="#3e7758"
              elevation="0"
              style="top: -7px; left: 14px"
            >
              GO!
            </v-btn>
          </template>
        </v-text-field>
        <place v-if="resultsVisible" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue'
import SiteLogo from '../components/SiteLogo.vue'
import Place from '../components/DashboardPlace.vue'
export default {
  components: { SiteLogo, Place },
  data: () => ({
    searchText: '',
    resultsVisible: false,
  }),
  computed: {
    searchInputClasses: function () {
      return this.resultsVisible ? 'mt-16' : ''
    }
  },
  watch: {
    searchText: function (value) {
      if (value.length > 0) {
        this.resultsVisible = true
        Vue.nextTick(() => {
          this.$refs.searchInput.focus()
        })
      } else {
        this.resultsVisible = false
        Vue.nextTick(() => {
          this.$refs.searchInput.focus()
        })
      }
    }
  }
}
</script>

<style>

</style>