<template>
  <v-col cols="4">
    <h1 class="text-center">BucketList Logo</h1>
    <v-text-field placeholder="     Username">
      <v-icon slot="prepend" class="mr-4">far fa-user</v-icon>
    </v-text-field>
    <v-text-field placeholder="     Password">
      <v-icon slot="prepend" class="mr-4">fas fa-lock</v-icon>
    </v-text-field>
    <div
      class="div-forgot-password d-flex flex-row-reverse mb-4 text-caption"
      style="cursor: pointer"
      @click="ForgetPasswordHandler"
    >
      Forgot Password?
    </div>
    <div class="text-center">
      <v-btn outlined rounded>Sign in</v-btn>
    </div>
    <p class="text-center mt-4">or</p>
    <div class="text-center">
      <v-btn dark rounded @click="SignupHandler">Sign up</v-btn>
    </div>
    <v-dialog v-model="isForgetPassOpen" max-width="450">
      <v-card>
        <v-card-title>Enter Your Registered Email Address: </v-card-title>
        <v-card-text>
          <v-text-field placeholder="Email" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text> reset </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
export default {
  name: "SigninForm",
  data: function () {
    return {
      isForgetPassOpen: false,
    };
  },
  methods: {
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
  color: #42A5F5;
}
</style>