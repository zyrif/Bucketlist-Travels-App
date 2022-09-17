<template>
  <div style="display:contents">
    <v-text-field ref="searchInput" v-model="searchTerm" filled rounded background-color="white" color="green"
      placeholder="Search a place you wanna go..." :class="searchInputClasses">
      <template #prepend-inner>
        <v-icon dense left>
          fas fa-search
        </v-icon>
      </template>

      <template #append>
        <v-btn v-if="!showClearBtn" dark rounded color="#3e7758" elevation="0" style="top: -7px; left: 14px"
          @click="searchBtnHandler">
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
import Place from '@/components/HomeSearchPlace.vue'
import SearchMixin from '@/mixins/search'
export default {
  components: { Place },

  mixins: [SearchMixin],

  computed: {
    searchInputClasses: function () {
      return this.showResults ? 'mt-16' : ''
    }
  },

  methods: {
    searchBtnHandler: function () {
      if (this.searchTerm) {
        this.searchPlaces({ searchTerm: this.searchTerm })
          .then(() => {
            this.prevSearch = this.searchTerm
          })
          .catch((error) => console.debug(error))
      }
    },

    clearBtnHandler: function () {
      this.searchTerm = ''
      this.$store.commit("place/setData")
    },
  }
}
</script>

<style>
</style>
