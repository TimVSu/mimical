import { Camera, CameraType, getSupportedRatiosAsync } from 'expo-camera';
import { useEffect, useState } from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, LayoutAnimation, Platform, UIManager} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Feather } from '@expo/vector-icons';
import { CloseIcon, CircleIcon } from 'native-base';

import * as FaceDetector from 'expo-face-detector';

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const camButtonTop = 10;
  let camButtonRight = 10;

const LevelLayout = ({navigation,}) => {

  const [faceDetected, setFaceDetected] = useState(false);

  const [ratio, setRatio] = useState('4:3');
  const [decimalRatio, setDecimalRatio] = useState(1.33333);

  const [landmarks, setLandmarks] = useState([]);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleFacesDetected = ({faces}) => {
    if(typeof faces !== 'undefined' && typeof faces[0] !== 'undefined'){
    console.log(faces[0]["LEFT_EYE"]["x"])
    var BOTTOM_MOUTH = faces[0]['BOTTOM_MOUTH'];
    var LEFT_CHEEK = faces[0]['LEFT_CHEEK'];
    var LEFT_EAR = faces[0]['LEFT_EAR'];
  
    var LEFT_EYE = faces[0]["LEFT_EYE"];
    var LEFT_MOUTH = faces[0]['LEFT_MOUTH'];
    var NOSE_BASE = faces[0]['NOSE_BASE'];
    var RIGHT_CHEEK = faces[0]['RIGHT_CHEEK'];
    var RIGHT_EAR = faces[0]['RIGHT_EAR'];
    var RIGHT_EYE = faces[0]['RIGHT_EYE'];
    var RIGHT_MOUTH = faces[0]['RIGHT_MOUTH'];
  
    let landmarksTemp = [10];
    landmarksTemp[0] = BOTTOM_MOUTH;
    landmarksTemp[1] = LEFT_CHEEK;
    landmarksTemp[2] = LEFT_EAR;
    landmarksTemp[3] = LEFT_EYE;
    landmarksTemp[4] = LEFT_MOUTH;
    landmarksTemp[5] = NOSE_BASE;
    landmarksTemp[6] = RIGHT_CHEEK;
    landmarksTemp[7] = RIGHT_EAR;
    landmarksTemp[8] = RIGHT_EYE;
    landmarksTemp[9] = RIGHT_MOUTH;
   console.log(faces);
   console.log(landmarksTemp);
   setX(landmarksTemp[3]["x"]);
   setY(landmarksTemp[3]["y"]);
    setLandmarks(landmarksTemp);
    setFaceDetected(true);
    //setLandmarks(faces.slice(0,9))
    }
    else{
      setLandmarks([]);
      setFaceDetected(false)
    }
  }
  

  //const camSize = useSharedValue(0);
  //var landmarks = false;
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
        <Camera style={styles.camera} type={CameraType.front} ratio={ratio} 
onFacesDetected={handleFacesDetected}
          faceDetectorSettings={{
             mode: FaceDetector.FaceDetectorMode.fast,
             detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
             runClassifications: FaceDetector.FaceDetectorClassifications.none,
             minDetectionInterval: 0,
             tracking: true,
    }}>
            <TouchableOpacity style={styles.button} onPress={toggleCam} >
                <CloseIcon/>
            </TouchableOpacity>
            {faceDetected && 
            <>
            <CircleIcon size={2} style={{top: landmarks[0]["y"]-1, left: landmarks[0]["x"]-1}}/>
            <CircleIcon size={2} style={{top: landmarks[4]["y"]-1, left: landmarks[4]["x"]-1}}/>

            </>
            }            

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