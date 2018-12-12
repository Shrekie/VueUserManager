<template>
  <view class="app-container">
    <RegisterUser />
  </view>
</template>

<script>

import RegisterUser from "./RegisterUser.vue";

export default {
  components: { RegisterUser }
}
</script>
 
<style>

.app-container{
  margin-top:10%;
  margin:50px;
}

</style>
