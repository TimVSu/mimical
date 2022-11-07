import { Camera, CameraType, getSupportedRatiosAsync } from 'expo-camera';
import { useState } from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, LayoutAnimation, Platform, UIManager} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Feather } from '@expo/vector-icons';
import { CloseIcon } from 'native-base';

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const camButtonTop = 10;
  let camButtonRight = 10;

  

const LevelLayout = ({navigation}) => {

  //const camSize = useSharedValue(0);

  //const style = useAnimatedStyle(() => {
  //  return { 
  //    width: withSpring(camSize.value),
  //    height: withSpring(camSize.value), 
  //     };
  //});

    
    const [camExpanded, setCamExpanded] = useState(false);
    const [camActivated, setCamActivated] = useState(false);
    const [camPosition, setCamPosition] = useState('right');
 
    const toggleCam = () =>{
        LayoutAnimation.configureNext({
            create: {duration: 500, type: "spring", springDamping: 0.5, property: "scaleXY"},
            delete: {duration: 200, type: "easeout", springDamping: 0.4, property: "scaleXY"},
        });
       camActivated ? setCamActivated(false) : setCamActivated(true);
    }

    //für linkshänder später wenn ich mal zeit hab wird aber aktuell nicht benutzt
    //const toggleCamPosition = () => {
    //    LayoutAnimation.configureNext({
    //        update: {duration: 400, type: 'linear'}
    //    });
    //    setCamPosition(camPosition === 'left' ? 'right' : 'left');
    //}


    // will later be needed for device cam permission
    //const [permission, requestPermission] = Camera.useCameraPermissions();

    return(
        <View style={styles.container}>
       
       {camActivated ? 
        <View style={styles.camContainer}>
        <Camera style={styles.camera} type={CameraType.front} ratio={'1:1'}>
            <TouchableOpacity style={styles.button} onPress={toggleCam} >
                <CloseIcon/>
            </TouchableOpacity>
        </Camera>
          
        </View>:

        
          
        <TouchableOpacity style={styles.button} onPress={toggleCam}>
            <Feather name='camera' size={20} color='black'/>
        </TouchableOpacity>
          }
        
        

      </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
   
  },
  camContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    height: wp('50%'),
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
  button: {
    position: 'absolute',
    top: camButtonTop,
    right: camButtonRight,
    height: 20,
    width: 20,
    flexDirection: 'row',
    color: 'black',
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