<template>
  <view>

    <button
    :on-press="registerUser"
    title="Register"
    color="orange"/>

    <text>Name</text>
    <text-input
    :style="{height: 40, borderColor: 'gray', borderWidth: 1}"
    v-model="name"/>

    <text>Email</text>
    <text-input
    :style="{height: 40, borderColor: 'gray', borderWidth: 1}"
    v-model="email"/>

    <text>Password</text>
    <text-input
    :style="{height: 40, borderColor: 'gray', borderWidth: 1}"
    v-model="password"/>

    <text>Confirm Password</text>
    <text-input
    :style="{height: 40, borderColor: 'gray', borderWidth: 1}"
    v-model="password_confirmation"/>

    <text>{{requestResponse}}</text>

  </view>
</template>

<script>

import SessionBinder from '../../modules/Password/SessionBinder.js'

export default {

  data () {
    return {
      requestResponse: "",
      name: "test",
      password: "test",
      password_confirmation: "test",
      email: "test@test.com"
    }
  },

  methods: {

    registerUser () {

      console.log(this.email);
      console.log(this.password);
      console.log(this.password_confirmation);

      SessionBinder.chainUser(this.name, this.email, 
      this.password, this.password_confirmation).then(response => {

        this.requestResponse = JSON.stringify(response);

      });

    }

  }

}
</script>
 
<style>

</style>
