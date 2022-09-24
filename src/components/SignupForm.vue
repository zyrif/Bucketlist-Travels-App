<template>
  <v-col cols="4">
    <site-logo logotype="hero" />
    <v-form v-model="form.isValid" ref="signup-form">
      <v-text-field v-model="form.firstName" dark placeholder="First Name">
        <v-icon slot="prepend" class="mr-4">far fa-user</v-icon>
      </v-text-field>
      <v-text-field v-model="form.lastName" dark placeholder="Last Name">
        <v-icon slot="prepend" class="mr-4">far fa-user</v-icon>
      </v-text-field>
      <v-text-field v-model="form.email" dark :error="!!errorMessages.email" :error-messages="errorMessages.email"
        placeholder="Email" :rules="[rules.required, rules.email]" type="email">
        <v-icon slot="prepend" class="mr-4">far fa-envelope</v-icon>
      </v-text-field>
      <v-text-field v-model="form.password" dark :error="!!errorMessages.password"
        :error-messages="errorMessages.password" placeholder="Password" :rules="[rules.required, rules.password]"
        type="password">
        <v-icon slot="prepend" class="mr-4">fas fa-lock</v-icon>
      </v-text-field>
      <v-text-field v-model="form.confirmPassword" dark :error="!!errorMessages.confirmPassword"
        :error-messages="errorMessages.confirmPassword" placeholder="Confirm Password" type="password">
        <v-icon slot="prepend" class="mr-4">fas fa-lock</v-icon>
      </v-text-field>
    </v-form>
    <div class="text-center mt-8">
      <v-btn dark outlined rounded :loading="this.states.isSignUpBtnLoading" @click="signUpHandler">Sign Up</v-btn>
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
        isValid: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },

      errorMessages: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },

      states: {
        isSignUpBtnLoading: false
      }
    }
  },

  watch: {
    "form.email": function () {
      if (this.errorMessages.email) {
        this.errorMessages.email = ""
      }
    },
    "form.password": function () {
      if (this.errorMessages.password) {
        this.errorMessages.password = ""
      }
      this.checkIfPasswordsMatch()
    },
    "form.confirmPassword": function () {
      this.checkIfPasswordsMatch()
    },
  },

  methods: {
    checkIfPasswordsMatch: function () {
      if (this.errorMessages.confirmPassword && this.form.password === this.form.confirmPassword) {
        this.errorMessages.confirmPassword = ""
      } else {
        this.errorMessages.confirmPassword = "Entered passwords do not match."
      }
    },

    signUpHandler: function () {
      if (!this.form.isValid) {
        return
      }

      this.states.isSignUpBtnLoading = true
      this
        .registerUser(this.form)
        .then(() => {
          this.signInHandler()
        })
        .catch((error) => {
          if (error.response && (error.response.status >= 400 && error.response.status <= 499)) {
            let knownError = false
            if ("email" in error.response.data) {
              knownError = true
              this.errorMessages.email = error.response.data.email.toString()
            }
            if ("password" in error.response.data) {
              knownError = true
              this.errorMessages.password = error.response.data.password.toString()
            }
            if ("non_field_errors" in error.response.data) {
              knownError = true
              this.openMessageDialog({
                title: "Signup Failed",
                body: error.response.data.non_field_errors.toString(),
                canChoose: false,
                defaultBtnText: "Dismiss"
              })
            }
            if (!knownError) {
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
          this.states.isSignUpBtnLoading = false
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
