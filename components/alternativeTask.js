// authors: Tim Suchan, Maxim Torgovitski
import CameraScreen from "./camera.js";
import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, Text, LayoutAnimation, UIManager, Pressable, Modal, Alert, useColorScheme, TouchableOpacity, } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";
import styles from "./styles";
import CustomButton from "./customButton.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCurrentContent, getCurrentSequence, getTaskDescription, incrementCurrentContent, getCurrentScenario, } from "./contentManager.js";
import axios from "axios";
import { useFocusEffect } from '@react-navigation/native';

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

let trainDuration = 10;
let pauseDuration = 10;

// import colors
import { light_primary_color, dark_primary_color, light_background_color, dark_background_color, green, } from "./styles";

// import icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft, faChevronRight, faPause, faPlay, } from "@fortawesome/free-solid-svg-icons";

const AlternativeTask = ({ navigation, route, children, downFunction }) => {

  const scenarioName = getCurrentScenario();

  // light/dark mode
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === "light" ? light_background_color : dark_background_color;
  const buttonColor = colorScheme === "light" ? light_primary_color : dark_primary_color;
  const textColor = colorScheme === "light" ? styles.light_text : styles.dark_text;

  // VARIABLES:
  //==============================================================================================================================================
  const [currentTime, setCurrentTime] = useState(trainDuration);
  const [taskRunning, setTaskRunning] = useState(false);
  const [onPause, setOnPause] = useState(false);
  const [trainState, setTrainState] = useState(false);
  const [relaxState, setRelaxState] = useState(false);
  const [informState, setInformState] = useState(false);
  const [repCounter, setRepCounter] = useState(0);
  const [removed, setRemoved] = useState(false);
  const repititions = 3;
  const [showDescription, setShowDescription] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const thisContent = getCurrentSequence()[getCurrentContent() - 1];
  const ifCompleted = { [thisContent]: "completed" };
  const [PatientID, setPatientID] = useState("");
  const [ContentProgress, setContentProgress] = useState("");
  const [completions, setCompletions] = useState({});
  const [fontSize, setFontSize] = useState(17);

  // FUNCTIONS:
  //==============================================================================================================================================

  //@author: tim suchan
  //starts/continues one train/pause timer repitition, called when play button is pressd or when
  const play = () => {
    if (!onPause) {
      setCurrentTime(trainDuration);
      setTaskRunning(true);
      setOnPause(false);
      setInformState(false);
    } else {
      setTaskRunning(true);
      setOnPause(false);
    }
  };

  //@author: Tim Suchan
  //starts the next level
  const nextLevelFunction = () => {
    let currentSequence = getCurrentSequence();
    let contentContent = getCurrentContent();
    if (contentContent < currentSequence.length) {
      incrementCurrentContent();
      navigation.navigate("Level");
    } else {
      navigation.navigate("Menu");
    }
  };

  //@author: Tim Suchan
  //saves the current level as completed
  const saveAsCompleted = async (completedContent) => {
    try {
      await AsyncStorage.mergeItem("@completions", JSON.stringify(completedContent));
      console.log("saved completed succesfull");
    } catch (error) {
      console.log("cant save data to async storage");
    }
  };

  //@author: Tim Suchan
  //Fetches the completions object from async storage
  // in this case this happens to test if the urrent content has already been completed and not store it twice
  const fetchCompletions = async () => {
    try {
      const item = await AsyncStorage.getItem("@completions");
      if (item) {
        setCompletions(JSON.parse(item));
      }
    } catch { }
  }

  //@author: Tim Suchan
  //triggers fetching of exercise completion states on render
  useEffect(() => {
    fetchCompletions();
  }, []);

  //Upload Progress to Database
  const uploadProgress = async () => {
    const Data = {
      ContentProgress,
      PatientID,
    };
    await axios({
      method: "post",
      data: {
        ContentProgress: ContentProgress,
        PatientID: PatientID,
      },
      // Must be changed depending on device for testing
      url: "http://192.168.2.195:4501/api/progress",
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //Get Patient ID from async storage
  const getPatientID = async () => {
    try {
      const PatientID = await AsyncStorage.getItem("ID");
      if (PatientID !== null) {
        setPatientID(PatientID);
        //console.log(PatientID);
      }
    } catch (error) {
      console.log("Can't retrieve data from async storage");
    }
    //console.log("Done.");
  };

  //@author: Tim Suchan
  //saves the current level as last played so that the user can start playing from where he stopped in the menu/home screen
  const saveAsLast = async (lastContent) => {
    try {
      await AsyncStorage.setItem("lastTask", lastContent.toString());
      console.log("saved completed succesfull" + " : " + "last" + lastContent);
    } catch (error) {
      console.log("cant save data to async storage");
    }
  };

  //@author: Tim Suchan
  //Removes, increments and replaces the currentTime, this is done so that the animation is triggered on changes
  const removeIncrementReplace = () => {
    setRemoved(true);
    LayoutAnimation.configureNext({
      duration: 300,
      create: { type: "spring", property: "scaleY", springDamping: 0.8 },
    });
    setCurrentTime((currentTime) => currentTime - 1);
    setRemoved(false);
  };

  //@author: Tim Suchan
  // pauses a running game timer sequence
  const pause = () => {
    setTaskRunning(false);
    setOnPause(true);
  };

  //Call saved patient ID
  useEffect(() => {
    getPatientID();
  }, []);

  //Call last completed content
  useEffect(() => {
    setContentProgress(thisContent);
    console.log(ContentProgress + " completed now");
  }, []);

  //@author: Tim Suchan
  // The code for the Game Timer
  // Using useEffect as the timer changing is a side effect in this case
  useEffect(() => {
    let interval = null;
    if (taskRunning) {
      interval = setInterval(() => {
        removeIncrementReplace();
      }, 1000);
    } else if (!taskRunning) {
      clearInterval(interval);
    }
    //the system goes into relax state
    if (currentTime == 0 && taskRunning && !relaxState) {
      setCurrentTime(pauseDuration);
      setRelaxState(true);
    }
    //the system goes back to train state/ stops the task if the counter has reached 3
    if (currentTime == 0 && taskRunning && relaxState) {
      setRelaxState(false);
      if (repCounter == repititions - 1) {
        setRepCounter(0);
        setTaskRunning(false);
        setInformState(false);
        clearInterval(interval);
      } else {
        setRepCounter((repCounter) => repCounter + 1);
        play();
      }
    }
    if (currentTime == 0 && repCounter == repititions - 1) {
      setTaskRunning(false);
      setCurrentTime(0);
      //making sure not to double store completed levels in async storage
      if (!Object.keys(completions).includes(getCurrentSequence()[getCurrentContent()])) {
        saveAsCompleted(ifCompleted);
      }

      // setContentProgress(thisContent);
      // uploadProgress();
      saveAsLast(getCurrentSequence()[getCurrentContent()]);
      // nextLevelFunction();
      setModalVisible(true);
    }
    if (currentTime == 3 && taskRunning && relaxState) {
      setInformState(true);
    }
    return () => clearInterval(interval);
  }, [taskRunning, currentTime, relaxState, informState]);

  // retrieve font size data
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('settings');
      const value = JSON.parse(jsonValue);
      if (value !== null) {
        setFontSize(value.fontSize);
      }
    } catch (error) {
      // error retrieving data
    }
  }

  // get data on render
  useEffect(() => {
    getData();
  }, []);

  // get data on render
  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  return (
    <View style={[{ flex: 1 }, { backgroundColor: containerColor }]}>
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { Alert.alert("Modal has been closed."); setModalVisible(!modalVisible); }}>
        <View style={tempStyles.centeredView}>
          <View style={[tempStyles.modalView, {}]}>
            <Text style={tempStyles.modalText}>
              {" "}
              "Gut gemacht! Level abschlossen!"{" "}
            </Text>

            <View style={tempStyles.buttonView}>
              <CustomButton
                text="Zurück "
                onPress={() => {
                  navigation.navigate("Menu");
                  uploadProgress();
                }}
                color="red"
              />
              <CustomButton
                text="Weiter"
                onPress={() => {
                  nextLevelFunction();
                  uploadProgress();
                }}
                color="skyblue"
              />
            </View>
          </View>
        </View>
      </Modal>

      <View style={{ flex: 1, backgroundColor: containerColor }} />
      <View id="camContainer" style={{ flex: 6, backgroundColor: containerColor, alignContent: "center", alignItems: "center", justifyContent: "center", }}>
        <CameraScreen size={hp("70%")}>
          {informState
            ? !removed && (
              <View style={styles.informView}>
                <Text style={styles.informText}>
                  {getTaskDescription() + "in"}
                </Text>
                <Text style={styles.informTime}>{currentTime}</Text>
              </View>
            )
            : !removed && <Text style={styles.time}>{currentTime}</Text>}
        </CameraScreen>
      </View>
      <View style={{ flex: 1.5, paddingLeft: 10, paddingRight: 10, alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: containerColor, }}>
        <Text style={[{ fontSize: fontSize }, textColor]}>
          {relaxState ? "Entspannen sie ihr Gesicht" : getTaskDescription()}
        </Text>
      </View>

      <View style={[{ flexDirection: "row" }, { justifyContent: "center" }, { paddingBottom: 32 },]}>
        <TouchableOpacity style={[{ backgroundColor: buttonColor }, { padding: 16 }, { margin: 8 }, { borderRadius: 16 }, { flexDirection: "row" }, { alignItems: "center" },]} onPress={() => { navigation.goBack(); }}>
          <FontAwesomeIcon style={{ marginRight: 8 }} icon={faChevronLeft} color="white" />
          <Text style={[styles.label, { color: "white" }]}>Zurück</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[{ backgroundColor: buttonColor }, { padding: 16 }, { margin: 8 }, { borderRadius: 16 }, { flexDirection: "row" }, { alignItems: "center" },]}
          onPress={() => {
            console.log(
              getCurrentSequence()[getCurrentContent()] +
              " : " +
              getCurrentContent()
            );
          }}
        >
          <FontAwesomeIcon style={{ marginRight: 8 }} icon={faPause} color="white" onPress={()=> pause()}/>
          <Text style={[styles.label, { color: "white" }]}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[{ backgroundColor: buttonColor }, { padding: 16 }, { margin: 8 }, { borderRadius: 16 }, { flexDirection: "row" }, { alignItems: "center" },]} onPress={() => play()}>
          <Text style={[styles.label, { color: "white" }]}>Spielen</Text>
          <FontAwesomeIcon style={{ marginLeft: 8 }} icon={faPlay} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AlternativeTask;

const tempStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  camView: {
    top: "10%",
    marginTop: "5%",
    marginBottom: "5%",
  },
  centeredView: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  modalView: {
    flex: 0.5,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 50,
      height: 100,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
  },
  buttonView: {
    paddingTop: 100,
    flex: 1,
    flexDirection: "row",
  },
});
