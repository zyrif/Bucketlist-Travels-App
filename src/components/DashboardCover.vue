<template>
  <v-col style="padding: 0px">
    <v-img v-bind="options"></v-img>
  </v-col>
</template>

<script>
export default {
  name: "DashboardCover",
  computed: {
    options: function () {
      return {
        "aspect-ratio": 6.75/1,
        src: require("../assets/Dashboard-BG.jpg")
      }
    }
  }
}
</script>

<style>

</style>