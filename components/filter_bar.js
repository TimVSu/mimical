// author: Maxim Torgovitski

// import react native
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleInfo, faEye, faFaceSmile } from '@fortawesome/free-solid-svg-icons';

// colors
const blue = 'rgb(0, 122, 255)';
const gray5 = 'rgb(229, 229, 234)';

// return filter bar component
const FilterBar = (props) => {
  return (
    <View style={styles.filter_bar}>
      <ScrollView horizontal={true}>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginRight: 8 }]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faEye} color='white' />
            <Text style={styles.label}>Augen</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginLeft: 8 }, { marginRight: 8 }]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' />
            <Text style={styles.label}>Mund</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginLeft: 8 }, { marginRight: 8 }]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' />
            <Text style={styles.label}>Wangen</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginLeft: 8 }]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' />
            <Text style={styles.label}>Text</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

export default FilterBar;

// styles
const styles = StyleSheet.create({
  filter_bar: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // padding: 16,
    // paddingTop: 64,
    borderBottomWidth: 1,
    borderColor: gray5,
    backgroundColor: 'white'
  },
  filter: {
    backgroundColor: blue,
    padding: 16,
    margin: 16,
    borderRadius: 8
  },
  label: {
    fontSize: 16,
    color: 'white'
  }
});