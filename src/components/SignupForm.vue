<template>
  <v-col cols="4">
    <site-logo logotype="hero" />
    <v-text-field v-model="form.firstName" dark placeholder="First Name">
      <v-icon slot="prepend" class="mr-4">far fa-user</v-icon>
    </v-text-field>
    <v-text-field v-model="form.lastName" dark placeholder="Last Name">
      <v-icon slot="prepend" class="mr-4">far fa-user</v-icon>
    </v-text-field>
    <v-text-field v-model="form.email" dark placeholder="Email" :rules="[rules.required, rules.email]" type="email">
      <v-icon slot="prepend" class="mr-4">far fa-envelope</v-icon>
    </v-text-field>
    <v-text-field v-model="form.password" dark placeholder="Password" :rules="[rules.required, rules.password]" type="password">
      <v-icon slot="prepend" class="mr-4">fas fa-lock</v-icon>
    </v-text-field>
    <v-text-field v-model="form.confirmPassword" dark placeholder="Confirm Password" :rules="[rules.required]" type="password">
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
import loginValidators from "@/mixins/validators/loginValidators"

export default {
  name: 'SignupForm',

  components: { SiteLogo },

  mixins: [loginValidators],

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
        .catch((error) => {
          if (error.response && (error.response.status >= 400 && error.response.status <= 499)) {
            if (error.response.status === 400 && "non_field_errors" in error.response.data) {
              this.openMessageDialog({
                title: "Signup Failed",
                body: error.response.data.non_field_errors.toString(),
                canChoose: false,
                defaultBtnText: "Dismiss"
              })
            } else if (error.response.status === 400 && "email" in error.response.data) {
              this.openMessageDialog({
                title: "Signup Failed",
                body: error.response.data.email.toString(),
                canChoose: false,
                defaultBtnText: "Dismiss"
              })
            } else {
              console.log(error.response.data)
              this.openMessageDialog({
                title: "Unknown Error",
                body: "Check browser console for details.",
                canChoose: false,
                defaultBtnText: "Dismiss"
              })
            }
          } else if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
            this.openMessageDialog({
              title: "Server Error",
              body: "Server could not process this request.",
              canChoose: false,
              defaultBtnText: "Dismiss"
            })
          } else {
            this.openMessageDialog({
              title: "Network Error",
              body: "Unable to reach the app server.",
              canChoose: false,
              defaultBtnText: "Dismiss"
            })
          }
        })
        .finally(() => {
          //
        })
    },

    signInHandler: function () {
      this.$emit('signinClicked')
    },

    ...mapActions('auth', ['registerUser']),
    ...mapActions('globalStates', ['openMessageDialog'])
  }
}
</script>

<style>
</style>
