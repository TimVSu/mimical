//@author: Tim Suchan
import CameraScreen from './camera.js'
import { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity }  from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Heading } from 'native-base';
import { AntDesign } from '@expo/vector-icons'; 


const Task = ({navigation, taskDescription, children, downFunction, }) => {

  //!! Play and pause button will be sed to start/pause the exercise respective function will be written once i added the timer!!

    return(   
        <View style={styles.container}>
            <CameraScreen size={wp('100%')}>
            </CameraScreen>
            <Heading style={styles.description} size='lg'>{taskDescription}</Heading>
            {children}
            <View style={styles.horizontal}>
              <TouchableOpacity style={styles.button} onPress={down}>
                <AntDesign name="downcircleo" size={50} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <AntDesign name="pausecircleo" size={50} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <AntDesign name="playcircleo" size={50} color="white" />
              </TouchableOpacity>
            </View>

         </View>
 );
}


const styles = StyleSheet.create({ 
    container: {
    width: wp('100%'),
    height: hp('100%'),
    overFlow: 'hidden',
    backgroundColor: '#59C1BD',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    
  },
  description: {
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
  },
  horizontal: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,

  },
  button:{
    marginLeft: 20,
    marginRight: 20,
  }

}); 

export default Task;