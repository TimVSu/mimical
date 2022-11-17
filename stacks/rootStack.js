// @author: Tim Suchan

import Login from "../pages/login.js";
import Home from "../pages/home.js";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LevelLayout from "../components/levelLayout.js";
import Notification from "../pages/notifications.js";
import Kalender from "../pages/calendar.js";
import Menu from "../pages/menu.js";
import Settings from "../pages/settings.js";
import Task from "../components/task.js";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Level" component={LevelLayout} />
      <Stack.Screen name="Notifications" component={Notification} />
      <Stack.Screen name="Calendar" component={Kalender} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Task" component={Task} />
    </Stack.Navigator>
  );
};

export default RootStack;
