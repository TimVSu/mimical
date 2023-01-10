//@author: Tim Suchan
import CameraScreen from './camera.js';
import { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Button, LayoutAnimation, UIManager, Pressable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Heading } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCurrentContent, getCurrentSequence } from './contentManager.js';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Task = ({ nextLevelFunction, taskDescription, children, downFunction, trainDuration, pauseDuration }) => {

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

  // FUNCTIONS:
  //==============================================================================================================================================

  //@author: tim suchan
  //starts/continues one train/pause timer repitition, called when play button is pressd or when  
  const play = () => {
    if (!onPause) {
      setCurrentTime(trainDuration)
      setTaskRunning(true);
      setOnPause(false);
      setInformState(false);
    }
    else {
      setTaskRunning(true);
      setOnPause(false);
    }
  }

  const saveAsCompleted = async (completedContent) => {

        try{
          await AsyncStorage.setItem('state' + completedContent.toString(), 'completed');
          console.log('saved completed succesfull' + ' : ' + 'state' + completedContent)
        }
        catch(error){
          console.log('cant save data to async storage');
        }
  }

  const removeIncrementReplace = () => {
    setRemoved(true);
    LayoutAnimation.configureNext({
      duration: 300,
      create: { type: "spring", property: "scaleY", springDamping: 0.8 },
    });
    setCurrentTime(currentTime => currentTime - 1);
    setRemoved(false);

  }

  //@author: TIm Suchan
  // pauses a running game timer sequence
  const pause = () => {
    setTaskRunning(false);
    setOnPause(true);
  }

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
    if (currentTime == 0 && taskRunning && !relaxState) {
      setCurrentTime(pauseDuration);
      setRelaxState(true);
    }
    if (currentTime == 0 && taskRunning && relaxState) {
      setRelaxState(false);
      if (repCounter == repititions - 1) {
        setRepCounter(0);
        setTaskRunning(false);
        setInformState(false);
        clearInterval(interval);
      }
      else {
        setRepCounter(repCounter => repCounter + 1);
        play();
      }
    }
    if (currentTime == 0 && repCounter == repititions - 1) {
      saveAsCompleted(getCurrentSequence[getCurrentContent()]);
      nextLevelFunction();
    }
    if (currentTime == 3 && taskRunning && relaxState) {
      setInformState(true);
    }
    return () => clearInterval(interval);
  }, [taskRunning, currentTime, relaxState, informState]);



  return (
    <View style={styles.taskContainer}>
      <CameraScreen size={wp('100%')}>
        {informState ?
          !removed &&
          <View style={styles.informView}>
            <Text style={styles.informText}>{taskDescription + 'in'}</Text>
            <Text style={styles.informTime}>{currentTime}</Text>
          </View> :
          !removed &&
          <Text style={styles.time}>{currentTime}</Text>
        }
      </CameraScreen>
      <Heading style={styles.taskDescription} size='lg'>{taskDescription}</Heading>
      {children}
      <View style={styles.horizontal}>
        <TouchableOpacity style={styles.taskButton} onPress={downFunction}>
          <AntDesign name="downcircleo" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskButton} activeOpacity={0.3} onPress={() => {console.log(getCurrentSequence[getCurrentContent()])}}>
          <AntDesign name="pausecircleo" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskButton} onPress={() => play()}>
          <AntDesign name="playcircleo" size={50} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Task;