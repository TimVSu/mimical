import React, { useEffect, useState, useRef } from 'react';
import { Alert, Modal, Text, StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
import CustomButton from '../components/CustomButton'

const Modal = (navigation) => {

    const fadeAnim = useRef(new Animated.Value(0)).current;
    
    const fadeIn = () => {
        Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 3000,

        useNativeDriver: true
        }).start();
    };
    
    const translation = useRef(new Animated.Value(1)).current;
    const [buttonUse, setButtonUse] = useState(false)

    const changeOpa = () => {

        if(buttonUse==false){
            
            setButtonUse(true)
            Animated.timing(translation, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true
            }).start();
        }
        else {
            setButtonUse(false)
            Animated.timing(translation, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
            }).start();
        }
    };

    const progress = useRef(new Animated.Value(0.5)).current;
    const scale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
          Animated.parallel([
            Animated.sequence([
              Animated.spring(progress, { toValue: 1, useNativeDriver: true }),
              Animated.spring(progress, { toValue: 0.5, useNativeDriver: true }),
            ]),
            Animated.sequence([
              Animated.spring(scale, { toValue: 2, useNativeDriver: true }),
              Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
            ]),
          ])
        ).start();
      }, []);

    const [modalVisible, setModalVisible] = useState(false);
    
    return(
            
        <View style={styles.container}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, {}]}>

                        <Text style={styles.modalText}>Gut gemacht! Level abschlossen!</Text>
                            

                        <View style={styles.buttonView}>
                            
                            <CustomButton text='Weiter' onPress={ changeOpa } color="skyblue"/>
                            <CustomButton text='Zurück' onPress={() => setModalVisible(false)} color="red" />

                        </View>
                        
                    </View>
                </View>
            </Modal>

            <CustomButton text='Weiter' onPress={() => setModalVisible(true)} color="coral"/>

            <TouchableOpacity onPress={changeOpa}>

                <View style={styles.shape_container}>
                    <Animated.View style={[styles.circle, {
                        opacity: translation
                    }]}>
                        <Text style={styles.button_text}> Press me </Text>
                    </Animated.View>
                </View>

            </TouchableOpacity>

        </View> 
    );
}

const SIZE = 75.0

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shape_container: {
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    square: {
        width: SIZE,
        height: SIZE,
        backgroundColor: '#264653',
    },
    rectangle: {
        width: 120 * 2,
        height: 120,
        backgroundColor: '#2a9d8f'
    },
    circle: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        borderColor: '#e9c46a',
        borderWidth: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    oval: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#f4a261',
        transform: [{ scaleX: 1 }]
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 60,
        borderRightWidth: 60,
        borderBottomWidth: 120,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#e76f51',
        transform: [{ rotate: '180deg' }]
    },
    button_text: {
        fontSize: 20
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: "powderblue"
    },
    fadingText: {
        fontSize: 28
    },
    buttonRow: {
        flexBasis: 100,
        justifyContent: "space-evenly",
        marginVertical: 16
    },
    centeredView: {
        flex: 0.9,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
      },
      modalView: {
        flex: 0.5,
        // flexDirection: "row",
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
        paddingTop:100,
        flex: 1,
        flexDirection: "row"
      }
});

export default Modal;