<template>
  <v-card elevation="0">
    <v-list dense>
      <v-list-item-group v-model="activeItem" mandatory>
        <v-list-item>
          <v-list-item-content class="pl-8">
            <v-list-item-title>Explore Areas</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon class="pr-8">
            <v-icon small>fas fa-search-location</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="pl-8">
            <v-list-item-title>My Bucketlist</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon class="pr-8">
            <v-icon small>fas fa-fill</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="pl-8">
            <v-list-item-title>Start Journey</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon class="pr-8">
            <v-icon small>fas fa-location-arrow</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="pl-8">
            <v-list-item-title>Travel History</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon class="pr-8">
            <v-icon small>fas fa-history</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="pl-8">
            <v-list-item-title>Travel Buddies</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon class="pr-8">
            <v-icon small>fas fa-users</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="pl-8">
            <v-list-item-title>Create Frame</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon class="pr-8">
            <v-icon small>fas fa-share-alt</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  model: {
    prop: 'activeItem',
    event: 'item-number',
  },
  data: () => ({
    activeItem: 0,
  }),
  watch: {
    activeItem: function (itemNumber) {
      this.$emit('item-number', itemNumber)
    }
  }
}
</script>

<style>

</style>