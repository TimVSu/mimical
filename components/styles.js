// author: Maxim Torgovitski

// import react native
import { StyleSheet } from 'react-native';

// default light mode colors
const red = 'rgb(255, 59, 48)';
const orange = 'rgb(255, 149, 0)';
const yellow = 'rgb(255, 204, 0)';
const green = 'rgb(52, 199, 89)';
const blue = 'rgb(0, 122, 255)';
const purple = 'rgb(175, 82, 222)';
const pink = 'rgb(255, 45, 85)'
const gray1 = 'rgb(142, 142, 147)';
const gray2 = 'rgb(174, 174, 178)';
const gray3 = 'rgb(199, 199, 204)';
const gray4 = 'rgb(209, 209, 214)';
const gray5 = 'rgb(229, 229, 234)';
const gray6 = 'rgb(242, 242, 247)';

// default dark mode colors
const dark_red = 'rgb(255, 69, 58)';
const dark_orange = 'rgb(255, 159, 10)';
const dark_yellow = 'rgb(255, 214, 10)';
const dark_green = 'rgb(52, 209, 88)';
const dark_blue = 'rgb(10, 132, 255)';
const dark_purple = 'rgb(191, 90, 242)';
const dark_pink = 'rgb(255, 55, 95)'
const dark_gray1 = 'rgb(142, 142, 147)';
const dark_gray2 = 'rgb(99, 99, 102)';
const dark_gray3 = 'rgb(72, 72, 74)';
const dark_gray4 = 'rgb(58, 58, 60)';
const dark_gray5 = 'rgb(44, 44, 46)';
const dark_gray6 = 'rgb(28, 28, 30)';

// accessible colors
const accessible_red = 'rgb(255, 59, 48)';
const accessible_orange = 'rgb(255, 149, 0)';
const accessible_yellow = 'rgb(255, 204, 0)';
const accessible_green = 'rgb(52, 199, 89)';
const accessible_blue = 'rgb(0, 122, 255)';
const accessible_purple = 'rgb(175, 82, 222)';
const accessible_gray1 = 'rgb(142, 142, 147)';
const accessible_gray2 = 'rgb(174, 174, 178)';
const accessible_gray3 = 'rgb(199, 199, 204)';
const accessible_gray4 = 'rgb(209, 209, 214)';
const accessible_gray5 = 'rgb(229, 229, 234)';
const accessible_gray6 = 'rgb(242, 242, 247)';

// styles sorted alphabetically
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  // component styles
  tab_bar: {
    backgroundColor: 'white',
    padding: 16,
    paddingBottom: 32,
    borderTopWidth: 1,
    borderColor: gray5,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  square: {
    width: 128,
    height: 128,
    backgroundColor: gray6,
    padding: 8,
    borderRadius: 16,
  },
  settings_item: {
    backgroundColor: 'white',
    padding: 16,
    // borderBottomWidth: 1,
    borderColor: gray5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
  filter_bar: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: gray5,
  },
  // light/dark mode
  light_container: {
    backgroundColor: 'white',
    borderColor: gray5
  },
  dark_container: {
    backgroundColor: 'black',
    borderColor: dark_gray5
  },
  light_square: {
    backgroundColor: gray6
  },
  dark_square: {
    backgroundColor: dark_gray6
  },
  light_bar: {
    backgroundColor: gray6
  },
  dark_bar: {
    backgroundColor: dark_gray6
  },
  light_progress: {
    backgroundColor: blue
  },
  dark_progress: {
    backgroundColor: dark_blue
  },
  light_button: {
    backgroundColor: blue
  },
  dark_button: {
    backgroundColor: dark_blue
  },
  // text styles
  title1: {
    fontSize: 34,
    fontWeight: 'bold'
  },
  title2: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  body: {
    fontSize: 17,
  },
  label: {
    fontSize: 17
  },
  light_text: {
    color: 'black'
  },
  dark_text: {
    color: 'white'
  },
});