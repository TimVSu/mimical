// author: Maxim Torgovitski

// import react native
import { Pressable, Text, TouchableOpacity, useColorScheme } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

// import components
import styles from './styles';
import { light_primary_color, dark_primary_color, green } from './styles';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// return button component
const Button = ({ navigation, ...props }) => {

  const [fontSize, setFontSize] = useState(17);

  // retrieve data
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('test');
      const value = JSON.parse(jsonValue);
      if (value !== null) {
        setFontSize(value.fontSize);
      }
    } catch (error) {
      // error retrieving data
    }
  }

  // get data on first render
  useEffect(() => {
    getData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;

  return (
    // <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : containerColor }, { padding: 16 }, { margin: 8 }, { borderRadius: 16 }, { flexDirection: 'row' }, { justifyContent: 'center' }, { alignItems: 'center' }]} onPress={() => navigation.navigate(props.target)}>
    <TouchableOpacity style={[{ backgroundColor: containerColor }, { padding: 16 }, { margin: 0 }, { borderRadius: 16 }, { flexDirection: 'row' }, { justifyContent: 'center' }, { alignItems: 'center' }]} onPress={() => navigation.navigate(props.target)}>
      {/* <FontAwesomeIcon style={{ marginRight: 8 }} icon={props.icon} color='white' /> */}
      <Text style={[{ fontSize: fontSize }, { color: 'white' }]}>{props.label}</Text>
    </TouchableOpacity>
    // </Pressable>
  );

}

export default Button;