<template>
  <v-app>
    <v-app-bar
      app
      elevation="0"
    >
      <h1 v-if="showLogo">BucketList Logo</h1>
      <v-spacer></v-spacer>
      <v-btn
        v-if="showLogin"
        outlined
        rounded
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

export default {
  name: 'App',

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
