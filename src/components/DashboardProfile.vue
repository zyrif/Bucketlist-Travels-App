<template>
  <v-card elevation="0">
    <v-card-text>
      <p class="text-center text-h5 no-bottom-margin">John Doe</p>
      <p class="text-center text-caption no-bottom-margin">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn outlined rounded x-small background-color="white" elevation="0">Edit Profile</v-btn>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>
.no-bottom-margin {
  margin-bottom: 0px !important;
}
</style>