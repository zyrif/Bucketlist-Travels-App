<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="4">
        <h1 class="text-center">BucketList Logo</h1>
        <v-text-field placeholder="     Username">
            <v-icon slot="prepend" class="mr-4">far fa-user</v-icon>
        </v-text-field>
        <v-text-field placeholder="     Password">
            <v-icon slot="prepend" class="mr-4">fas fa-lock</v-icon>
        </v-text-field>
        <div class="text-center">
          <v-btn outlined rounded>Sign in</v-btn>
        </div>
        <p class="text-center mt-4">or</p>
        <div class="text-center">
          <v-btn dark rounded>Sign up</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style lang="sass">

</style>
