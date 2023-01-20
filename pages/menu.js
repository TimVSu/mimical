// author: Maxim Torgovitski, Tim Suchan

// import react native
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, useColorScheme, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState, useEffect, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';

// import components
import NavBar from '../components/nav_bar.js';
import TabBar from '../components/tab_bar.js';
import Scenario from '../components/scenario.js';
import FilterBar from '../components/filter_bar.js';
import styles from '../components/styles.js';
import { light_primary_color, dark_primary_color, gray5, gray6, dark_gray5, dark_gray6 } from '../components/styles.js';
import { getDefaultScenarios, setCurrentContent, getScenario, getIcon, getTags } from '../components/contentManager';
import Button from "../components/button";

const tagStates = {
  'Alle' : true,
  'Obere Gesichtshälfte': false,
  'Untere Gesichtshälfte': false,
  'Langes Szenario': false,
  'Kurzes Szenario': false
}



// return home page
const HomePage = ({ navigation }) => {

  //VARIABLES:
  //===============================================================================================================================================
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const activeIconColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;
  const inactiveIconColor = colorScheme === 'light' ? gray5 : dark_gray5;

  const [tag, setTag] = useState('All')
  const [keyArray, setKeyArray] = useState(Object.keys(getDefaultScenarios()))
  const [filteredKeyArray, setFilteredKeyArray] = useState(Object.keys(getDefaultScenarios()))
  const [completionStates, setCompletionStates] = useState({});
  const [language, setLanguage] = useState("german");

  // since this component is higher in hirarchy thatn the level component i use it to control the current content
  // All contets are stored with unique id's this hook stores the current starting pooint and passes it to the level component

  //FUNCTIONS:
  //===============================================================================================================================================
  setCurrentContent(1);

  // retrieve data
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('test');
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
      getData();
    }, [])
  );

  //async storage hook
  const { getItem, setItem } = useAsyncStorage('@completions');

  //@author: Tim Suchan
  //Fetches the completions object from async storage
  const fetchCompletionStates = async () => {
    try {
      const item = await getItem();
      setCompletionStates(JSON.parse(item));
    }
    catch {
    }
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
  //triggers fetching of exercise completion states on render
  useEffect(() => {
    fetchCompletionStates();
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
    console.log('here' + JSON.stringify(tagStates));
    if (!tagStates["Alle"]){
      console.log('in false')
    return (tagStates[getTags(scenarioKey)[0]] === true && tagStates[getTags(scenarioKey)[1]] === true);
    }
    else{
      console.log('in true')
      return true;
    }
  }

  return (
    <View style={[{ flex: 1 }, containerColor]}>
      <NavBar page_title={language == "german" ? "Übersicht" : "Overview"} navigation={navigation} />
      <FilterBar></FilterBar>

      <View style={[styles.filter_bar, containerColor]}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {Object.keys(tagStates).map(tag => (

            <View key={tag} style={tagStates[tag] ? styles.filterActive : styles.filterInactive}>
              <TouchableOpacity style={[{ flexDirection: 'row' }, { alignItems: 'center' }]} onPress={() => setTagFilter(tag)}>
                {/* <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' /> */}
                <Text style={[{ fontSize: 12 }, { fontWeight: 'bold' }, { color: 'white' }]}>{tag}</Text>
              </TouchableOpacity>

            </View>
          ))}
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, containerColor]}>
          <View style={[{ padding: 16 }, { flexDirection: 'row' }]}>
            <View style={[{ width: 128 }, { height: 128 }, { backgroundColor: colorScheme === 'light' ? gray6 : dark_gray6 }, { borderRadius: 16 }]}></View>
            <View style={[{ marginLeft: 16 }, { justifyContent: 'space-between' }]}>
              <View>
                <Text style={[{ fontSize: 24 }, textColor]}>{language == "german" ? "[Szenario]" : "[Scenario]"}</Text>
                <Text style={[{ fontSize: 16 }, textColor]}>{language == "german" ? "[Übung]" : "[Exercise]"}</Text>
              </View>
              <Button label={language == "german" ? "Fortsetzen" : "Continue"} />
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