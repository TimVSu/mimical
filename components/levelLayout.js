import { Camera, CameraType, getSupportedRatiosAsync } from 'expo-camera';
import { useEffect, useState } from 'react';
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

  const [ratio, setRatio] = useState('4:3');
  const [decimalRatio, setDecimalRatio] = useState(1.33333);


  //const camSize = useSharedValue(0);

  //const style = useAnimatedStyle(() => {
  //  return { 
  //    width: withSpring(camSize.value),
  //    height: withSpring(camSize.value), 
  //     };
  //});

    const findRatio = async() => {
      if (Platform.OS === 'android') {
        const ratios = await camera.getSupportedRatiosAsync();
        if (('4:3') in ratios){
          setRatio('4:3');
          setDecimalRatio(1.33333);
        }
        else{
          let min = 5;
          let bestRatio;
        for (let ratio of ratios){
          const splitted = ratio.split(':');
          const decimalRatio = parseInt(splitted[0]) / parseInt(splitted[1]);
          if(Math.abs((4/3)-decimalRatio) < min){
            min = Math.abs((4/3)-decimalRatio);
            bestRatio = ratio;
            setDecimalRatio(decimalRatio);
          }
        }
        setRatio(bestRatio);
      }
    }
  }
  useEffect(() =>{
    findRatio;
  });


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
        <View style={[styles.camContainer, {height: wp('50%') * 1.33333,}]}>
        <Camera style={styles.camera} type={CameraType.front} ratio={ratio}>
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