//@author: Tim Suchan
import CameraScreen from './camera.js'
import { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, LayoutAnimation, Platform, UIManager, Text}  from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Feather } from '@expo/vector-icons';
import { Heading } from 'native-base';

import * as FaceDetector from 'expo-face-detector';



const Task = ({navigation, taskDescription, children}) => {

    return(   
        <View style={styles.container}>
            <CameraScreen size={wp('100%')} >
            </CameraScreen>
            <Heading style={styles.description} size='lg'>{taskDescription}</Heading>
            {children}
         </View>
 );
}


const styles = StyleSheet.create({ 
    container: {
    width: wp('100%'),
    height: hp('100%'),
    overFlow: 'hidden',
    backgroundColor: '#0E5E6F',
    alignItems: 'center'
  },
  description: {
    color: 'white',
    margin: 20,
  }

}); 

export default Task;