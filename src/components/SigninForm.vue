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
import { mapActions } from "vuex";

export default {
  name: "SigninForm",

  components: { SiteLogo },
  data: function () {
    return {
      form: {
        email: '',
        password: ''
      },

      states: {
        isSignInBtnLoading: false,
        isForgetPassOpen: false
      },

			rules: {
        required: (v) => !!v || "Value required",
        email: (v) => {
          const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return regex.test(v) || "Must be a valid email address"
        },
        password: (v) => {
          const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\^$*.[\]{}()?\-"!@#%&/\\,><':;|_~`+=])[A-Za-z\d^$*.[\]{}()?\-"!@#%&/\\,><':;|_~`+=]{8,}$/
          return regex.test(v) || "Must have at least 8 characters including at least 1 number, 1 special character, 1 lowercase letter and 1 uppercase letter"
        }
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
        .catch(() => console.error('auth failed!'))
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
    ...mapActions('auth', ['authenticate'])
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
