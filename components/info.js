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
    backgroundColor: '#59C1BD',
    borderRadius: 25,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
});

export default Info;