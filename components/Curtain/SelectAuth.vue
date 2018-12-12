<template>
  <tabNav />
</template>

<script>

import { TabNavigator } from "vue-native-router";

import Dashboard from "./DashBoard.vue";
import BottomTab from "./BottomTab.vue";

import Login from "../Entry/Login.vue";
import Register from "../Signup/Register.vue";

const tabNav = TabNavigator(
  {
    Dashboard: Dashboard,
    Login: Login,
    Register: Register
  },
  {
    initialRouteName: 'Dashboard',
    tabBarPosition: "bottom",
    tabBarComponent: BottomTab
  }
);

export default {
  components: { tabNav }
}

</script>

<style>

</style>