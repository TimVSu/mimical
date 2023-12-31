// author: Maxim Torgovitski

// import react native
import { Button, ScrollView, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import components
import NavBar from '../components/nav_bar.js';
import TabBar from '../components/tab_bar.js';
import SettingsItem from '../components/settings_item.js';
import Badge from '../components/badge.js';
import { light_primary_color, dark_primary_color } from '../components/styles.js';
import styles from '../components/styles.js';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

// colors
const green = 'rgb(52, 199, 89)';
const blue = 'rgb(0, 122, 255)';
const gray4 = 'rgb(209, 209, 214)';
const gray5 = 'rgb(229, 229, 234)';
const gray6 = 'rgb(242, 242, 247)';
const dark_blue = 'rgb(10, 132, 255)';
const dark_gray5 = 'rgb(44, 44, 46)';

const ProgressPage = ({ navigation }) => {

  // light/dark mode
  const colorScheme = useColorScheme();
  const activeIconColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;
  const inactiveIconColor = colorScheme === 'light' ? gray5 : dark_gray5;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;

  // return progress page
  return (
    <View style={[{ flex: 1 }, containerColor]}>
      <NavBar page_title="Statistiken" />
      <ScrollView>
        {/* <Button
          title='get data'
          onPress={getData}
        />
        <Badge progress={10} />
        <Badge progress={40} />
        <Badge progress={20} />
        <Badge progress={60} />
        <Badge progress={90} />
        <Badge progress={30} />
        <Badge progress={100} />
        <Badge progress={80} />
        <Badge progress={50} />
        <Badge progress={70} /> */}
        <View style={[{ padding: 16 }]}>
          <Text style={[{ fontSize: 24 }, { fontWeight: 'bold' }, textColor]}>Chart Title</Text>
          <View></View>
        </View>
      </ScrollView>
      <TabBar
        home={inactiveIconColor}
        stats={activeIconColor}
        settings={inactiveIconColor}
        navigation={navigation}
      />
    </View>
  );

}

export default ProgressPage;