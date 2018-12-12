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
    v-model="passwordConfirmation"/>

    <text>{{requestResponse}}</text>

  </view>
</template>

<script>

export default {

  data () {
    return {
      requestResponse: "",
      name: "",
      password: "",
      passwordConfirmation: "",
      email: "",
      api: "http://laravelusermanager.test"
    }
  },

  methods: {

    registerUser () {

      console.log(this.username);
      console.log(this.password);

      fetch(this.api+'/api/register', {

        method: 'POST',
        headers: {
        Accept: 'application/json',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          name : this.name,
          email : this.email,
          password : this.password,
          password_confirmation: this.passwordConfirmation,
          scope : ''
        }),

      }).then(response => {

        response.json().then(jsonresponse => {

          console.log(jsonresponse);
          console.log(jsonresponse.message);

          // TODO: Get token
          if(jsonresponse.message != "Unauthenticated.")
            this.requestResponse = JSON.stringify(jsonresponse);
          else
            this.requestResponse = "Success";

        });

      });

    }

  }

}
</script>
 
<style>

</style>
