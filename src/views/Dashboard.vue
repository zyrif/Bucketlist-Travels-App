<template>
  <v-container fluid>
    <v-row align="start">
      <cover />
    </v-row>
    <v-row align="start">
      <v-col cols="2">
        <profile />
        <navbar />
      </v-col>
      <v-col cols="10">
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
        <v-card rounded="lg" color="grey lighten-4" elevation="0" class="ma-4 pa-2">
         <v-list-item three-line>
           <v-list-item-avatar tile color="grey" size="120">
           </v-list-item-avatar>
           <v-list-item-content>
             <v-list-item-title class="text-h5">
               Vinnya Jagat
             </v-list-item-title>
             <v-list-item-subtitle class="black--text">
               Vinnya Jagat is located at Paglapir, Khaleya, Rangpur. This is the only amusement park listed in Rangpur.
             </v-list-item-subtitle>
           </v-list-item-content>
         </v-list-item> 
         <v-card-actions class="ml-6">
           <v-btn icon> <v-icon dense color="black"> fas fa-map-marker-alt </v-icon> </v-btn>
           <v-btn icon> <v-icon dense color="black"> fas fa-location-arrow </v-icon> </v-btn>
         </v-card-actions>
        </v-card>
        <v-card rounded="lg" color="grey lighten-4" elevation="0" class="ma-4 pa-2">
         <v-list-item three-line>
           <v-list-item-avatar tile color="grey" size="120">
           </v-list-item-avatar>
           <v-list-item-content>
             <v-list-item-title class="text-h5">
               Tajhat Jamidar Palace
             </v-list-item-title>
             <v-list-item-subtitle class="black--text">
               Tajhat Palace, Tajhat Rajbari, is a historic palace of Bangladesh, located in Tajhat, Rangpur. This palace now holds the Rangpur museum. Tajhat Palace is situated three km. south-east of the city of Rangpur, on the outskirts of town.
             </v-list-item-subtitle>
           </v-list-item-content>
         </v-list-item> 
         <v-card-actions class="ml-6">
           <v-btn icon> <v-icon dense color="black"> fas fa-map-marker-alt </v-icon> </v-btn>
           <v-btn icon> <v-icon dense color="black"> fas fa-location-arrow </v-icon> </v-btn>
         </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Cover from '../components/DashboardCover.vue'
import Navbar from '../components/DashboardNavbar.vue'
import Profile from '../components/DashboardProfile.vue'
export default {
  components: { Cover, Profile, Navbar }
}
</script>

<style>
</style>