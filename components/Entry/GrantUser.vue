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

export default {

  data () {
    return {
      requestResponse: "",
      username: "",
      password: "",
      api: "http://laravelusermanager.test"
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
          client_id : '8',
          client_secret : 'lPOtlpnZbkScDOcf2QOM8FFVQluQgUYIJihIOZIi',
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
