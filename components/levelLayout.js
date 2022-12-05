//@author: Tim Suchan
import { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, UIManager, Text, ScrollView}  from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons'; 
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import Task from './task.js'
import { Heading, Modal } from 'native-base';
import Info from './info.js'
import {getAllContents, incrementCurrentContent, getCurrentSequence, getContent, get, getCurrentContent} from './levelContents'

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  
//@author: Tim Suchan
const LevelLayout = ({navigation,nextLevelFunction}) => {

  // VARIABLES:
  //=============================================================================================================================================
  //used for the anomation off the floatUp effect when a task is called
  const [currentContent, setCurrentContent] = useState(getContent());
  const offset = useSharedValue(hp('100%'));

  //used for the exand anoimation of the info button
  const infoWidth = useSharedValue(0);
  const infoHeight = useSharedValue(0);

  // used for the info button/ to decide wether the infocomponent is expanded or not
  const [infoExpanded, setInfoExpanded] = useState(false)

  // used to create and delete task when needed
  const [taskCreated, setTaskCreated] = useState(false);

  //=============================================================================================================================================

  // FUNCTIONS:
  //=============================================================================================================================================
  //returns animatedStyle for the floatUp effect
  //@author: Tim Suchan
  const floatUpStyle = useAnimatedStyle(() => {
    return{
      top: offset.value
    }
  });

  // @author: Tim Suchan
  // returns animatedStyle for info expand animation
  const expandInfoStyle = useAnimatedStyle(() => {
    return{
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

    setTaskCreated(true);
   // offset.value = withSpring(hp('10%'), { damping: 15, stiffness: 300 });
    offset.value = withTiming(hp('10%'),{duration: 150});
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
    setTimeout(toggleTask,150);
    //animationTimer;
    //clearTimeout(animationTimer)
    
  }
  const nextLevel = () => {
    let currentSequence = getCurrentSequence();
    let contentIndex = getCurrentContent();
    if (contentIndex < currentSequence.length){
    incrementCurrentContent();
    setCurrentContent(getContent());
    removeTask();
    }
    else{
      navigation.navigate("Menu");

    }
  }
  //==============================================================================================================================================

    return(

        <View style={styles.container}>

          <TouchableOpacity onPress={navigation.goBack} style={styles.buttonLeft}>
          <AntDesign name="left" size={wp('8%')} color="black" />
          </TouchableOpacity>       
       {infoExpanded ? 
        <Animated.View style={[expandInfoStyle, {top: hp('5%'), left: wp('45%')}]}>
          <Info closeFunction={removeInfo} infoText='hier könnte ihre info stehen'>
          </Info>
        </Animated.View>:          
        <TouchableOpacity style={styles.buttonRight} onPress={createInfo}>
            <AntDesign name="infocirlceo" size={24} color="black" />
        </TouchableOpacity>
          }
          <View style={{marginTop: hp('15%'), alignContent: 'center', alignItems: 'center', zIndex: 0, elevation: 0}}>
            <Heading size="2xl">LEVEL HEADING</Heading>    
          </View>
            <ScrollView style={{marginBottom: hp('15%'), marginTop: hp('5%')}}
            contentContainerStyle={{justifyContent: 'center', alignItems: 'center', marginRight: '5%', marginLeft: '5%'}}>
            <Heading size="2xl">{currentContent}</Heading>    
            </ScrollView>
            
          <TouchableOpacity style={styles.taskButton} onPress={() => {createTask()}}>
         <Text style={{color: 'white', justifyContent: 'center', fontSize:24}}>Üben</Text>
          </TouchableOpacity>
         
          

          {taskCreated &&
      <Animated.View style={[floatUpStyle, {zIndex: 100, elevation: 100, position: 'absolute'}]}>
      <Task taskDescription='kneifen sie ihre augen zusammen' downFunction={removeTask} nextLevelFunction={nextLevel}>
      </Task>
      </Animated.View>
 }
      </View>
    );
}


const styles = StyleSheet.create({ 
    container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#eaeaea',
   
  },
  buttonRight: {
    position: 'absolute',
    top: hp('5%'),
    right: wp('5%'),
    flexDirection: 'row',
    color: 'black',
  },
  buttonLeft: {
    position: 'absolute',
    top: hp('5%'),
    left: wp('5%'),
    flexDirection: 'row',
    color: 'black',
  },
  taskButton: {
    position: 'absolute',
    bottom: hp('5%'),
    left: wp('35%'),
    width: wp('30%'),
    height: hp('8%'),
    flexDirection: 'row',
    color: 'black',
    backgroundColor: '#59C1BD',
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    zIndex: 0,
 
  },
}); 

export default LevelLayout;