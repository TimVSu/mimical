// author: Maxim Torgovitski

// import react native
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

// default light mode colors
const red = 'rgb(255, 59, 48)';
const orange = 'rgb(255, 149, 0)';
const yellow = 'rgb(255, 204, 0)';
const green = 'rgb(52, 199, 89)';
const mint = 'rgb(0, 199, 190)';
const teal = 'rgb(48, 176, 199)';
const cyan = 'rgb(50, 173, 230)';
const blue = 'rgb(0, 122, 255)';
const indigo = 'rgb(88, 86, 214)';
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
const dark_mint = 'rgb(99, 230, 226)';
const dark_cyan = 'rgb(100, 210, 255)';
const dark_blue = 'rgb(10, 132, 255)';
const dark_indigo = 'rgb(94, 92, 230)';
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

const light_primary_color = blue;
const dark_primary_color = dark_blue;
const light_background_color = 'rgb(255, 255, 255)';
const dark_background_color = 'rgb(0, 0, 0)';
export { light_primary_color, dark_primary_color, light_background_color, dark_background_color, green, gray5, gray6, dark_gray5, dark_gray6 };

// retrieve data
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('test');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    // error retrieving data
  }
}

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
    flexDirection: 'row',
    alignSelf: 'center',
  },
  // light/dark mode
  light_container: {
    backgroundColor: light_background_color,
    borderColor: gray5
  },
  dark_container: {
    backgroundColor: dark_background_color,
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
    backgroundColor: light_primary_color
  },
  dark_progress: {
    backgroundColor: dark_primary_color
  },
  light_button: {
    backgroundColor: light_primary_color
  },
  dark_button: {
    backgroundColor: dark_primary_color
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
    // fontSize: getData().fontSize
  },
  light_text: {
    color: 'black'
  },
  dark_text: {
    color: 'white'
  },
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#eaeaea',

  },
  buttonRight: {
    position: 'absolute',
    top: hp('5%'),
    right: wp('5%'),
    flexDirection: 'row',
    color: 'black',
  },
  backButton: {
    position: 'absolute',
    top: hp('5%'),
    left: wp('5%'),
    flexDirection: 'row',
    color: 'black',
  },
  createTaskButton: {
    position: 'absolute',
    bottom: hp('5%'),
    left: wp('35%'),
    width: wp('30%'),
    height: hp('8%'),
    flexDirection: 'row',
    color: 'black',
    backgroundColor: light_primary_color,
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    zIndex: 0,
  },
  taskContainer: {
    width: wp('100%'),
    height: hp('100%'),
    overFlow: 'hidden',
    backgroundColor: light_primary_color,
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

  },
  taskDescription: {
    color: light_background_color,
    marginTop: 20,
    marginBottom: 20,
    fontSize: hp('2.5%'),
  },
  horizontal: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,

  },
  taskButton: {
    marginLeft: 20,
    marginRight: 20,
  },
  time: {
    left: '85%',
    color: 'white',
    fontSize: 40,
  },
  informTime: {
    color: 'white',
    opacity: 0.5,
    fontSize: 300,
  },
  informText: {
    fontSize: 60,
    flex: 1,
    flexDirection: 'column',
  },
  informView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  camera: {
    height: '100%',
    width: '100%',
    borderRadius: 30,
    overflow: 'hidden',
  },
  camContainer: {
    borderRadius: 30,
    overflow: 'hidden',

  },
  btnTabActive: {
    backgroundColor: light_primary_color,
    color: "#fff"

  },
  levelText: {
    fontSize: 25,
    lineHeight: 50,
  },
  levelHighlightedText: {
    fontSize: 25,
    lineHeight: 50,
    color: light_primary_color,

  },

});