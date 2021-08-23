<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <signin-form v-if="isSigningIn" @signupClicked="ToggleSignup"/>
      <signup-form v-else/>
    </v-row>
  </v-container>
</template>

<script>
import SigninForm from '../components/SigninForm.vue'
import SignupForm from '../components/SignupForm.vue'
export default {
  components: { SigninForm, SignupForm },
  data: () => ({
    isSigningIn: true
  }),
  methods: {
    ToggleSignup: function() {
      this.isSigningIn = false;
    } 
  }
}
</script>

<style lang="sass">

</style>
