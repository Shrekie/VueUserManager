<template>
  <view class="app-container">
    <text class="signified-notification">
      Welcome, contextual data here
    </text>
  </view>
</template>

<script>


export default {

  props: {
    navigation: {
      type: Object
    }
  },

}

</script>

<style>

.app-container{
  margin-top:10%;
}

.signified-notification{
  margin:25px;
}

</style>