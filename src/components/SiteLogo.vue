<template>
  <v-img
    :max-width="getWidth"
    src="../assets/logo.svg"
    class="mx-auto my-8"
  />
</template>

<script>
export default {
  props: {
    logotype: {
      default: "brand",
      validator: function (value) {
        return ["brand", "hero"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    getWidth: function () {
      return this.logotype === "hero" ? "23vw" : "12vw";
    },
  },
};
</script>

<style>
</style>