// authors: Tim Suchan, Maxim Torgovitski

// import react native
import { useColorScheme, View } from "react-native";
import React, { useCallback, useEffect, useState } from 'react';

// import components
import Button from "../components/button";
import styles from "../components/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Logo from "../components/logo";

// import icons
import {
  faChartSimple,
  faGear,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import Exercise from "../components/exercise";
import {
  getIcon,
  getScenario,
  getScenarioFromTask,
} from "../components/contentManager";

// return home page
const Home = ({ navigation }) => {

  //VARIABLES:
  //===============================================================================================================================================
  const [nextTask, setNextTask] = useState(1);
  const [completions, setCompletions] = useState({});
  const [fetchCompleted, setFetchCompleted] = useState(false);
  const [language, setLanguage] = useState("german");

  //FUNCTIONS:
  //===============================================================================================================================================

  //@author: Tim Suchan
  //fetches the contentID of the last completed task from async storage
  //adds 1 and saves to nextTask
  const fetchLastTask = async () => {
    try {
      const item = await getItem();
      if (item) {
        setNextTask(parseInt(item) + 1);
        setFetchCompleted(true);
      }
    } catch { }
  };

  //@author: Tim Suchan
  //fetches the completions object from async storage
  //used to determine wether nextTask has been completed already and render accordingly
  const fetchCompletions = async () => {
    try {
      const item = await AsyncStorage.getItem("@completions");
      if (item) {
        setCompletions(JSON.parse(item));
      }

    } catch {
    }
  }

  //@author: Tim Suchan
  //fetches and updates data and view on render
  useEffect(() => {
    fetchLastTask();
    fetchCompletions();
  }, []);

  //@author: Tim Suchan
  //fetches and updates data and view on focus
  useFocusEffect(
    useCallback(() => {
      fetchLastTask();
      fetchCompletions();
    }, [])
  );

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

  // light/dark mode
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === "light" ? styles.light_container : styles.dark_container;
  const squareColor = colorScheme === "light" ? styles.light_square : styles.dark_square;
  const textColor = colorScheme === "light" ? styles.light_text : styles.dark_text;

  return (
    <View style={[{ flex: 1 }, containerColor]}>
      <View
        style={[
          { flex: 1 },
          containerColor,
          { justifyContent: "center" },
          { alignItems: "center" },
        ]}
      >
        <Logo></Logo>
        {fetchCompleted && (
          <Exercise
            level={
              getScenario(getScenarioFromTask(nextTask)).indexOf(nextTask) + 1
            }
            key={nextTask}
            icon={getIcon(getScenarioFromTask(nextTask))}
            navigation={navigation}
            unlocked={true}
            completed={Object.keys(completions).includes(nextTask.toString())}
            scenarioKey={getScenarioFromTask(nextTask)}
            fromHomeScreen={true}
          ></Exercise>
        )}
        <View>
          {/* Uncomment to show login/signup screen */}
          {/* <Button label="Log in" navigation={navigation} target={"HomeLogin"} /> */}
          <Button
            icon={faHouse}
            label="Übersicht"
            navigation={navigation}
            target={"Menu"}
          />
          <Button
            icon={faChartSimple}
            label={language == "german" ? "Fortschritt" : "Progress"}
            navigation={navigation}
            target={"Progress"}
          />
          <Button
            icon={faGear}
            label="Einstellungen"
            navigation={navigation}
            target={"Settings"}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
