//@Author: Tim Suchan
import {View, StyleSheet, Text } from 'react-native';

const Info = ({infoText, children}) => {
    return(
        <View style={styles.infoContainer}>
            <Text>
                {infoText}
            </Text>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({ 
  infoContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 25,
    overflow: 'hidden',
  },
});

export default Info;