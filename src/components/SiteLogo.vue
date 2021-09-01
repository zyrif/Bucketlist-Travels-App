<template>
  <v-img v-bind="options" class="mx-auto my-8" @click="logoClickHandler" />
</template>

<script>
export default {
  props: {
    logotype: {
      type: String,
      default: "brand",
      validator: function (value) {
        return ["brand", "hero"].indexOf(value) !== -1;
      },
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    options: function () {
      return {
        "max-width": this.logotype === "hero" ? "23vw" : "12vw",
        src: this.dark
          ? require("../assets/logo_dark.svg")
          : require("../assets/logo_bright.svg"),
        style:
          this.$route.name !== "Home" ? "cursor: pointer" : "cursor: default",
      };
    },
  },
  methods: {
    logoClickHandler: function () {
      if (this.$route.name !== "Home") {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
</style>