// author: Maxim Torgovitski

// import react native
import { Pressable, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';

// import components
import styles from './styles';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleInfo, faEye, faFaceSmile } from '@fortawesome/free-solid-svg-icons';

// colors
const blue = 'rgb(0, 122, 255)';
const gray5 = 'rgb(229, 229, 234)';

// return filter bar component
const FilterBar = (props) => {
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const buttonColor = colorScheme === 'light' ? styles.light_button : styles.dark_button;
  return (
    <View style={[styles.filter_bar, containerColor]}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginRight: 8 }, buttonColor]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faEye} color='white' />
            <Text style={styles.filter_label}>Augen</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginLeft: 8 }, { marginRight: 8 }, buttonColor]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' />
            <Text style={styles.filter_label}>Mund</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginLeft: 8 }, { marginRight: 8 }, buttonColor]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' />
            <Text style={styles.filter_label}>Wangen</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginLeft: 8 }, { marginRight: 8 }, buttonColor]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' />
            <Text style={styles.filter_label}>Filter</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginLeft: 8 }, { marginRight: 8 }, buttonColor]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' />
            <Text style={styles.filter_label}>Filter</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginLeft: 8 }, { marginRight: 8 }, buttonColor]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' />
            <Text style={styles.filter_label}>Filter</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginLeft: 8 }, { marginRight: 8 }, buttonColor]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' />
            <Text style={styles.filter_label}>Filter</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginLeft: 8 }, buttonColor]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' />
            <Text style={styles.filter_label}>Filter</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

export default FilterBar;

// styles
// const styles = StyleSheet.create({
//   filter_bar: {
//     // flexDirection: 'row',
//     // justifyContent: 'space-between',
//     // alignItems: 'center',
//     // padding: 16,
//     // paddingTop: 64,
//     borderBottomWidth: 1,
//     borderColor: gray5,
//     backgroundColor: 'white'
//   },
//   filter: {
//     backgroundColor: blue,
//     padding: 16,
//     margin: 16,
//     borderRadius: 8
//   },
//   filter_label: {
//     fontSize: 16,
//     color: 'white'
//   }
// });