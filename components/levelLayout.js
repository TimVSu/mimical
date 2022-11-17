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

import * as FaceDetector from 'expo-face-detector';

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  
//author: Tim Suchan
const LevelLayout = ({navigation,}) => {

  // variables:
  //=========================================================================================================
  //used for the anomation off the falldown effect when a task is called
  const offset = useSharedValue(-hp('80%'));

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
  //returns animatedStyle for the falldown effect
  //@author: Tim Suchan
  const fallDownStyle = useAnimatedStyle(() => {
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
  /*const createInfo = () => {
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
  }*/

  //@Author: Tim Suchan
  // creates the respective task for the level
  const createTask = (taskDescription) => {

    offset.value = -hp('100%');
    setTaskCreated(true);
    offset.value = withSpring(hp('10%')
    );

  } 

  //@author: Tim Suchan
  //toggles info componenton and off
  const toggleInfo = () => {
    infoExpanded ? setInfoExpanded(false) : setInfoExpanded(true);
  }

  //@author: Tim Suchan
  // currently just moves task out of screen for testing but will later start nthe next level
  const nextLevel = () => {
    offset.value = withSpring(-hp('80%'));
  }
  //==========================================================================================================

    return(

      
        <View style={styles.container}>
        {taskCreated &&
      <Animated.View style={fallDownStyle}>
      <Task taskDescription='kneifen sie ihre augen zusammen'>
        <TouchableOpacity style={{bottom: '5%', left: 0}} onPress={nextLevel}>
        <AntDesign name="rightsquareo" size={24} color="black" />
        </TouchableOpacity>
      </Task>
      </Animated.View>
 }

          <TouchableOpacity onPress={navigation.goBack} style={styles.buttonLeft}>
          <AntDesign name="left" size={wp('8%')} color="black" />
          </TouchableOpacity>
       
       {infoExpanded ? 

        <View style={[styles.camContainer, {height: wp('50%') * 1.33333, backgroundColor: 'yellow'}]}>
        </View>:
          
        <TouchableOpacity style={styles.buttonRight} onPress={toggleInfo}>
            <AntDesign name="infocirlceo" size={24} color="black" />
        </TouchableOpacity>
          }

          <TouchableOpacity style={styles.taskButton} onPress={() => {createTask('asjfoiajf')}}>
            <Text style={{color: 'white', justifyContent: 'center'}}>Üben</Text>
          </TouchableOpacity>

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
    left: wp('40%'),
    width: wp('20%'),
    height: hp('5%'),
    flexDirection: 'row',
    color: 'black',
    backgroundColor: '#59C1BD',
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'center',
  },
}); 

export default LevelLayout;