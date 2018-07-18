<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <get-characters/>
      </div>
      <v-card>
      
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat nuxt to="/inspire">continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import GetCharacters from "~/components/GetCharacters.vue";
import axios from "axios";

export default {
  components: {
    GetCharacters
  },
  async mounted() {
    // await this.$store.dispatch("getState");
    console.log("store:", this.$store);
  }
};
</script>
