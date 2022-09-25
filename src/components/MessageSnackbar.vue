<template>
  <v-snackbar v-model="isSnackbarOpen">
    {{ snackbarText }}
    <template #action="{ attrs }">
      <v-btn :color="snackbarColor" text v-bind="attrs" @click="closeBtnHandler">Dismiss</v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    isSnackbarOpen: {
      get: function () {
        return this.$store.state.globalStates.messageSnackbar.open
      },
      set: function (value) {
        this.$store.commit("globalStates/setMessageSnackbarValues", { open: value })
      },
    },
    snackbarText: function () {
      return this.$store.state.globalStates.messageSnackbar.body
    },
    snackbarColor: function () {
      return this.$store.state.globalStates.messageSnackbar.color
    }
  },

  methods: {
    closeBtnHandler: function () {
      this.$store.dispatch("globalStates/resolveMessageSnackbar")
    }
  }
}
</script>
