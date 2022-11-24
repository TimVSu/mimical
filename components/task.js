//@author: Tim Suchan
import CameraScreen from './camera.js'
import { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text }  from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Heading } from 'native-base';
import { AntDesign } from '@expo/vector-icons'; 



const Task = ({navigation, taskDescription, children, downFunction, }) => {

  //!! Play and pause button will be sed to start/pause the exercise respective function will be written once i added the timer!!
  // VARIABLES:
  //=============================================================================================================================================

  const [currentTime, setCurrentTime] = useState(10);
  const [taskRunning, setTaskRunning] = useState(false);
  const [onPause, setOnPause] = useState(false);
  const [trainState, setTrainState] = useState(false);
  const [relaxState, setRelaxState] = useState(false);
 
  const [showDescription, setShowDescription] = useState(true);


  // FUNCTIONS:
  //=============================================================================================================================================
  const play = () => {
    if (!onPause){
    setCurrentTime(20)
    setTaskRunning(true);
    setOnPause(false);
    }
    else{
      setTaskRunning(true);
      setOnPause(false);
    }
  }


  const relax = () => {
    setCurrentTime(10);
  }

  const incrementDown = () =>{
    setCurrentTime(second);
    second--;
  }

  const pause = () =>{
    setTaskRunning(false);
    setOnPause(true);
  }

  useEffect(() => {
    let interval = null;
    if (taskRunning) {
      interval = setInterval(() => {
        setCurrentTime(currentTime => currentTime - 1);
      }, 1000);
    } else if (!taskRunning) {
      clearInterval(interval);
    }
    if(currentTime == 0 && taskRunning && !relaxState){
      setCurrentTime(10);
      setRelaxState(true);
    }
    if(currentTime == 0 && taskRunning && relaxState){
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [taskRunning, currentTime, relaxState]);

    return(   
        <View style={styles.container}>
            <CameraScreen size={wp('100%')}>
              <Text style={styles.time}>{currentTime}</Text>
            </CameraScreen>
            <Heading style={styles.description} size='lg'>{taskDescription}</Heading>
            {children}
            <View style={styles.horizontal}>
              <TouchableOpacity style={styles.button} onPress={downFunction}>
                <AntDesign name="downcircleo" size={50} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <AntDesign name="pausecircleo" size={50} color="white" onPress={pause}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <AntDesign name="playcircleo" size={50} color="white" onPress={play}/>
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
  },
  time: {
    left: '80%',
    top: '0%',
    color: 'white',
    fontSize: 40,
  }

}); 

export default Task;