// author: Maxim Torgovitski

// import react native
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, useColorScheme, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import {useState} from 'react'

// import components
import NavBar from '../components/nav_bar.js';
import TabBar from '../components/tab_bar.js';
import Scenario from '../components/scenario.js';
import FilterBar from '../components/filter_bar.js';
import { faBeer, faBowlingBall, faChurch, faCity, faCow, faLightbulb, faSnowflake, faSun, faTree } from '@fortawesome/free-solid-svg-icons';
import styles from '../components/styles.js';
import {getAllContents, getDefaultScenarios, setCurrentContent, setCurrentSequence} from '../components/contentManager';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleInfo, faEye, faFaceSmile } from '@fortawesome/free-solid-svg-icons';

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

const listTag = [
  {
tag: 'ALL'
},
{
tag: 'CHEEKS'
},
{
tag: 'NOSE'
},
{
tag: 'LIPS'
},
{
tag: 'MOUTH'
}
]


// return home page
const HomePage = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const activeIconColor = colorScheme === 'light' ? blue : dark_blue
  const inactiveIconColor = colorScheme === 'light' ? gray5 : dark_gray5
  const buttonColor = colorScheme === 'light' ? styles.light_button : styles.dark_button;

  setCurrentContent(1);

  // const keyArray = Object.keys(getDefaultScenarios());

  const startLevel = (start, scenario) => {
    setCurrentContent(start);
    setCurrentSequence(scenario);
    navigation.navigate("Level");
  }

  const [tag, setTag] = useState('All')
  const [keyArray, setKeyArray] = useState(Object.keys(getDefaultScenarios()))
  const setTagFilter = tag => {

    console.log(keyArray.toString())

    if(tag !== 'ALL'){
      setKeyArray([...keyArray.filter(e => e.tags === tag)])
    } else {
      setKeyArray(Object.keys(getDefaultScenarios()))
    }
      setTag(tag)
  }
  
  

  return (
    <View style={{ flex: 1 }}>
      <NavBar page_title="Übersicht" navigation={navigation} />
      {/* <FilterBar></FilterBar> */}

      <View style={[styles.filter_bar, containerColor]}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {listTag.map(e => (
              
            <View style={[{flexDirection: 'row'},{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginRight: 8 }, buttonColor]}>
                <TouchableOpacity style={[{ flexDirection: 'row' }, { alignItems: 'center' }, tag === e.tag && styles.btnTabActive]} onPress={() => setTagFilter(e.tag)}>
                  <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' />
                  <Text style={[styles.label, { color: 'white' }]}>{e.tag}</Text>
                </TouchableOpacity>
                
            </View>
          ))}
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, containerColor]}>
          {/* <Text style={[styles.title1, textColor]}>Text</Text> */}
          {keyArray.map((scenarioKey) =>
        (
          <Scenario
            title={scenarioKey}
            name={scenarioKey}
            key={scenarioKey}
            icon={faSnowflake}
            color={'white'}
            navigation={navigation}
            progress={1}
            exercises={7}
            />))}

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