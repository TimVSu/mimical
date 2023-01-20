//@author: Tim Suchan
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';
import CustomButton from './customButton.js';
import { View, Platform, UIManager, Text } from 'react-native';
import * as FaceDetector from 'expo-face-detector';
import { Heading } from 'native-base';
import styles from './styles.js';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

// necessary for android devices as explained in the expo-camera doc
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

//@author: Tim Suchan
//this funtion returns an array of circle markers at the positions of the face landmarks
//the position coordinates are relative to the parent component which means that the function has to be placed inside a 'Camera' component
//it does not quite work yet as the programm strugles with displaying more than three points at the same time
/*const displayFaceLandmarks = ({ landmarks }) => (
  <>
    {landmarks.map((landmark, index) => (
      <CircleIcon size={2} style={{ top: landmark["y"] - 1, left: landmark["x"] - 1 }} />
    ))}
  </>
);*/

//@author: Tim Suchan
const CameraScreen = ({ size, children }) => {


  //!! You can seee the face detection api by looking at the terminal where the metro builder is active during camera use,
  // a list of detected landmarks will be logged to this console.!!

  // VARIABLES:
  //============================================================================================================================================

  // decides wether to call functions to process face detection
  const [faceDetected, setFaceDetected] = useState(false);

  //used for camera persmission
  const [permission, requestPermission] = Camera.useCameraPermissions();

  // hook to handle asking for camera permission and conditional rendering
  const [hasPermission, setHasPermission] = useState(null);

  // used for telleing the compnent to take a picture

  const [camera, setCamera] = useState(null);

  // saves the pictures taken

  const [image, setImage] = useState(null);

  // exports the picture to the users medialibrary

  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();

  //ratios used to prevent camera distortion on android
  const [ratio, setRatio] = useState('4:3');
  const [decimalRatio, setDecimalRatio] = useState(1.33333);

  //an array of the face landmarks
  const [landmarks, setLandmarks] = useState([]);

  // used to turn cam on/off
  const [camActivated, setCamActivated] = useState(true);

  // will be used in case the camera should be able to move from left to right in case the user prefers a different placement
  const [camPosition, setCamPosition] = useState('right');

  // decides how well the user performs in a given task 
  const [score, setScore] = useState(0);

  //=============================================================================================================================================

  // FUNCTIONS:
  //=============================================================================================================================================

  //@author: TIm Suchan 
  // this asynchronous function asks the user for camera permission and sets a booean state hook that later decides wether to display camera
  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status["granted"]);
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasMediaLibraryPermission(status["granted"]);
    })();
  }, []);

  // called in high frequency ehen a face is detected and in low frequency when it isn't
  const handleFacesDetected = ({ faces }) => {

    //this method sometimes gets called even when no faces are detected, this has to be checked for in order to prevent errors
    if (typeof faces !== 'undefined' && typeof faces[0] !== 'undefined') {

      //mapping the input to an array of the structure [{"x": value, "y": value} ...]
      //still looking for a better way to do this 
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

      var leftEyeOpenPropability = faces[0]['leftEyeOpenPropability']
      var rightEyeOpenPropability = faces[0]['rightEyeOpenPropability']

      setScore(leftEyeOpenPropability - rightEyeOpenPropability)


      setLandmarks(landmarksTemp);
      setFaceDetected(true);
      setLandmarks(landmarksTemp);
    }
    else {
      setLandmarks([]);
      setFaceDetected(false)
    } size
  }

  // this method finds the searches the devices camera supported image ratios to get the closest match to the default 4:3
  // Only releavant for android devices that dont support 4:3 front camera output
  // the ratio is used for camera rendering this way the image is never distorted but the displayed ratios can differ 
  // @author: Tim Suchan
  const findRatio = async () => {
    if (Platform.OS === 'android') {
      const ratios = await Camera.getSupportedRatiosAsync();
      if (('4:3') in ratios) {
        setRatio('4:3');
        setDecimalRatio(1.33333);
      }
      else {
        let min = 5;
        let bestRatio;
        for (let ratio of ratios) {
          const splitted = ratio.split(':');
          const decimalRatio = parseInt(splitted[0]) / parseInt(splitted[1]);
          if (Math.abs((4 / 3) - decimalRatio) < min) {
            min = Math.abs((4 / 3) - decimalRatio);
            bestRatio = ratio;
            setDecimalRatio(decimalRatio);
          }
        }
        setRatio(bestRatio);
      }
    }
  }

  // by using the useEffect ratio the ratio has to be calculated only once at the start of the app
  useEffect(() => {
    findRatio;
    permission
  });

  // function to toggle cam on/off
  const toggleCam = () => {
    camActivated ? setCamActivated(false) : setCamActivated(true);
  }

  //für linkshänder später wenn ich mal zeit hab wird aber aktuell nicht benutzt
  //const toggleCamPosition = () => {
  //    LayoutAnimation.configureNext({
  //        update: {duration: 400, type: 'linear'}
  //    });
  //    setCamPosition(camPosition === 'left' ? 'right' : 'left');
  //}

  const takePicture = async () => {

    if (hasPermission) {
  
      const options = {
        quality: 1,
        base64: true,
        exif: false
      }
  
      const data=await camera.takePictureAsync(options)
      setImage(data.uri);
      console.log(data)
  
      if(hasMediaLibraryPermission) {
  
        MediaLibrary.saveToLibraryAsync(data.uri).then(() => {
          setImage(undefined);
        });
      }
    }
  }


  //===============================================================================================================================================
  if (hasPermission) {
    return (

      <View style={[styles.camContainer, { width: size / decimalRatio, height: size }]}>
        
        <CustomButton text='[   ]' onPress={() => { takePicture() }} color="red" />
        <Camera ref={ref => setCamera(ref)} style={styles.camera} type={CameraType.front} ratio={ratio}
          onFacesDetected={handleFacesDetected}
          faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.fast,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
            runClassifications: FaceDetector.FaceDetectorClassifications.all,
            minDetectionInterval: 0,
            tracking: true,
          }}>
          <Heading>

          </Heading>

          {children}
        </Camera>
      </View>
    );
  }
  else {
    return (
      <View style={[styles.camContainer, { width: size, height: decimalRatio * size }]}>
        <Text> missing camera permission </Text>
      </View>
    );
  }
}

export default CameraScreen;