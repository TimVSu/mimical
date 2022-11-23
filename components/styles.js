// author: Maxim Torgovitski

// import react native
import { StyleSheet } from 'react-native';

// default colors
const red = 'rgb(255, 59, 48)';
const orange = 'rgb(255, 149, 0)';
const yellow = 'rgb(255, 204, 0)';
const green = 'rgb(52, 199, 89)';
const blue = 'rgb(0, 122, 255)';
const purple = 'rgb(175, 82, 222)';
const pink = 'rgb(250, 17, 79)'
const gray1 = 'rgb(142, 142, 147)';
const gray2 = 'rgb(174, 174, 178)';
const gray3 = 'rgb(199, 199, 204)';
const gray4 = 'rgb(209, 209, 214)';
const gray5 = 'rgb(229, 229, 234)';
const gray6 = 'rgb(242, 242, 247)';

// accessible colors
const accessibleRed = 'rgb(255, 59, 48)';
const accessibleOrange = 'rgb(255, 149, 0)';
const accessibleYellow = 'rgb(255, 204, 0)';
const accessibleGreen = 'rgb(52, 199, 89)';
const accessibleBlue = 'rgb(0, 122, 255)';
const accessiblePurple = 'rgb(175, 82, 222)';
const accessibleGray1 = 'rgb(142, 142, 147)';
const accessibleGray2 = 'rgb(174, 174, 178)';
const accessibleGray3 = 'rgb(199, 199, 204)';
const accessibleGray4 = 'rgb(209, 209, 214)';
const accessibleGray5 = 'rgb(229, 229, 234)';
const accessibleGray6 = 'rgb(242, 242, 247)';

// styles sorted alphabetically
export default StyleSheet.create({
  button_label: {
    fontSize: 16,
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 64
  },
  exercise: {
    margin: 16
  },
  filter_bar: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: gray5,
    // padding: 16,
    // paddingTop: 64,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  filter_label: {
    fontSize: 16,
    color: 'white'
  },
  label: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 8
  },
  nav_bar: {
    backgroundColor: 'white',
    padding: 16,
    paddingTop: 64,
    borderBottomWidth: 1,
    borderColor: gray5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  scenario: {
    marginTop: 16,
    marginBottom: 16
  },
  scenario_title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 16
  },
  settings_item: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: gray5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  settings_label: {
    fontSize: 17,
    marginTop: 4
  },
  square: {
    width: 128,
    height: 128,
    backgroundColor: gray6,
    padding: 8,
    // borderWidth: 1,
    // borderColor: gray4,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab_bar: {
    backgroundColor: 'white',
    padding: 16,
    paddingBottom: 32,
    borderTopWidth: 1,
    borderColor: gray5,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold'
  },
});