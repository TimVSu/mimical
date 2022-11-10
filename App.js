import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, FormControl, WarningOutlineIcon, Icon, Input, Container, Heading, Center, Square, Circle,Flex, ScrollView, VStack } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from './stacks/rootStack.js'

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
    <NavigationContainer>
    <RootStack></RootStack>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}