<template>
    <SelectAuth />
</template>

<script>

import Expo from "expo";

import SelectAuth from "./components/Curtain/SelectAuth.vue";

export default {

  components: { 
    SelectAuth 
  },

  methods: {

  },

  mounted: () => {

    // Am i alive
    const { manifest } = Expo.Constants;
    const hostIp = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
    ? manifest.debuggerHost.split(`:`).shift().concat(`:8000`)
    : `api.example.com`;

    const api = "http://laravelusermanager.test";
    fetch(api+'/api/test').catch(error => {
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
