// authors: Tim Suchan, Maxim Torgovitski

// import react native
import { Pressable, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';

// import components
import Button from '../components/button';
import styles from '../components/styles';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

// colors
const green = 'rgb(52, 199, 89)';
const blue = 'rgb(0, 122, 255)';
const gray4 = 'rgb(209, 209, 214)';
const gray5 = 'rgb(229, 229, 234)';
const gray6 = 'rgb(242, 242, 247)';

// return home page
const Home = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
  const squareColor = colorScheme === 'light' ? styles.light_square : styles.dark_square;
  const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
  return (
    <View style={[{ backgroundColor: 'white' }, { flex: 1 }, { justifyContent: 'center' }, { alignItems: 'center' }, containerColor]}>
      <View style={[{ backgroundColor: gray6 }, { width: 256 }, { height: 256 }, { borderRadius: 16 }, { borderBottomColor: gray4 }, { padding: 16 }, { marginTop: 128 }, { marginBottom: 8 }, { justifyContent: 'flex-end' }, squareColor]}>
        <Text style={[{ fontSize: 32 }, { color: gray4 }, { opacity: 0.5 }, textColor]}>Szenario</Text>
        <Text style={[{ fontSize: 16 }, { color: gray4 }, { opacity: 0.5 }, textColor]}>Übung</Text>
      </View>
      {/* <Button icon={faPlay} text="Continue Scenario" navigation={navigation} />
      <Button icon={faHouse} text="Menu" navigation={navigation} /> */}
      <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : blue }, { padding: 16 }, { margin: 8 }, { borderRadius: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]}>
        <FontAwesomeIcon style={{ marginRight: 8 }} icon={faPlay} color='white' />
        <Text style={[{ fontSize: 16 }, { color: 'white' }]}>Szenario fortsetzen</Text>
      </Pressable>
      <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : blue }, { padding: 16 }, { margin: 8 }, { marginBottom: 32 }, { borderRadius: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]} onPress={() => navigation.navigate('Menu')}>
        <FontAwesomeIcon style={{ marginRight: 8 }} icon={faHouse} color='white' />
        <Text style={[{ fontSize: 16 }, { color: 'white' }]}>Übersicht</Text>
      </Pressable>
      <View style={[{ borderTopWidth: 1 }, { borderTopColor: gray5 }, { width: '100%' }]}>
        <ScrollView>
          <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : blue }, { padding: 16 }, { margin: 8 }, { marginTop: 32 }, { marginLeft: 16 }, { marginRight: 16 }, { borderRadius: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]} onPress={() => navigation.navigate('Login')}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faUser} color='white' />
            <Text style={[{ fontSize: 16 }, { color: 'white' }]}>Log in</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : blue }, { padding: 16 }, { margin: 8 }, { marginLeft: 16 }, { marginRight: 16 }, { borderRadius: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]} onPress={() => navigation.navigate('Level')}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faCamera} color='white' />
            <Text style={[{ fontSize: 16 }, { color: 'white' }]}>Cam Preview</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : blue }, { padding: 16 }, { margin: 8 }, { marginLeft: 16 }, { marginRight: 16 }, { borderRadius: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]} onPress={() => navigation.navigate('Settings')}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faGear} color='white' />
            <Text style={[{ fontSize: 16 }, { color: 'white' }]}>Einstellungen</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : blue }, { padding: 16 }, { margin: 8 }, { marginLeft: 16 }, { marginRight: 16 }, { borderRadius: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]} onPress={() => navigation.navigate('Notifications')}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faBell} color='white' />
            <Text style={[{ fontSize: 16 }, { color: 'white' }]}>Mitteilungen</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : blue }, { padding: 16 }, { margin: 8 }, { marginLeft: 16 }, { marginRight: 16 }, { borderRadius: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]} onPress={() => navigation.navigate('Calendar')}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faCalendar} color='white' />
            <Text style={[{ fontSize: 16 }, { color: 'white' }]}>Kalendar</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
}

export default Home;