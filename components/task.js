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

  const [currentTime, setCurrentTime] = useState(20);
  const [taskRunning, setTaskRunning] = useState(false);
  const [onPause, setOnPause] = useState(false);
  const [trainState, setTrainState] = useState(false);
  const [relaxState, setRelaxState] = useState(false);
  const [informState, setInformState] = useState(false);
  const [repCounter, setRepCounter] = useState(0);
  const repititions = 3;
 
  const [showDescription, setShowDescription] = useState(true);


  // FUNCTIONS:
  //=============================================================================================================================================
  const play = () => {
    if (!onPause){
    setCurrentTime(20)
    
    setTaskRunning(true);
    setOnPause(false);
    setInformState(false);
    }
    else{
      setTaskRunning(true);
      setOnPause(false);
    }
  }

  const relax = () => {
    setCurrentTime(10);
    setRelaxState(true);
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
        console.log('current time ' + currentTime + ' : ' + 'relax ' + relaxState + ' : ' + 'task ' + taskRunning);
      }, 1000);
    } else if (!taskRunning) {
      clearInterval(interval);
    }
    if(currentTime == 0 && taskRunning && !relaxState){
      setCurrentTime(10);
      setRelaxState(true);
    }
    if(currentTime == 0 && taskRunning && relaxState){
      if (repCounter < repititions)
      setRelaxState(false);
      setTaskRunning(false);
      setInformState(false);
      clearInterval(interval);
    }
    if(currentTime == 3 && taskRunning && relaxState){
      setInformState(true);
    }
    return () => clearInterval(interval);
  }, [taskRunning, currentTime, relaxState, informState]);

    return(   
        <View style={styles.container}>
            <CameraScreen size={wp('100%')}>
              {!informState ? 
              <Text style={styles.time}>{currentTime}</Text>:
              <View style={styles.informView}>
                <Text style={styles.informText}>{taskDescription + 'in'}</Text>
              <Text style={styles.informTime}>{currentTime}</Text>
              </View>}
            </CameraScreen>
            <Heading style={styles.description} size='lg'>{taskDescription}</Heading>
            {children}
            <View style={styles.horizontal}>
              <TouchableOpacity style={styles.button} onPress={downFunction}>
                <AntDesign name="downcircleo" size={50} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} activeOpacity={0.3}>
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
  },
  informTime: {
    color: 'white',
    fontSize: 300,
  },
  informText: {
    fontSize: 60,
    flex: 1,
    flexDirection: 'column',
  },
  informView: {
    alignItems: 'center',
    justifyContent: 'center'
  }

}); 

export default Task;