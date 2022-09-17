import { mapActions } from 'vuex'
export default {
  data: () => ({
    searchTerm: '',
    prevSearch: '',
  }),

  computed: {
    showClearBtn: function() {
      return this.searchTerm && this.searchTerm === this.prevSearch
    },

    showResults: function() {
      return this.searchTerm && this.$store.state.place.count > 0
    }
  },

  methods: {
    searchBtnHandler: function() {
      this.searchPlaces({ searchTerm: this.searchTerm })
        .then(() => {
          this.prevSearch = this.searchTerm
        })
        .catch((error) => console.debug(error))
    },

    clearBtnHandler: function() {
      this.searchTerm = ''
      this.searchBtnHandler()
    },

    ...mapActions('place', ['searchPlaces'])
  }
}
