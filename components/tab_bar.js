// author: Maxim Torgovitski

// import react native
import { Pressable, useColorScheme, View } from 'react-native';
import React from 'react';

// import components
import styles from './styles';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

// colors
const blue = 'rgb(0, 122, 255)';
const dark_blue = 'rgb(10, 132, 255)';

// return tab bar component
const TabBar = ({ navigation, ...props }) => {
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const iconColor = colorScheme === 'light' ? blue : dark_blue
  return (
    <View style={[styles.tab_bar, containerColor]}>
      <Pressable onPress={() => navigation.popToTop()}>
        <FontAwesomeIcon icon={faArrowLeft} color={iconColor} size={32} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Menu')}>
        <FontAwesomeIcon icon={faHouse} color={props.home} size={32} />
      </Pressable>
      <Pressable>
        <FontAwesomeIcon icon={faChartSimple} color={props.stats} size={32} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Settings')}>
        <FontAwesomeIcon icon={faGear} color={props.settings} size={32} />
      </Pressable>
    </View>
  );
}

export default TabBar;