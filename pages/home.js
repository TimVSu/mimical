import { Pressable, StyleSheet, Text, View } from 'react-native';
import Square from '../components/square';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/button';

const green = 'rgb(52, 199, 89)';
const blue = 'rgb(0, 122, 255)';
const gray4 = 'rgb(209, 209, 214)';
const gray5 = 'rgb(229, 229, 234)';
const gray6 = 'rgb(242, 242, 247)';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.label}>Scenario</Text>
      </View>
      {/* <Button icon={faPlay} text="Continue Scenario" />
      <Button icon={faHouse} text="Menu" /> */}
      <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : blue }, { padding: 16 }, { margin: 8 }, { borderRadius: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]}>
        <FontAwesomeIcon style={{ marginRight: 8 }} icon={faPlay} color='white' />
        <Text style={styles.text}>Continue Scenario</Text>
      </Pressable>
      <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : blue }, { padding: 16 }, { margin: 8 }, { marginBottom: 32 }, { borderRadius: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]} onPress={() => navigation.navigate('Menu')}>
        <FontAwesomeIcon style={{ marginRight: 8 }} icon={faHouse} color='white' />
        <Text style={styles.text}>Menu</Text>
      </Pressable>
      <View style={[{ borderTopWidth: 1 }, { borderTopColor: gray5 }, { width: '100%' }]}>
        <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : blue }, { padding: 16 }, { margin: 8 }, { marginTop: 32 }, { marginLeft: 16 }, { marginRight: 16 }, { borderRadius: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]} onPress={() => navigation.navigate('Login')}>
          <FontAwesomeIcon style={{ marginRight: 8 }} icon={faUser} color='white' />
          <Text style={styles.text}>Log in</Text>
        </Pressable>
        <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : blue }, { padding: 16 }, { margin: 8 }, { marginLeft: 16 }, { marginRight: 16 }, { borderRadius: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]} onPress={() => navigation.navigate('Level')}>
          <FontAwesomeIcon style={{ marginRight: 8 }} icon={faCamera} color='white' />
          <Text style={styles.text}>Cam Preview</Text>
        </Pressable>
        <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? green : blue }, { padding: 16 }, { margin: 8 }, { marginLeft: 16 }, { marginRight: 16 }, { borderRadius: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]} onPress={() => navigation.navigate('Settings')}>
          <FontAwesomeIcon style={{ marginRight: 8 }} icon={faGear} color='white' />
          <Text style={styles.text}>Settings</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    backgroundColor: 'white',
    // padding: 32,
    // margin: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 32,
    // margin: 8,
    // marginTop: 8,
    // marginBottom: 8,
    color: gray4
    // textAlign: 'center'
  },
  button: {
    backgroundColor: blue,
    padding: 16,
    margin: 8,
    borderRadius: 8
  },
  text: {
    fontSize: 16,
    color: 'white'
  },
  square: {
    backgroundColor: gray6,
    width: 256,
    height: 256,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: gray4,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  }
});