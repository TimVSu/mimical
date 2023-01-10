// author: Maxim Torgovitski

// import react native
import { Pressable, ScrollView, Text, useColorScheme, View } from 'react-native';
import React from 'react';

// import components
import styles from './styles';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faFaceSmile } from '@fortawesome/free-solid-svg-icons';

// colors
const blue = 'rgb(0, 122, 255)';

// return filter bar component
const FilterBar = () => {

  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const buttonColor = colorScheme === 'light' ? styles.light_button : styles.dark_button;

  const Filter = (props) => {
    return (
      <View style={[buttonColor, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginLeft: 8 }, { marginRight: 8 }]}>
        <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
          <FontAwesomeIcon style={{ marginRight: 8 }} icon={props.icon} color='white' />
          <Text style={[styles.label, { color: 'white' }]}>{props.label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={[styles.filter_bar, containerColor]}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginRight: 8 }, buttonColor]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faEye} color='white' />
            <Text style={[styles.label, { color: 'white' }]}>Augen</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginLeft: 8 }, { marginRight: 8 }, buttonColor]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' />
            <Text style={[styles.label, { color: 'white' }]}>Mund</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginLeft: 8 }, { marginRight: 8 }, buttonColor]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' />
            <Text style={[styles.label, { color: 'white' }]}>Wangen</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginLeft: 8 }, { marginRight: 8 }, buttonColor]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' />
            <Text style={[styles.label, { color: 'white' }]}>Filter</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginLeft: 8 }, { marginRight: 8 }, buttonColor]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' />
            <Text style={[styles.label, { color: 'white' }]}>Filter</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginLeft: 8 }, { marginRight: 8 }, buttonColor]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' />
            <Text style={[styles.label, { color: 'white' }]}>Filter</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginLeft: 8 }, { marginRight: 8 }, buttonColor]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' />
            <Text style={[styles.label, { color: 'white' }]}>Filter</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: blue }, { borderRadius: 8 }, { padding: 16 }, { margin: 16 }, { marginLeft: 8 }, buttonColor]}>
          <Pressable style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faFaceSmile} color='white' />
            <Text style={[styles.label, { color: 'white' }]}>Filter</Text>
          </Pressable>
        </View>
        {/* <Filter icon={faFaceSmile} label="Filter" /> */}
      </ScrollView>
    </View>
  );

}

export default FilterBar;