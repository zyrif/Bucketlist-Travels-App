<template>
  <v-col cols="4">
    <site-logo logotype="hero" />
    <v-text-field v-model="form.email" dark placeholder="Email" :rules="[rules.required, rules.email]" type="email">
      <v-icon slot="prepend" class="mr-4">far fa-envelope</v-icon>
    </v-text-field>
    <v-text-field v-model="form.password" dark placeholder="Password" :rules="[rules.required]" type="password">
      <v-icon slot="prepend" class="mr-4">fas fa-lock</v-icon>
    </v-text-field>
    <div class="div-forgot-password d-flex flex-row-reverse mb-4 text-caption" style="color: white; cursor: pointer"
      @click="ForgetPasswordHandler">
      Forgot Password?
    </div>
    <div class="text-center">
      <v-btn dark outlined rounded :loading="this.states.isSignInBtnLoading" @click="signInHandler">Sign in</v-btn>
    </div>
    <p class="text-center white--text mt-4">or</p>
    <div class="text-center">
      <v-btn rounded elevation="0" @click="SignupHandler">Sign up</v-btn>
    </div>
    <v-dialog v-model="states.isForgetPassOpen" max-width="450">
      <v-card>
        <v-card-title>Enter Your Registered Email Address</v-card-title>
        <v-card-text>
          <v-text-field placeholder="Email" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text> proceed </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
import SiteLogo from "./SiteLogo.vue";
import loginValidators from "@/mixins/validators/loginValidators"
import { mapActions } from "vuex";

export default {
  name: "SigninForm",

  components: { SiteLogo },

  mixins: [loginValidators],

  data: function () {
    return {
      form: {
        email: '',
        password: ''
      },

      states: {
        isSignInBtnLoading: false,
        isForgetPassOpen: false
      }
    };
  },

  methods: {
    signInHandler: function () {
      if (!this.form.email || !this.form.password) return

      this.states.isSignInBtnLoading = true
      this
        .authenticate({
          email: this.form.email,
          password: this.form.password
        })
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          if (error.response && (error.response.status >= 400 && error.response.status <= 499)) {
            if (error.response.status === 400 && "non_field_errors" in error.response.data) {
              this.openMessageDialog({
                title: "Authentication Error",
                body: error.response.data.non_field_errors.toString(),
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
          this.states.isSignInBtnLoading = false
        })
    },

    SignupHandler: function () {
      this.$emit("signupClicked");
    },

    ForgetPasswordHandler: function () {
      this.states.isForgetPassOpen = !this.states.isForgetPassOpen;
    },

    ...mapActions('auth', ['authenticate']),
    ...mapActions('globalStates', ['openMessageDialog'])
  },
};
</script>

<style>
.div-forgot-password:hover {
  color: #42a5f5;
}

.v-text-field__slot>input {
  padding-left: 22px;
}
</style>
