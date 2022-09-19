<template>
  <v-dialog v-model="dialog" persistent v-bind:width="options.width" v-bind:style="{ zIndex: options.zIndex }">
    <v-card>
      <v-card-title class="text-h5">
        {{ options.title }}
      </v-card-title>
      <v-card-text>
        {{ options.body }}
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <div v-if="options.canChoose" style="display: contents">
          <v-btn color="grey darken-1" text v-on:click="no()">
            {{ options.cancelBtnText }}
          </v-btn>
          <v-btn color="green lighten-1" text v-on:click="yes()">
            {{ options.defaultBtnText }}
          </v-btn>
        </div>
        <div v-else style="display: contents">
          <v-btn color="green lighten-1" text v-on:click="yes()">
            {{ options.defaultBtnText }}
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'MessageDialog',

  data: () => ({

  }),

  computed: {
    dialog: {
      get: function () {
        return this.$store.state.globalStates.messageDialog.open
      },
      set: function (value) {
        this.$store.commit("globalStates/setMessageDialogValues", { open: value })
      },
    },

    options: function () {
      return {
        width: this.$store.state.globalStates.messageDialog.width,
        zIndex: this.$store.state.globalStates.messageDialog.zIndex,
        title: this.$store.state.globalStates.messageDialog.title,
        body: this.$store.state.globalStates.messageDialog.body,
        canChoose: this.$store.state.globalStates.messageDialog.canChoose,
        cancelBtnText: this.$store.state.globalStates.messageDialog.cancelBtnText,
        defaultBtnText: this.$store.state.globalStates.messageDialog.defaultBtnText
      }
    }
  },

  methods: {
    yes: function () {
      this.resolveMessageDialog(true)
    },

    no: function () {
      this.resolveMessageDialog(false)
    },

    ...mapActions('globalStates', ['resolveMessageDialog'])
  },
};
</script>
