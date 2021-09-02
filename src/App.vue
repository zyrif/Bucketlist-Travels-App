<template>
  <v-app v-bind="getVAppStyles">
    <v-app-bar app prominent color="rgba(0, 0, 0, 0)" elevation="0">
      <site-logo v-if="showLogo" dark />
      <v-spacer></v-spacer>
      <v-btn
        v-if="showLogin"
        dark
        outlined
        rounded
        class="my-auto"
        @click="loginHandler"
      >
        Sign in
      </v-btn>
    </v-app-bar>

    <v-main v-bind="getVMainStyles">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SiteLogo from "./components/SiteLogo.vue";

export default {
  name: "App",
  components: { SiteLogo },
  computed: {
    showLogo: function () {
      return this.$route.name === "Home" || this.$route.name === "Login"
        ? false
        : true;
    },
    showLogin: function () {
      return this.$route.name === "Login" ? false : true;
    },
    getVAppStyles: function () {
      return {
        style:
          this.$route.name !== "Dashboard"
            ? `background-image: url("${require("./assets/Main-BG.jpg")}"); background-size: cover`
            : "",
      };
    },
    getVMainStyles: function () {
      return {
        style:
          this.$route.name !== "Dashboard"
            ? "background-color: rgba(0, 0, 0, 0.3)"
            : "",
      };
    },
  },
  methods: {
    loginHandler: function () {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>
