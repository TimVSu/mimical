// author: Maxim Torgovitski

// import react native
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
import React from 'react';

// import components
import NavBar from '../components/nav_bar.js';
import TabBar from '../components/tab_bar.js';
import Scenario from '../components/scenario.js';
import FilterBar from '../components/filter_bar.js';

// colors
const green = 'rgb(52, 199, 89)';
const blue = 'rgb(0, 122, 255)';
const accessibleBlue = 'rgb(0, 64, 221)'
const gray4 = 'rgb(209, 209, 214)';
const gray5 = 'rgb(229, 229, 234)';
const gray6 = 'rgb(242, 242, 247)';

// return home page
const HomePage = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <NavBar page_title="Übersicht" />
      <FilterBar></FilterBar>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Scenario title="Der erste Schnee" progress={0} exercises={7} />
          <Scenario title="Besuch im botanischen Garten" progress={0} exercises={9} />
          <Scenario title="Stadtbummel" progress={0} exercises={8} />
          <Scenario title="Kegeln" progress={0} exercises={8} />
          <Scenario title="Besichtigung einer Kathedrale" progress={0} exercises={7} />
          <Scenario title="Sommerabend auf dem Balkon" progress={0} exercises={7} />
          <Scenario title="Im Biergarten" progress={0} exercises={7} />
          <Scenario title="Einkauf beim Metzger" progress={0} exercises={7} />
          <Scenario title="Laternenumzug" progress={0} exercises={6} />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
      <TabBar home={blue} stats={gray4} settings={gray4} navigation={navigation} />
    </View>
  );
}

export default HomePage;


// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 64
  }
});