import React, { useState } from 'react';
import { StyleSheet, Alert, Modal, Text, View } from 'react-native';
import CustomButton from './customButton'

export default function customModal({ oP1, oP2, text1, text2, header}) {

    const [modalVisible, setModalVisible] = useState(false);
    
    return(
            
        <View style={styles.container}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                // onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                // setModalVisible(!modalVisible);
                // }}
            >
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, {}]}>

                        <Text style={styles.modalText}> { header } </Text>
                            

                        <View style={styles.buttonView}>
                            
                            <CustomButton text={text1} onPress= { oP1 } color="skyblue"/>
                            <CustomButton text={text2} onPress= { oP2 } color="red" />

                        </View>
                        
                    </View>
                </View>
            </Modal>
        </View> 
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
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
        paddingTop:100,
        flex: 1,
        flexDirection: "row"
    }
});
