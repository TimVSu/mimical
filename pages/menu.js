// author: Maxim Torgovitski

// import react native
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import {useState} from 'react'

// import components
import NavBar from '../components/nav_bar.js';
import TabBar from '../components/tab_bar.js';
import Scenario from '../components/scenario.js';
import FilterBar from '../components/filter_bar.js';
import { faBeer, faBowlingBall, faChurch, faCity, faCow, faLightbulb, faSnowflake, faSun, faTree } from '@fortawesome/free-solid-svg-icons';
import styles from '../components/styles.js';
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

// return home page
const HomePage = ({ navigation }) => {

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
    const test2 = getCurrentContent();
    const go = () => {
    }

    const test = getAllContents()[1];

    const startLevel = (start, scenario) => {
      setCurrentContent(start);
      setCurrentSequence(scenario);
      navigation.navigate("Level");
    }

  return (
    <View style={{ flex: 1 }}>
      <NavBar page_title="Übersicht" />
      <FilterBar></FilterBar>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Scenario title="Der erste Schnee" progress={0} exercises={7} scenario={getScenario("umzug")} startFunction={startLevel}
          icon={faSnowflake} color={'white'} navigation={navigation} />
          <Scenario title="Besuch im botanischen Garten" progress={0} exercises={9} icon={faTree} color={green} navigation={navigation} />
          <Scenario title="Stadtbummel" progress={0} exercises={8} icon={faCity} navigation={navigation} />
          <Scenario title="Kegeln" progress={0} exercises={8} icon={faBowlingBall} navigation={navigation} />
          <Scenario title="Besichtigung einer Kathedrale" progress={0} exercises={7} icon={faChurch} navigation={navigation} />
          <Scenario title="Sommerabend auf dem Balkon" progress={0} exercises={7} icon={faSun} color={orange} navigation={navigation} />
          <Scenario title="Im Biergarten" progress={0} exercises={7} icon={faBeer} color={yellow} navigation={navigation} />
          <Scenario title="Einkauf beim Metzger" progress={0} exercises={7} icon={faCow} color={pink} navigation={navigation} />
          <Scenario title="Laternenumzug" progress={0} exercises={6} icon={faLightbulb} navigation={navigation} />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
      <TabBar home={blue} stats={gray4} settings={gray4} navigation={navigation} />
    </View>
  );
}

export default HomePage;