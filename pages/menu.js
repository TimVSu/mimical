// author: Maxim Torgovitski, Tim Suchan

// import react native
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, useColorScheme, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import Exercise from '../components/exercise.js';

// import components
import NavBar from '../components/nav_bar.js';
import TabBar from '../components/tab_bar.js';
import Scenario from '../components/scenario.js';
import styles from '../components/styles.js';
import { light_primary_color, dark_primary_color, gray5, gray6, dark_gray5, dark_gray6 } from '../components/styles.js';
import { getDefaultScenarios, setCurrentContent, getScenario, getIcon, getTags, getScenarioFromTask, } from '../components/contentManager';
import Button from "../components/button";

const tagStates = {
  'Obere Gesichtshälfte': false,
  'Untere Gesichtshälfte': false,
  'Langes Szenario': false,
  'Kurzes Szenario': false
}

const HomePage = ({ navigation }) => {

  //VARIABLES:
  //===============================================================================================================================================

  // light/dark mode
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const activeIconColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;
  const inactiveIconColor = colorScheme === 'light' ? gray5 : dark_gray5;
  const activeFilterColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;
  const inactiveFilterColor = colorScheme === 'light' ? gray6 : dark_gray6;
  const filterTextColor = colorScheme === 'light' ? 'black' : 'white';

  // state variables
  const [tag, setTag] = useState('All')
  const [keyArray, setKeyArray] = useState(Object.keys(getDefaultScenarios()))
  const [filteredKeyArray, setFilteredKeyArray] = useState(Object.keys(getDefaultScenarios()))
  const [completionStates, setCompletionStates] = useState({});
  const [language, setLanguage] = useState("german");
  const [nextTask, setNextTask] = useState(1);
  const [fetchCompleted, setFetchCompleted] = useState(false);

  // since this component is higher in hirarchy thatn the level component i use it to control the current content
  // All contets are stored with unique id's this hook stores the current starting pooint and passes it to the level component

  //FUNCTIONS:
  //===============================================================================================================================================

  setCurrentContent(1);

  // retrieve language data
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('settings');
      const value = JSON.parse(jsonValue);
      if (value !== null) {
        setLanguage(value.language);
      }
    } catch (error) {
      // error retrieving data
    }
  }

  // const keyArray = Object.keys(getDefaultScenarios());

  //@author: Tim Suchan
  //triggered every time this screen is in focus. Done so that the content such as completed levels and progress updates
  //when going back to the menu
  useFocusEffect(
    useCallback(() => {
      fetchCompletionStates();
      fetchLastTask();
      getData();
    }, [])
  );

  //@author: Tim Suchan
  //Fetches the completions object from async storage
  const fetchCompletionStates = async () => {
    try {
      const item = await AsyncStorage.getItem("@completions");
      if (item) {
        setCompletionStates(JSON.parse(item));
      }
    } catch { }
  }

  //@author: Tim Suchan
  //takes the key to a scenario (e.g. Umzug) and returns an array of all the exercises
  //in the given scenario that have already been completed
  const getCompletionsByScenario = (scenarioKey) => {
    const scenario = getScenario(scenarioKey);
    return scenario.filter(isCompleted);
  }

  //@author: Tim Suchan
  //returns true if a level given by ID has been completed already
  const isCompleted = (index) => {
    try {
      return completionStates[index.toString()] == 'completed';
    }
    catch {
      return false;
    }
  }

  //@author: Tim Suchan
  //fetches the contentID of the last completed task from async storage
  //adds 1 and saves to nextTask
  const fetchLastTask = async () => {
    try {
      const item = await AsyncStorage.getItem('lastTask');
      if (item) {
        setNextTask(parseInt(item) + 1);
        setFetchCompleted(true);
        console.log("FETCH COMPLETED")
      }
    } catch { }
  };

  //@author: Tim Suchan
  //triggers fetching of exercise completion states on render
  useEffect(() => {
    fetchCompletionStates();
    fetchLastTask();
    getData();
  }, []);

  //@author: Tim Suchan
  //toggles the filter state in the tagStates object for a given tag and call setKeyArrayToFilter
  //sets filteredArray to include all entrys from keyArray that pass the checkTags function
  const setTagFilter = (tag) => {
    tagStates[tag] = !tagStates[tag];
    setFilteredKeyArray(keyArray.filter(checkTags));

  }

  //@author: Tim Suchan
  //returns true if both tags of a given scenario are set to true in the tagStates object
  const checkTags = (scenarioKey) => {
    trueTags = Object.keys(tagStates).filter((tagState) => tagStates[tagState]);
    return trueTags.every(tag => getTags(scenarioKey).includes(tag));
  }

  // return home page
  return (
    <View style={[{ flex: 1 }, containerColor]}>
      <NavBar page_title={language == "german" ? "Übersicht" : "Overview"} navigation={navigation} />

      <View style={[styles.filter_bar, containerColor]}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {Object.keys(tagStates).map(tag => (

            <TouchableOpacity key={tag} style={[{ flexDirection: 'row' }, { alignItems: 'center' }]} onPress={() => setTagFilter(tag)}>
              <View style={[{ backgroundColor: tagStates[tag] ? activeFilterColor : inactiveFilterColor }, { borderRadius: 16 }, { padding: 12 }, { margin: 16 }]}>
                <Text style={[{ fontSize: 12 }, { fontWeight: 'bold' }, { color: tagStates[tag] ? 'white' : filterTextColor }]}>{tag}</Text>
              </View>
            </TouchableOpacity>

          ))}
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, containerColor]}>
          <View style={[{ padding: 16 }, { flexDirection: 'row' }]}>
            {/* <View style={[{ width: 128 }, { height: 128 }, { backgroundColor: colorScheme === 'light' ? gray6 : dark_gray6 }, { borderRadius: 16 }]}></View> */}
            <View style={[{ marginLeft: 0 }, { justifyContent: 'space-between' }]}>
              {fetchCompleted && (
                <Exercise
                  level={getScenario(getScenarioFromTask(nextTask)).indexOf(nextTask)}
                  key={nextTask}
                  icon={getIcon(getScenarioFromTask(nextTask))}
                  navigation={navigation}
                  unlocked={true}
                  completed={isCompleted(nextTask)}
                  scenarioKey={getScenarioFromTask(nextTask)}
                  fromHomeScreen={true}
                ></Exercise>
              )}
            </View>
          </View>
          {filteredKeyArray.map((scenarioKey) =>
          (
            <Scenario
              key={scenarioKey}
              title={scenarioKey}
              name={scenarioKey}
              icon={getIcon(scenarioKey)}
              color={'white'}
              navigation={navigation}
              completions={getCompletionsByScenario(scenarioKey)}
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