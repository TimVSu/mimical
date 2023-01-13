//@author: Tim Suchan
import { useEffect, useState, useCallback } from 'react';
import { View, TouchableOpacity, Platform, UIManager, Text, ScrollView, useColorScheme } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Task from '../components/task.js'
import { getAudio } from '../components/contentManager';

import { incrementCurrentContent, getCurrentSequence, getText, getCurrentContent, getHighlightedText, getCurrentScenario } from '../components/contentManager';
import styles from '../components/styles.js';
import { Audio } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';
import Button from '../components/button.js';
import { light_primary_color, dark_primary_color, gray5, dark_gray5 } from '../components/styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleChevronLeft, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

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
  const [currentAudio, setCurrentAudio] = useState(getAudio());
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
  //only used if Task is used instead of alternative Task 
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
  //moves the task out of the screen
  function removeTask() {
    offset.value = withTiming(hp('110%'), { duration: 150 });
    setTimeout(toggleTask, 150);
    //animationTimer;
    //clearTimeout(animationTimer)

  }

  //@Author: Tim Suchan
  //starts next level or goes back to menu if the scenario is over
  const nextLevel = () => {
    let currentSequence = getCurrentSequence();
    let contentContent = getCurrentContent();
    if (contentContent < currentSequence.length) {
      incrementCurrentContent();
      setCurrentText(getText());
      setCurrentHighlightedText(getHighlightedText());
      setCurrentAudio(getAudio());
    }
    else {
      navigation.navigate("Menu");

    }
  }
  //==============================================================================================================================================

  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    console.log(getAudio())
    // const { sound } = await Audio.Sound.createAsync( require("../assets/Uebung1_Der_erste_Schnee.wav")
    const { sound } = await Audio.Sound.createAsync( getAudio() 
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  async function stopSound() {
    await sound.unloadAsync();
  }

  useEffect(() => {
    setCurrentText(getText());
    setCurrentHighlightedText(getHighlightedText());
    setCurrentAudio(getAudio())
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


  const colorScheme = useColorScheme();
  const containerColor = colorScheme === "light" ? styles.light_container : styles.dark_container;
  const textColor = colorScheme === "light" ? styles.light_text : styles.dark_text;
  const borderColor = colorScheme === "light" ? gray5 : dark_gray5;

  return (

    <View style={[{ flex: 1 }, containerColor]}>

      {/* <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
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
      } */}

      <View style={[{ flexDirection: 'row' }, { justifyContent: 'space-between' }, { alignItems: 'center' }, { padding: 16 }, { borderBottomWidth: 1 }, { borderColor: borderColor }, { marginTop: 64 }]}>
        <TouchableOpacity onPress={navigation.goBack}>
          <FontAwesomeIcon icon={faCircleChevronLeft} size={32} color={colorScheme === "light" ? light_primary_color : dark_primary_color} />
        </TouchableOpacity>
        <Text style={[{ fontSize: 40 }, { fontWeight: 'bold' }, textColor]}>{getCurrentScenario()}</Text>
        <TouchableOpacity onPress={createInfo}>
          <FontAwesomeIcon icon={faCircleInfo} size={32} color={colorScheme === "light" ? light_primary_color : dark_primary_color} />
        </TouchableOpacity>
      </View>

      {/* <View style={[{ flex: 1 }, { alignItems: 'center' }]}> */}
      {/* <View style={{ marginTop: hp('15%'), alignContent: 'center', alignItems: 'center', zIndex: 0, elevation: 0 }}>
        <Heading size="2xl">LEVEL HEADING</Heading>
      </View> */}



      <ScrollView
        // style={{ marginBottom: hp('15%'), marginTop: hp('5%') }}
        // contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', marginRight: '5%', marginLeft: '5%' }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[{ borderWidth: 0 }, { borderColor: light_primary_color }]}>
          <Text style={[{ fontSize: 32 }, textColor, { padding: 16 }]}>{currentText}</Text>
          <Text style={[{ borderWidth: 0 }, { fontSize: 32 }, { fontWeight: 'bold' }, { color: colorScheme === "light" ? light_primary_color : dark_primary_color }, { padding: 16 }]}>{currentHighlightedText} </Text>
        </View>
      </ScrollView>

      {/* <Text style={[{ borderWidth: 0 }, { fontSize: 32 }, { fontWeight: 'bold' }, { color: colorScheme === "light" ? light_primary_color : dark_primary_color }, { padding: 16 }]}>{currentHighlightedText} </Text> */}

      {/* <TouchableOpacity style={styles.createTaskButton} onPress={() => {navigation.navigate("AlternativeTask")}}>
        <Text style={{ color: 'white', justifyContent: 'center', fontSize: 24 }}>Üben</Text>
      </TouchableOpacity> */}

      <View style={[{ paddingTop: 8 }, { borderTopWidth: 1 }, { borderColor: borderColor }, { marginBottom: 32 }, { alignItems: 'center' }]}>
        <Button label="Übung starten" navigation={navigation} target={"AlternativeTask"} />
      </View>
      {/* </View> */}

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