<template>
  <div style="display:contents">
    <v-text-field ref="searchInput" v-model="searchTerm" filled rounded background-color="white" color="green"
      placeholder="Search a place you wanna go..." :class="searchInputClasses" :readonly="showClearBtn === true">
      <template #prepend-inner>
        <v-icon dense left>
          fas fa-search
        </v-icon>
      </template>

      <template #append>
        <v-btn v-if="!showClearBtn" dark rounded :loading="isSearchBtnLoading" color="#3e7758" elevation="0"
          style="top: -7px; left: 14px" @click="searchBtnHandler">
          GO!
        </v-btn>
        <v-btn v-else dark rounded color="#3e7758" elevation="0" style="top: -7px; left: 14px" @click="clearBtnHandler">
          <v-icon dense color="white">
            fas fa-times-circle
          </v-icon>
        </v-btn>
      </template>
    </v-text-field>
    <place v-if="showResults" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Place from '@/components/HomeSearchPlace.vue'
import SearchMixin from '@/mixins/search'
export default {
  components: { Place },

  mixins: [SearchMixin],

  data: () => ({
    isSearchBtnLoading: false
  }),

  computed: {
    searchInputClasses: function () {
      return this.showResults ? 'mt-16' : ''
    }
  },

  methods: {
    searchBtnHandler: function () {
      if (this.searchTerm) {
        this.isSearchBtnLoading = true
        this.searchPlaces({ searchTerm: this.searchTerm })
          .then((data) => {
            console.log(data)
            if (data.count > 0) {
              this.prevSearch = this.searchTerm
              this.$emit("results-visible", true)
            } else {
              this.openMessageSnackbar({ body: "No result found for this search." })
            }
          })
          .catch((error) => {
            this.openMessageSnackbar({ body: error.message, color: "error" })
          })
          .finally(() => this.isSearchBtnLoading = false)
      }
    },

    clearBtnHandler: function () {
      this.searchTerm = this.prevSearch = ''
      this.$emit("results-visible", false)
      this.$store.commit("place/setData")
    },

    ...mapActions('globalStates', ['openMessageSnackbar'])
  }
}
</script>

<style>
</style>
