<template>
  <v-text-field v-model="searchTerm" filled outlined rounded background-color="white" color="grey"
    placeholder="Search a place you wanna go..." class="ma-4">
    <template #append>
      <v-btn v-if="!showClearBtn" dark rounded color="white" elevation="0" style="top: -7px; left: 14px"
        @click="searchBtnHandler">
        <v-icon dense color="grey">
          fas fa-search
        </v-icon>
      </v-btn>
      <v-btn v-else dark rounded color="white" elevation="0" style="top: -7px; left: 14px" @click="clearBtnHandler">
        <v-icon dense color="grey">
          fas fa-times-circle
        </v-icon>
      </v-btn>
    </template>
  </v-text-field>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    searchTerm: '',
    prevSearch: '',
  }),

  computed: {
    showClearBtn: function () {
      return this.searchTerm && this.searchTerm === this.prevSearch
    },
  },

  methods: {
    searchBtnHandler: function () {
      this.searchPlaces({ searchTerm: this.searchTerm })
        .then(() => {
          this.prevSearch = this.searchTerm
        })
        .catch((error) => console.debug(error))
    },

    clearBtnHandler: function () {
      this.searchTerm = ''
      this.searchBtnHandler()
    },

    ...mapActions('places', ['searchPlaces'])
  }

}
</script>

<style>
</style>
