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

import * as FaceDetector from 'expo-face-detector';

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  
//author: Tim Suchan
const LevelLayout = ({navigation,}) => {

  // Variables:
  //=========================================================================================================
  //used for the anomation off the falldown effect when a task is called
  const offset = useSharedValue(-hp('80%'));

  // used for the info button/ to decide wether the infocomponent is expanded or not
  const [infoExpanded, setInfoExpanded] = useState(false)

  // used to create and delete task when needed
  const [taskCreated, setTaskCreated] = useState(false);

  //==========================================================================================================

  //Functions:
  //==========================================================================================================
  //returns animatedStyle for the falldown effect
  //@author: Tim Suchan
  const fallDownStyle = useAnimatedStyle(() => {
    return{
      top: offset.value
    }
  });

  //@Author: Tim Suchan
  // creates the respective task for the level
  const createTask = (taskDescription) => {

    offset.value = -hp('100%');
    setTaskCreated(true);
    offset.value = withSpring(hp('10%')
    );

  } 

  //@author: Tim Suchan
  // currentl just moves task out of screen for testing but will later start nthe next level
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
       
       {camActivated ? 

        <View style={[styles.camContainer, {height: wp('50%') * 1.33333,}]}>
        <Camera style={styles.camera} type={CameraType.front} ratio={ratio} 
            onFacesDetected={handleFacesDetected}
            faceDetectorSettings={{
               mode: FaceDetector.FaceDetectorMode.fast,
               detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
               runClassifications: FaceDetector.FaceDetectorClassifications.none,
               minDetectionInterval: 0,
               tracking: true,
    }}>
            <TouchableOpacity style={{top: wp('4%'), left: '80%'}} onPress={toggleCam} >
                <CloseIcon size={wp('6%')}/>
            </TouchableOpacity>
            {faceDetected && 
            <>
            <CircleIcon size={2} style={{top: landmarks[0]["y"]-1, left: landmarks[0]["x"]-1}}/>
            <CircleIcon size={2} style={{top: landmarks[4]["y"]-1, left: landmarks[4]["x"]-1}}/>

            </>
            }            

        </Camera>
          
        </View>:
          
        <TouchableOpacity style={styles.buttonRight} onPress={toggleCam}>
            <Feather name='camera' size={wp('8%')} color='black'/>
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
  camContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    width: wp('50%'),
    borderRadius: 25,
    overflow: 'hidden',
  },
  camera: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '100%',
    borderBottomLeftRadius: 20,
    overflow: 'hidden',
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
  invisiCam: {
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    backgroundColor: 'black',
  },
}); 

export default LevelLayout;