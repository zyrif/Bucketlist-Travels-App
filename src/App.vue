<template>
  <v-app v-bind="getVAppStyles">
    <v-app-bar v-if="showAppBar" app prominent :color="getVAppBarColor" elevation="0">
      <site-logo v-if="showLogo" dark />
      <v-spacer></v-spacer>
      <v-btn
        v-if="!isLoggedIn"
        dark
        outlined
        rounded
        class="my-auto"
        @click="loginHandler"
      >
        Sign in
      </v-btn>
      <v-avatar v-if="showAvatar" color="#264F49" class="my-auto">
        <span class="white--text text-h6 font-weight-light">MR</span>
      </v-avatar>
    </v-app-bar>

    <v-main v-bind="getVMainStyles">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
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
    showAppBar: function () {
      return this.$route.name === "Login" ? false : true;
    },
    showAvatar: function () {
      if (this.$route.name === "Dashboard" && this.isLoggedIn) {
        return true;
      }
      return false;
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
    getVAppBarColor: function () {
      return this.$route.name === "Home" || this.$route.name === "Login"
        ? "rgba(0, 0, 0, 0)"
        : "rgba(255, 255, 255, 255)"
    },
    ...mapGetters("auth", ["isLoggedIn"])
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
