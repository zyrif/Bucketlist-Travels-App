<template>
  <v-img v-bind="options" @click="logoClickHandler" />
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
        "class": this.logotype === "hero" ? "mx-auto my-5" : "mx-8 my-auto",
        "max-width": this.logotype === "hero" ? "23vw" : "10vw",
        "min-width": this.logotype === "hero" ? "180px" : "140px",
        "min-height": this.logotype === "hero" ? "64px" : "48px",
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