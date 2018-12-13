<template>
    <SelectAuth />
</template>

<script>

import { APP_URL } from 'react-native-dotenv';

import SelectAuth from "./src/components/Curtain/SelectAuth.vue";

export default {

  components: { 
    SelectAuth 
  },

  methods: {

  },

  mounted: () => {

    fetch(APP_URL+'/api/test').catch(error => {
      console.log(error);
    }).then(result => {
      result.json().then(jsonres => {
        console.log(jsonres);
      });
    });
  
  }

}

</script>
 
<style>

</style>

