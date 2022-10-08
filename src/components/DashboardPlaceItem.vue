<template>
  <v-card rounded="lg" color="grey lighten-4" elevation="0"
    class="ma-4 pa-2" :max-height="narrow ? '220px' : ''">
    <div class="d-flex">
      <div>
        <v-avatar v-if="!narrow" tile color="grey" size="140" class="ma-4">
        </v-avatar>
      </div>
      <div>
        <v-card-title class="text-h5">
          {{ place.name }}
        </v-card-title>
        <v-card-text class="black--text" :class="{ 'text-truncate': narrow }" :style="{ 'max-width': narrow ? '46vw' : '' }">
          {{ place.description }}
        </v-card-text>
        <v-card-text>
          <v-btn icon class="mx-2" @click="openMessageDialog({title: 'Apologies!', body: 'This feature has not been implemented yet'})">
            <v-icon dense color="black"> fas fa-map-marker-alt </v-icon>
          </v-btn>
          <v-btn icon class="mx-2" @click="openMessageDialog({title: 'Apologies!', body: 'This feature has not been implemented yet'})">
            <v-icon dense color="black"> fas fa-location-arrow </v-icon>
          </v-btn>
          <v-btn v-if="!myList && !place.visited" icon class="mx-2" @click="$emit('add-visited', place)">
            <v-icon dense color="black"> fas fa-plus-circle </v-icon>
          </v-btn>
          <v-btn v-if="!myList && place.visited" icon class="mx-2" @click="$emit('remove-visited', place)">
            <v-icon dense color="black"> fas fa-check-circle </v-icon>
          </v-btn>
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapActions } from "vuex"
export default {
  props: {
    place: {
      type: Object,
      required: true,
    },
    "my-list": {
      type: Boolean,
      default: false,
    },
    narrow: {
      type: Boolean,
      default: false,
    }
  },

  methods: {
    ...mapActions('globalStates', ['openMessageDialog'])
  }
}
</script>

<style>
</style>
