//@Author: Tim Suchan
import {View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CloseIcon } from 'native-base';

const Info = ({infoText, children, closeFunction}) => {
    return(
        <View style={styles.infoContainer}>
            <Text>
                {infoText}
            </Text>
            {children}
            <TouchableOpacity onPress={closeFunction} style={styles.buttonRight}>
                <CloseIcon size={10}></CloseIcon>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({ 
  infoContainer: {
    backgroundColor: '#59C1BD',
    borderRadius: 25,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  buttonRight: {
    position: 'absolute',
    top: '5%',
    left: '40%',
    color: 'black',
  },
});

export default Info;