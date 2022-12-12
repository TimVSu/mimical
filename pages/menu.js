// author: Maxim Torgovitski

// import react native
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, useColorScheme } from 'react-native';
import React from 'react';
import {useState} from 'react'

// import components
import NavBar from '../components/nav_bar.js';
import TabBar from '../components/tab_bar.js';
import Scenario from '../components/scenario.js';
import FilterBar from '../components/filter_bar.js';
import { faBeer, faBowlingBall, faChurch, faCity, faCow, faLightbulb, faSnowflake, faSun, faTree } from '@fortawesome/free-solid-svg-icons';
import styles from '../components/styles.js';
import { light_primary_color, dark_primary_color } from '../components/styles.js';
import {getAllContents, incrementCurrentContent, getCurrentSequence, setCurrentContent, getCurrentContent, getScenario, setCurrentSequence} from '../components/levelContents';



// colors
const orange = 'rgb(255, 149, 0)';
const yellow = 'rgb(255, 204, 0)';
const green = 'rgb(52, 199, 89)';
const blue = 'rgb(0, 122, 255)';
const pink = 'rgb(250, 17, 79)'
const accessibleBlue = 'rgb(0, 64, 221)'
const gray4 = 'rgb(209, 209, 214)';
const gray5 = 'rgb(229, 229, 234)';
const gray6 = 'rgb(242, 242, 247)';
const dark_blue = 'rgb(10, 132, 255)';
const dark_gray5 = 'rgb(44, 44, 46)';

// return home page
const HomePage = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const activeIconColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;
  const inactiveIconColor = colorScheme === 'light' ? gray5 : dark_gray5;

    // since this component is higher in hirarchy thatn the level component i use it to control the current content
    // All contets are stored with unique id's this hook stores the current starting pooint and passes it to the level component


    //@author: Tim Suchan
    // passed to the level component controlling which level will be displayed next
    // also used to start any level 
    /*const changeContent = () => {
      console.log('iscalled')
      if (currentContent < currentSequence.length){
        setCurrentContent(currentContent => currentContent + 1);
        navigation.navigate("Level", {content: allContents.currentContent, nextLevelFunction: changeContent});
      }
      else{
        navigation.navigate("Menu");
      }
    }*/
    setCurrentContent(1);

    const test = getAllContents()[1];

    const startLevel = (start, scenario) => {
      setCurrentContent(start);
      setCurrentSequence(scenario);
      navigation.navigate("Level");
    }

  return (
    <View style={{ flex: 1 }}>
      <NavBar page_title="Übersicht" navigation={navigation} />
      <FilterBar></FilterBar>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, containerColor]}>
          {/* <Text style={[styles.title1, textColor]}>Text</Text> */}
          <Scenario
            title="Der erste Schnee"
            progress={1}
            exercises={7}
            key="umzug"
            test="umzug"
            icon={faSnowflake}
            color={'white'}
            navigation={navigation}
            />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
      <TabBar
        home={activeIconColor}
        stats={inactiveIconColor}
        settings={inactiveIconColor}
        navigation={navigation}
      />
    </View>
  );
}

export default HomePage;