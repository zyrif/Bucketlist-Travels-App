<template>
  <v-col cols="4">
    <site-logo logotype="hero" />
    <v-text-field dark placeholder="     Username">
      <v-icon slot="prepend" class="mr-4">far fa-user</v-icon>
    </v-text-field>
    <v-text-field dark placeholder="     Password">
      <v-icon slot="prepend" class="mr-4">fas fa-lock</v-icon>
    </v-text-field>
    <div
      class="div-forgot-password d-flex flex-row-reverse mb-4 text-caption"
      style="color: white; cursor: pointer"
      @click="ForgetPasswordHandler"
    >
      Forgot Password?
    </div>
    <div class="text-center">
      <v-btn dark outlined rounded @click="signInHandler">Sign in</v-btn>
    </div>
    <p class="text-center white--text mt-4">or</p>
    <div class="text-center">
      <v-btn rounded elevation="0" @click="SignupHandler">Sign up</v-btn>
    </div>
    <v-dialog v-model="isForgetPassOpen" max-width="450">
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

export default {
  name: "SigninForm",
  components: { SiteLogo },
  data: function () {
    return {
      isForgetPassOpen: false,
    };
  },
  methods: {
    signInHandler: function () {
      this.$router.push("/dashboard");
    },
    SignupHandler: function () {
      this.$emit("signupClicked");
    },
    ForgetPasswordHandler: function () {
      this.isForgetPassOpen = !this.isForgetPassOpen;
    },
  },
};
</script>

<style>
.div-forgot-password:hover {
  color: #42a5f5;
}
</style>