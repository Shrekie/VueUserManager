<template>
  <view>

    <button
    :on-press="grabUserToken"
    title="Login"
    color="green"/>

    <text>Email</text>
    <text-input
    :style="{height: 40, borderColor: 'gray', borderWidth: 1}"
    v-model="username"/>

    <text>Password</text>
    <text-input
    :style="{height: 40, borderColor: 'gray', borderWidth: 1}"
    v-model="password"/>

    <text>{{requestResponse}}</text>

  </view>
</template>

<script>

import { APP_URL } from 'react-native-dotenv';

export default {

  data () {
    return {
      requestResponse: "",
      username: "",
      password: "",
      api: APP_URL
    }
  },

  methods: {

    grabUserToken () {
      
      console.log(this.username);
      console.log(this.password);

      fetch(this.api+'/oauth/token', {

        method: 'POST',
        headers: {
        Accept: 'application/json',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          grant_type : 'password',
          client_id : '6',
          client_secret : 'pnnW2jHwcoCFSm9IgDhXgtMeHlV2j9FceHfnE2q3',
          username : this.username,
          password : this.password,
          scope : ''
        }),

      }).then(response => {

        response.json().then(jsonresponse => {
          this.requestResponse = JSON.stringify(jsonresponse);
        });

      });

    }

  }

}
</script>
 
<style>

</style>
