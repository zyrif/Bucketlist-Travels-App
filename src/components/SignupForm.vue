<template>
  <v-col cols="4">
    <site-logo logotype="hero" />
    <v-text-field v-model="form.firstName" dark placeholder="First Name">
      <v-icon slot="prepend" class="mr-4">far fa-user</v-icon>
    </v-text-field>
    <v-text-field v-model="form.lastName" dark placeholder="Last Name">
      <v-icon slot="prepend" class="mr-4">far fa-user</v-icon>
    </v-text-field>
    <v-text-field v-model="form.email" dark placeholder="Email" type="email">
      <v-icon slot="prepend" class="mr-4">far fa-envelope</v-icon>
    </v-text-field>
    <v-text-field v-model="form.password" dark placeholder="Password" type="password">
      <v-icon slot="prepend" class="mr-4">fas fa-lock</v-icon>
    </v-text-field>
    <v-text-field v-model="form.confirmPassword" dark placeholder="Confirm Password" type="password">
      <v-icon slot="prepend" class="mr-4">fas fa-lock</v-icon>
    </v-text-field>
    <div class="text-center mt-8">
      <v-btn dark outlined rounded @click="signUpHandler">Sign Up</v-btn>
    </div>
    <p class="text-center white--text mt-4">or</p>
    <div class="text-center">
      <v-btn rounded elevation="0" @click="signInHandler">Sign In</v-btn>
    </div>
  </v-col>
</template>

<script>
import { mapActions } from 'vuex'
import SiteLogo from '../components/SiteLogo.vue'

export default {
  name: 'SignupForm',

  components: { SiteLogo },

  data: function () {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },

  methods: {
    signUpHandler: function () {
      if (!this.form.email || !this.form.password || !this.form.confirmPassword) {
        return
      }

      this
        .registerUser(this.form)
        .then(() => {
          this.signInHandler()
        })
        .catch(() => {
          console.error("Sign Up Failed")
        })
        .finally(() => {
          //
        })
    },

    signInHandler: function () {
      this.$emit('signinClicked')
    },

    ...mapActions('auth', ['registerUser'])
  }
}
</script>

<style>
</style>
