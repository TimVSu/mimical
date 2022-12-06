import Login from "../pages/login.js";
import Home from "../pages/home.js";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LevelLayout from "../pages/level.js";
import Menu from "../pages/menu.js";
import Settings from "../pages/settings.js";
import Progress from "../pages/progress.js";
import Api from "../pages/api.js";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import Homelogin from "../pages/home_login";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeL" component={Homelogin} />
      <Stack.Screen name="Sign In" component={SignIn} />
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name="Level" component={LevelLayout} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Progress" component={Progress} />
      <Stack.Screen name="Api" component={Api} />
    </Stack.Navigator>
  );
};

export default RootStack;
