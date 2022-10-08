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
      <v-menu v-if="showAvatar" offset-y open-on-hover>
        <template #activator="{ on }">
          <v-btn depressed fab color="#264F49" class="my-auto" :ripple="false" v-on="on">
            <span class="white--text text-h6 font-weight-light">{{ getUserInitials }}</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-if="this.$route.name === 'Home'" link @click="goToDashboard">
            <v-list-item-title class="px-2">Dashboard</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="logoutHandler">
            <v-list-item-title class="px-2">Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main v-bind="getVMainStyles">
      <router-view />
      <message-dialog />
      <message-snackbar />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SiteLogo from "./components/SiteLogo.vue"
import MessageDialog from "./components/MessageDialog.vue"
import MessageSnackbar from "./components/MessageSnackbar.vue"

export default {
  name: "App",
  components: { SiteLogo, MessageDialog, MessageSnackbar },
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
      if (this.$route.name !== "Login" && this.isLoggedIn) {
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
    ...mapGetters("auth", ["isLoggedIn", "getUserInitials"])
  },
  methods: {
    loginHandler: function () {
      this.$router.push("/login");
    },

    logoutHandler: function () {
      this
        .signOut()
        .catch(() => {
          console.error("Failed to sign out properly")
        })
        .finally(() => {
          this.$router.push("/")
        })
    },

    goToDashboard: function () {
      this.$router.push("/dashboard")
    },

    ...mapActions("auth", ["signOut"])
  },
};
</script>

<style>
</style>
