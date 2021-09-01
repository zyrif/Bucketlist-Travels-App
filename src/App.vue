<template>
  <v-app>
    <v-app-bar
      app
      prominent
      elevation="0"
    >
      <site-logo v-if="showLogo" />
      <v-spacer></v-spacer>
      <v-btn
        v-if="showLogin"
        outlined
        rounded
        class="my-auto"
        @click="loginHandler"
      >
        Sign in
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import SiteLogo from './components/SiteLogo.vue'

export default {
  name: 'App',
  components: { SiteLogo },
  computed: {
    showLogo: function() {
      return this.$route.name === 'Home' || this.$route.name === 'Login' ? false : true;
    },
    showLogin: function() {
      return this.$route.name === 'Login' ? false : true;
    }
  },
  data: () => ({
    //
  }),
  methods: {
    loginHandler: function() {
      this.$router.push('/login');
    }
  }
};
</script>

<style>
.v-application {
  background-image: url("./assets/Main-BG.jpg") !important;
  background-size: cover !important;
}
</style>
