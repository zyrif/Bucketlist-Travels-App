<template>
  <v-text-field
    filled
    outlined
    rounded
    background-color="white"
    color="grey"
    placeholder="Search a place you wanna go..."
    class="ma-4"
  >
    <template #append>
      <v-btn
        dark
        rounded
        color="white"
        elevation="0"
        style="top: -7px; left: 14px"
      >
        <v-icon dense color="grey">
          fas fa-search
        </v-icon>
      </v-btn>
    </template>
  </v-text-field>
</template>

<script>
export default {

}
</script>

<style>

</style>