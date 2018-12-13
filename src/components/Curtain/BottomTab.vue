<template>
  <view class="shard-list">

    <touchable-opacity class="button-shard"
      :onPress='(event) => { navigation.navigate("Dashboard"); }'>
      <text class="text-shard">Dashboard</text>
    </touchable-opacity>

    <touchable-opacity class="button-shard"
      :onPress='(event) => { navigation.navigate("Login"); }'>
      <text class="text-shard">Login</text>
    </touchable-opacity>

    <touchable-opacity class="button-shard"
      :onPress='(event) => { navigation.navigate("Register"); }'>
      <text class="text-shard">Register</text>
    </touchable-opacity>

  </view>
</template>

<script>


export default {

  props: {
    navigation: {
      type: Object
    }
  },

  methods: {
    
  }

}

</script>

<style>

.shard-list {
  display: flex;
  flex-direction: row;
}

.button-shard {
  background-color:blue;
  flex: 1;
  height: 50px;
  align-items: center;
  justify-content: center;
}

.text-shard {
  font-size: 18px;
  color:white;
  font-weight: 600;
}

</style>