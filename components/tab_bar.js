// author: Maxim Torgovitski

// import react native
import { Pressable, TouchableOpacity, useColorScheme, View } from 'react-native';
import React from 'react';

// import components
import styles from './styles';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChartSimple, faGear, faHouse } from '@fortawesome/free-solid-svg-icons';

const TabBar = ({ navigation, ...props }) => {

  // light/dark mode
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;

  // return tab bar component
  return (
    <View style={[styles.tab_bar, containerColor]}>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <FontAwesomeIcon icon={faHouse} color={props.home} size={32} />
      </TouchableOpacity>
      {/* <Pressable onPress={() => navigation.navigate('Progress')}>
        <FontAwesomeIcon icon={faChartSimple} color={props.stats} size={32} />
      </Pressable> */}
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <FontAwesomeIcon icon={faGear} color={props.settings} size={32} />
      </TouchableOpacity>
    </View>
  );

}

export default TabBar;