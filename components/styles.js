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
  exercise: {
    margin: 16
  },
  label: {
    fontSize: 17,
    marginTop: 8,
    textAlign: 'center'
  },
  nav_bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 64,
    borderBottomWidth: 1,
    borderColor: gray5,
    backgroundColor: 'white'
  },
  settings_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: gray5,
    backgroundColor: 'white'
  },
  settings_label: {
    fontSize: 17,
    marginTop: 4
  },
  square: {
    backgroundColor: gray6,
    width: 128,
    height: 128,
    borderRadius: 16,
    // borderWidth: 1,
    borderColor: gray4,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 8
  },
  tab_bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    paddingBottom: 32,
    borderTopWidth: 1,
    borderColor: gray5,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold'
  },
});