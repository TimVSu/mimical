//@author: Tim Suchan
import CameraScreen from './camera.js';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Button, LayoutAnimation, UIManager, Pressable, Modal, Alert, useColorScheme } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Heading } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import CustomButton from './customButton.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCurrentContent, getCurrentSequence, getTaskDescription, incrementCurrentContent, getCurrentScenario } from './contentManager.js';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

let trainDuration = 1
let pauseDuration = 1

// import colors
import { light_primary_color, dark_primary_color, light_background_color, dark_background_color, green } from './styles';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faChevronRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const AlternativeTask = ({ navigation, route, children, downFunction, }) => {

    const scenarioName = getCurrentScenario();

    // light/dark mode
    const colorScheme = useColorScheme();
    const containerColor = colorScheme === 'light' ? light_background_color : dark_background_color;
    const buttonColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;

    // VARIABLES:
    //==============================================================================================================================================
    const [currentTime, setCurrentTime] = useState(trainDuration);
    const [taskRunning, setTaskRunning] = useState(false);
    const [onPause, setOnPause] = useState(false);
    const [trainState, setTrainState] = useState(false);
    const [relaxState, setRelaxState] = useState(false);
    const [informState, setInformState] = useState(false);
    const [repCounter, setRepCounter] = useState(0);
    const [removed, setRemoved] = useState(false);
    const repititions = 3;
    const [showDescription, setShowDescription] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    // FUNCTIONS:
    //==============================================================================================================================================

    //@author: tim suchan
    //starts/continues one train/pause timer repitition, called when play button is pressd or when  
    const play = () => {
        if (!onPause) {
            setCurrentTime(trainDuration)
            setTaskRunning(true);
            setOnPause(false);
            setInformState(false);
        }
        else {
            setTaskRunning(true);
            setOnPause(false);
        }
    }

    const nextLevelFunction = () => {
        incrementCurrentContent();
        navigation.navigate("Level");
    }

    const saveAsCompleted = async (completedContent) => {

        try {
            await AsyncStorage.setItem('state' + completedContent.toString(), 'completed');
            console.log('saved completed succesfull' + ' : ' + 'state' + completedContent)
        }
        catch (error) {
            console.log('cant save data to async storage');
        }
    }
    const thisContent = getCurrentSequence()[getCurrentContent()-1];
    const ifCompleted = {[thisContent] : 'completed'}

    const saveAsCompletedArray = async (completedContent) => {

        try {
            await AsyncStorage.mergeItem('@completions', JSON.stringify(completedContent));
            console.log('saved completed succesfull' + ' : ' + completed);
        }
        catch (error) {
            console.log('cant save data to async storage');
        }
    }

    const saveAsLast = async (lastContent) =>{

        try {
            await AsyncStorage.setItem('lastTask', lastContent);
            console.log('saved completed succesfull' + ' : ' + 'last' + lastContent);
        }
        catch (error) {
            console.log('cant save data to async storage');
        }
    }
 


    const removeIncrementReplace = () => {
        setRemoved(true);
        LayoutAnimation.configureNext({
            duration: 300,
            create: { type: "spring", property: "scaleY", springDamping: 0.8 },
        });
        setCurrentTime(currentTime => currentTime - 1);
        setRemoved(false);

    }

    //@author: TIm Suchan
    // pauses a running game timer sequence
    const pause = () => {
        setTaskRunning(false);
        setOnPause(true);
    }

    //@author: Tim Suchan
    // The code for the Game Timer 
    // Using useEffect as the timer changing is a side effect in this case
    useEffect(() => {
        let interval = null;
        if (taskRunning) {
            interval = setInterval(() => {
                removeIncrementReplace();
                console.log('inform state: ' + informState + ' currentTime: ' + currentTime + ' repCounter: ' + repCounter + ' relaxState: ' + relaxState);
            }, 1000);
        } else if (!taskRunning) {
            clearInterval(interval);
        }
        if (currentTime == 0 && taskRunning && !relaxState) {
            setCurrentTime(pauseDuration);
            setRelaxState(true);
        }
        if (currentTime == 0 && taskRunning && relaxState) {
            setRelaxState(false);
            if (repCounter == repititions - 1) {
                setRepCounter(0);
                setTaskRunning(false);
                setInformState(false);
                clearInterval(interval);
            }
            else {
                setRepCounter(repCounter => repCounter + 1);
                play();
            }
        }
        if (currentTime == 0 && repCounter == repititions - 1) {
            setTaskRunning(false);
            setCurrentTime(0);
            saveAsCompletedArray(ifCompleted);
            saveAsLast(getCurrentSequence[getCurrentContent()]);
            // nextLevelFunction();
            setModalVisible(true);
        }
        if (currentTime == 3 && taskRunning && relaxState) {
            setInformState(true);
        }
        return () => clearInterval(interval);
    }, [taskRunning, currentTime, relaxState, informState]);



    return (
        <View style={[{ flex: 1 }, { backgroundColor: containerColor }]}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={tempStyles.centeredView}>
                    <View style={[tempStyles.modalView, {}]}>

                        <Text style={tempStyles.modalText}> "Gut gemacht! Level abschlossen!" </Text>


                        <View style={tempStyles.buttonView}>

                            <CustomButton text='Zurück zum menu ' onPress={() => { navigation.navigate("Menu") }} color="red" />
                            <CustomButton text='Weiter' onPress={nextLevelFunction} color="skyblue" />

                        </View>

                    </View>
                </View>
            </Modal>

            <View style={{ flex: 1, backgroundColor: "white" }} />
            <View id="camContainer" style={{ flex: 6, backgroundColor: "white", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                <CameraScreen size={hp('70%')}>
                    {informState ?
                        !removed &&
                        <View style={styles.informView}>
                            <Text style={styles.informText}>{getTaskDescription() + 'in'}</Text>
                            <Text style={styles.informTime}>{currentTime}</Text>
                        </View> :
                        !removed &&
                        <Text style={styles.time}>{currentTime}</Text>
                    }
                </CameraScreen>
            </View>
            <View style={{ flex: 1.5, paddingLeft: 10, paddingRight: 10, alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: 'white' }}>
                <Text style={styles.taskDescription} size='lg'>{getTaskDescription()}</Text>
            </View>
            {/* <View style={{ flex: 1.5, backgroundColor: "white", flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity style={styles.taskButton} onPress={() => { navigation.goBack() }}>
                    <AntDesign name="leftcircleo" size={75} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.taskButton} activeOpacity={0.3} onPress={() => { console.log(getCurrentSequence()[getCurrentContent()] + " : " + getCurrentContent()) }}>
                    <AntDesign name="pausecircleo" size={75} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.taskButton} onPress={() => play()}>
                    <AntDesign name="playcircleo" size={75} color="black" />
                </TouchableOpacity>
            </View> */}

            <View style={[{ flexDirection: 'row' }, { justifyContent: 'center' }, { paddingBottom: 32 }]}>
                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : buttonColor }, { padding: 16 }, { margin: 8 }, { borderRadius: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]} onPress={() => { navigation.goBack() }}>
                    <FontAwesomeIcon style={{ marginRight: 8 }} icon={faChevronLeft} color='white' />
                    <Text style={[styles.label, { color: 'white' }]}>Zurück</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : buttonColor }, { padding: 16 }, { margin: 8 }, { borderRadius: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]} onPress={() => { console.log(getCurrentSequence()[getCurrentContent()] + " : " + getCurrentContent()) }}>
                    <FontAwesomeIcon style={{ marginRight: 8 }} icon={faPause} color='white' />
                    <Text style={[styles.label, { color: 'white' }]}>Pause</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : buttonColor }, { padding: 16 }, { margin: 8 }, { borderRadius: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]} onPress={() => play()}>
                    <Text style={[styles.label, { color: 'white' }]}>Weiter</Text>
                    <FontAwesomeIcon style={{ marginLeft: 8 }} icon={faChevronRight} color='white' />
                </Pressable>
            </View>

        </View>
    );
}

export default AlternativeTask;

const tempStyles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
    },
    camView: {

        top: '10%',
        marginTop: '5%',
        marginBottom: '5%',
    },
    centeredView: {
        flex: 0.9,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    modalView: {
        flex: 0.5,
        margin: 5,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 50,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 50,
            height: 100
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 24

    },
    buttonView: {
        paddingTop: 100,
        flex: 1,
        flexDirection: "row"
    }
});

/*<View style={tempStyles.container}>
<View style={tempStyles.camView}>
<CameraScreen size={wp('100%')}>
{informState ?
  !removed &&
  <View style={styles.informView}>
    <Text style={styles.informText}>{taskDescription + 'in'}</Text>
    <Text style={styles.informTime}>{currentTime}</Text>
  </View> :
  !removed &&
  <Text style={styles.time}>{currentTime}</Text>
}
</CameraScreen>
</View>
<View style={{flex: 2, color: 'black'}}>
<Heading style={styles.taskDescription} size='lg'>{taskDescription}</Heading>
</View>
<View style={{flex: 2, bottom: 10}}>
<TouchableOpacity style={styles.taskButton} onPress={() => {navigation.goBack()}}>
  <AntDesign name="downcircleo" size={75} color="black" />
</TouchableOpacity>
<TouchableOpacity style={styles.taskButton} activeOpacity={0.3} onPress={() => pause()}>
  <AntDesign name="pausecircleo" size={75} color="white" />
</TouchableOpacity>
<TouchableOpacity style={styles.taskButton} onPress={() => play()}>
  <AntDesign name="playcircleo" size={75} color="white" />
</TouchableOpacity>
</View>
</View>*/