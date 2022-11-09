// import React from "react";
// // 1. import `NativeBaseProvider` component
// import { NativeBaseProvider, Text, Box, FormControl, WarningOutlineIcon, Icon, Input, Container, Heading, Center, Square, Circle,Flex, ScrollView, VStack } from "native-base";
// import { NavigationContainer } from "@react-navigation/native";
// import RootStack from './stacks/rootStack.js'

// export default function App() {
//   // 2. Use at the root of your app
//   return (
//     <NativeBaseProvider>
//     <NavigationContainer>
//     <RootStack></RootStack>
//     </NavigationContainer>
//     </NativeBaseProvider>
//   );
// }

import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const blue = 'rgb(0, 122, 255)';
const gray4 = 'rgb(209, 209, 214)';
const gray5 = 'rgb(229, 229, 234)';
const gray6 = 'rgb(242, 242, 247)';

// return square @maxim
const Square = () => {
  return (
    <View style={styles.square}></View>
  );
}

// return scenario @maxim
const Scenario = (props) => {
  return (
    <View style={styles.scenario}>
      <Square></Square>
      <Text style={styles.label}>Scenario {props.category}{props.level}</Text>
    </View>
  );
}

// return scenario list @maxim
const ScenarioList = (props) => {
  return (
    <View style={styles.scenario_list}>
      <Text style={styles.title}>Scenario List {props.category}</Text>
      <ScrollView horizontal={true}>
        <Scenario category={props.category} level="1" />
        <Scenario category={props.category} level="2" />
        <Scenario category={props.category} level="3" />
        <Scenario category={props.category} level="4" />
        <Scenario category={props.category} level="5" />
        <Scenario category={props.category} level="6" />
        <Scenario category={props.category} level="7" />
        <Scenario category={props.category} level="8" />
        <Scenario category={props.category} level="9" />
        <Scenario category={props.category} level="10" />
      </ScrollView>
    </View>
  );
}

// return navigation bar @maxim
const NavBar = () => {
  return (
    <View style={styles.nav_bar}>
      {/* <FontAwesomeIcon icon={ faChevronLeft } size={ 32 } /> */}
      <Text style={styles.page_title}>Page Title</Text>
      <FontAwesomeIcon icon={faCircleInfo} color={blue} size={32} />
    </View>
  );
}

// return tab bar @maxim
const TabBar = () => {
  return (
    <View style={styles.tab_bar}>
      <FontAwesomeIcon icon={faHouse} color={blue} size={32} />
      <FontAwesomeIcon icon={faChartSimple} color={gray4} size={32} />
      <FontAwesomeIcon icon={faGear} color={gray4} size={32} />
    </View>
  );
}

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <NavBar></NavBar>
      <ScrollView>
        {/* <Button
          onPress={() => {
            setIsUnlocked(true);
          }}
          title={isUnlocked ? "Scenario unlocked" : "Scenario locked"}
        />
        <Button
          onPress={() => {
            setIsUnlocked(false);
          }}
          title={isUnlocked ? "Scenario unlocked" : "Scenario locked"}
        /> */}
        <View style={styles.container}>
          <ScenarioList category="A" />
          <ScenarioList category="B" />
          <ScenarioList category="C" />
          <ScenarioList category="D" />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
      <TabBar></TabBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 64
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 16
  },
  square: {
    backgroundColor: gray6,
    width: 128,
    height: 128,
    borderRadius: 16
  },
  scenario: {
    margin: 16
  },
  scenario_list: {
    marginTop: 16,
    marginBottom: 16
  },
  label: {
    fontSize: 17,
    marginTop: 4
  },
  nav_bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'lightgray',
    padding: 16,
    paddingTop: 64,
    borderBottomWidth: 1,
    borderColor: gray5
  },
  tab_bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: 'lightgray',
    padding: 16,
    paddingBottom: 32,
    borderTopWidth: 1,
    borderColor: gray5
  },
  page_title: {
    fontSize: 34,
    fontWeight: 'bold'
  }
});
