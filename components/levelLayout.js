//@author: Tim Suchan
import { Camera, CameraType, getSupportedRatiosAsync, WhiteBalance } from 'expo-camera';
import { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, LayoutAnimation, Platform, UIManager, Text}  from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons'; 
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring,
} from 'react-native-reanimated';
import Task from './task.js'
import { Feather } from '@expo/vector-icons';
import { CloseIcon, CircleIcon } from 'native-base';
import Info from './info.js'
import { Timer } from 'react-native-stopwatch-timer'

import * as FaceDetector from 'expo-face-detector';

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  
//author: Tim Suchan
const LevelLayout = ({navigation,}) => {

  // !!!the code used for the falldwon animation is not currently used as we scraped this part of the app. however it will likely
  // be used later which is why it isnt deleted yet!!!

  // variables:
  //=========================================================================================================
  //used for the anomation off the floatUp effect when a task is called
  const offset = useSharedValue(hp('100%'));

  //used for the exand anoimation of the info button
  const infoWidth = useSharedValue(0);
  const infoHeight = useSharedValue(0);

  // used for the info button/ to decide wether the infocomponent is expanded or not
  const [infoExpanded, setInfoExpanded] = useState(false)

  // used to create and delete task when needed
  const [taskCreated, setTaskCreated] = useState(false);

  //==========================================================================================================

  // functions:
  //==========================================================================================================
  //returns animatedStyle for the floatUp effect
  //@author: Tim Suchan
  const floatUpStyle = useAnimatedStyle(() => {
    return{
      top: offset.value
    }
  });

  // @author: TIm Suchan
  // returns animatedStyle for info expand animation
  const expandInfoStyle = useAnimatedStyle(() => {
    return{
      height: infoHeight.value,
      width: infoWidth.value,
    }
  })

  // @author: Tim Suchan
  //creates infoExpand animation
  const createInfo = () => {
    setInfoExpanded(true);
    infoWidth.value = withTiming(wp('50%'), {
      duration: 500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
    infoHeight.value = withTiming(wp('50%') * 1.3333, {
      duration: 500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }
    // @author: Tim Suchan
  //creates infoRemove animation
  const removeInfo = () => {
    infoWidth.value = withTiming(0, {
      duration: 500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
    infoHeight.value = withTiming(0, {
      duration: 500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
    setInfoExpanded(false);
  }

  //@Author: Tim Suchan
  // creates the respective task for the level
  const createTask = (taskDescription) => {

    setTaskCreated(true);
   // offset.value = withSpring(hp('10%'), { damping: 15, stiffness: 300 });
    offset.value = withTiming(hp('10%'),{duration: 150});

    

  } 

  //@author: Tim Suchan
  //toggles info componenton and off
  const toggleInfo = () => {
    infoExpanded ? setInfoExpanded(false) : setInfoExpanded(true);
  }

  //@author: Tim Suchan
  // currently just moves task out of screen for testing but will later start nthe next level
  const nextLevel = () => {
    offset.value = withTiming(hp('110%'), { duration: 150});
  }
  //==========================================================================================================

    return(

      
        <View style={styles.container}>

          <TouchableOpacity onPress={navigation.goBack} style={styles.buttonLeft}>
          <AntDesign name="left" size={wp('8%')} color="black" />
          </TouchableOpacity>
       
       {infoExpanded ? 

        <Animated.View style={[expandInfoStyle, {top: wp('5%'), left: wp('45%')}]}>
          <Info infoText='hier könnte ihre info stehen'>
            <TouchableOpacity>
              <CloseIcon size={24} onPress={removeInfo}></CloseIcon>
            </TouchableOpacity>
          </Info>
        </Animated.View>:
          
        <TouchableOpacity style={styles.buttonRight} onPress={createInfo}>
            <AntDesign name="infocirlceo" size={24} color="black" />
        </TouchableOpacity>
          }

          <TouchableOpacity style={styles.taskButton} onPress={() => {createTask('asjfoiajf')}}>
            <Text style={{color: 'white', justifyContent: 'center', fontSize:24}} >Üben</Text>
          </TouchableOpacity>

          {taskCreated &&
      <Animated.View style={floatUpStyle}>
      <Task taskDescription='kneifen sie ihre augen zusammen' down={nextLevel}>
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