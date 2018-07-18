
<template>
  <v-layout>
    <v-flex text-xs-center>
    <h1>{{this.$store.state.counter}}</h1>
    <button>Add 5</button>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  data() {
    return {
      name: "joe"
    };
  },
  mounted() {
    console.log(this.$store.state.counter);
  }
};
</script>