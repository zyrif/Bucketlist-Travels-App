<template>
  <div style="display:contents">
    <v-card v-for="place in places" v-bind:key="place.sortOrder" rounded="lg" color="grey lighten-4" elevation="0" class="ma-4 pa-2">
     <v-list-item three-line>
       <v-list-item-avatar tile color="grey" size="120">
       </v-list-item-avatar>
       <v-list-item-content>
         <v-list-item-title class="text-h5">
           {{ place.name }}
         </v-list-item-title>
         <v-list-item-subtitle class="black--text">
           {{ place.description }} 
         </v-list-item-subtitle>
       </v-list-item-content>
     </v-list-item>
     <v-card-actions class="ml-6">
       <v-btn icon> <v-icon dense color="black"> fas fa-map-marker-alt </v-icon> </v-btn>
       <v-btn icon> <v-icon dense color="black"> fas fa-location-arrow </v-icon> </v-btn>
     </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    places: [
        {
          id: 1,
          sortOrder: 1,
          name: "Vinnya Jagat",
          description: "Vinnya Jagat is located at Paglapir, Khaleya, Rangpur. This is the only amusement park listed in Rangpur.",
          coOrdinates: { lat: 25.833195220070884, lon: 89.1118665127216 },
        },
        {
          id: 2,
          sortOrder: 2,
          name: "Tajhat Jamidar Palace",
          description: "Tajhat Palace, Tajhat Rajbari, is a historic palace of Bangladesh, located in Tajhat, Rangpur. This palace now holds the Rangpur museum. Tajhat Palace is situated three km. south-east of the city of Rangpur, on the outskirts of town.",
          coOrdinates: { lat: 25.725456774856756, lon: 89.27992473534323 },
        }
      ]
  })
}
</script>

<style>

</style>