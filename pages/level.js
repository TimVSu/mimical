//@author: Tim Suchan
import { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, UIManager, Text, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import Task from '../components/task.js'
import { Heading, Modal } from 'native-base';
import Info from '../components/info.js';
import { getAllContents, incrementCurrentContent, getCurrentSequence, getText, getCurrentContent, getHighlightedText } from '../components/contentManager';
import styles from '../components/styles.js';
import { Audio } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

//@author: Tim Suchan
const LevelLayout = ({ navigation, nextLevelFunction }) => {
  //console.warn('at level: ' + getCurrentContent() + 'of scenario: ' + getCurrentSequence())

  // VARIABLES:
  //=============================================================================================================================================
  //used for the anomation off the floatUp effect when a task is called
  const [currentText, setCurrentText] = useState(getText());
  const [currentHighlightedText, setCurrentHighlightedText] = useState(getHighlightedText);
  const offset = useSharedValue(hp('100%'));

  //used for the exand anoimation of the info button
  const infoWidth = useSharedValue(0);
  const infoHeight = useSharedValue(0);

  // used for the info button/ to decide wether the infocomponent is expanded or not
  const [infoExpanded, setInfoExpanded] = useState(false);

  // used to create and delete task when needed
  const [taskCreated, setTaskCreated] = useState(false);

  //=============================================================================================================================================

  // FUNCTIONS:
  //==============================================================================================    return allContents[currentContent]["baseText"];===============================================
  //returns animatedStyle for the floatUp effect
  //@author: Tim Suchan
  const floatUpStyle = useAnimatedStyle(() => {
    return {
      top: offset.value,
    }
  });


  useFocusEffect(
    useCallback(() => {
      setCurrentText(getText());
      setCurrentHighlightedText(getHighlightedText());
    }, [currentText, currentHighlightedText])
  );

  // @author: Tim Suchan
  // returns animatedStyle for info expand animation
  const expandInfoStyle = useAnimatedStyle(() => {
    return {
      height: infoHeight.value,
    }
  })

  // @author: Tim Suchan
  //creates infoExpand animation
  const createInfo = () => {
    setInfoExpanded(true);
    //infoWidth.value = withTiming(wp('50%'), {
    //  duration: 150,
    //});
    infoHeight.value = withTiming(wp('50%') * 1.3333, {
      duration: 150,
    });
  }
  // @author: Tim Suchan
  //creates infoRemove animation
  const removeInfo = () => {
    //infoWidth.value = withTiming(0, {
    //  duration: 500,
    //  easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    //});
    infoHeight.value = withTiming(0, {
      duration: 150,
    });
    setInfoExpanded(false);
  }

  //@Author: Tim Suchan
  // creates the respective task for the level
  const createTask = () => {

    stopSound();
    setTaskCreated(true);
    // offset.value = withSpring(hp('10%'), { damping: 15, stiffness: 300 });
    offset.value = withTiming(hp('10%'), { duration: 150 });
  }

  const toggleTask = () => {
    taskCreated ? setTaskCreated(false) : setTaskCreated(true);
  }

  //@author: Tim Suchan
  //toggles info componenton and off
  const toggleInfo = () => {
    infoExpanded ? setInfoExpanded(false) : setInfoExpanded(true);
  }

  //@author: Tim Suchan
  // currently just moves task out of screen for testing but will later start nthe next level
  function removeTask() {
    offset.value = withTiming(hp('110%'), { duration: 150 });
    setTimeout(toggleTask, 150);
    //animationTimer;
    //clearTimeout(animationTimer)

  }
  const nextLevel = () => {
    let currentSequence = getCurrentSequence();
    let contentContent = getCurrentContent();
    if (contentContent < currentSequence.length) {
      incrementCurrentContent();
      setCurrentText(getText());
      setCurrentHighlightedText(getHighlightedText);
    }
    else {
      navigation.navigate("Menu");

    }
  }
  //==============================================================================================================================================

  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/LAKEY_INSPIRED_Better_Days.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  async function stopSound() {
    await sound.unloadAsync();
  }

  useEffect (() =>{
    setCurrentText(getText());
    setCurrentHighlightedText(getHighlightedText());
  },[]);


  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    playSound();
    }, [])


  

  return (

    <View style={styles.container}>

      <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
        <AntDesign name="left" size={wp('8%')} color="black" />
      </TouchableOpacity>

      {infoExpanded ?
        <Animated.View style={[expandInfoStyle, { top: hp('5%'), left: wp('45%') }]}>
          <Info closeFunction={removeInfo} infoText='hier könnte ihre info stehen'>
          </Info>
        </Animated.View> :
        <TouchableOpacity style={styles.buttonRight} onPress={createInfo}>
          <AntDesign name="infocirlceo" size={24} color="black" />
        </TouchableOpacity>
      }

      <View style={{ marginTop: hp('15%'), alignContent: 'center', alignItems: 'center', zIndex: 0, elevation: 0 }}>
        <Heading size="2xl">LEVEL HEADING</Heading>
      </View>
      <ScrollView style={{ marginBottom: hp('15%'), marginTop: hp('5%') }}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', marginRight: '5%', marginLeft: '5%' }}>
        <Text style={styles.levelText}>{currentText}</Text>
        <Text style={styles.levelHighlightedText}>{currentHighlightedText} </Text>
      </ScrollView>

      <TouchableOpacity style={styles.createTaskButton} onPress={() => {navigation.navigate("AlternativeTask")}}>
        <Text style={{ color: 'white', justifyContent: 'center', fontSize: 24 }}>Üben</Text>
      </TouchableOpacity>



      {taskCreated &&
        <Animated.View style={[floatUpStyle, { zIndex: 100, elevation: 100, position: 'absolute' }]}>
          <Task taskDescription='kneifen sie ihre augen zusammen' downFunction={removeTask}
            nextLevelFunction={nextLevel} trainDuration={3} pauseDuration={3}>
          </Task>
        </Animated.View>
      }
    </View>
  );
}

export default LevelLayout;