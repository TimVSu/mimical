import { StyleSheet, View } from 'react-native';
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faHouse } from '@fortawesome/free-solid-svg-icons';
// import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
// import { faGear } from '@fortawesome/free-solid-svg-icons';

// return tab bar @maxim
const TabBar = () => {
  return (
    <View style={styles.tab_bar}>
      <FontAwesomeIcon icon={faHouse} color={blue} size={32} />
      <FontAwesomeIcon icon={faChartSimple} color={gray4} size={32} />
      <FontAwesomeIcon icon={faGear} color={gray4} size={32} />
    </View>
  );
}

export default TabBar;

const styles = StyleSheet.create({
  tab_bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    paddingBottom: 32,
    borderTopWidth: 1,
    borderColor: gray5
  }
});