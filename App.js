import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, FormControl, WarningOutlineIcon, Icon, Input, Container, Heading, Center, Square, Circle,Flex, ScrollView, VStack } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from './stacks/rootStack.js'




export default function App() {
  // 2. Use at the root of your app
  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <Text>Open up App.js!</Text>
      <StatusBar style="auto" />
    </View>
=======
    <NativeBaseProvider>
    <NavigationContainer>
    <RootStack></RootStack>
    </NavigationContainer>
    </NativeBaseProvider>
>>>>>>> 4b90f4b (camera preview and basic navigation stack)
  );
}