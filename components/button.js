// author: Maxim Torgovitski

// import react native
import { Text, TouchableOpacity, useColorScheme } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

// import colors
import { light_primary_color, dark_primary_color } from './styles';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Button = ({ navigation, ...props }) => {

  // font size state variable
  const [fontSize, setFontSize] = useState(17);

  // retrieve font size data
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('settings');
      const value = JSON.parse(jsonValue);
      if (value !== null) {
        setFontSize(value.fontSize);
      }
    } catch (error) {
      // error retrieving data
    }
  }

  // get data on render
  useEffect(() => {
    getData();
  }, []);

  // get data on render
  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  // light/dark mode
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;

  // return button component
  return (
    <TouchableOpacity style={[{ backgroundColor: containerColor }, { padding: 16 }, { margin: 0 }, { borderRadius: 16 }, { flexDirection: 'row' }, { justifyContent: 'center' }, { alignItems: 'center' }]} onPress={() => navigation.navigate(props.target)}>
      <Text style={[{ fontSize: fontSize }, { color: 'white' }]}>{props.label}</Text>
    </TouchableOpacity>
  );

}

export default Button;