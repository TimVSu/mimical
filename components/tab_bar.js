// author: Maxim Torgovitski

// import react native
import { Pressable, StyleSheet, View } from 'react-native';
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
const gray5 = 'rgb(229, 229, 234)';

// return tab bar component
const TabBar = ({ navigation, ...props }) => {
  return (
    <View style={styles.tab_bar}>
      <Pressable onPress={() => navigation.popToTop()}>
        <FontAwesomeIcon icon={faArrowLeft} color={blue} size={32} />
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