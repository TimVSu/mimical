// author: Maxim Torgovitski

// import react native
import { ScrollView, View, Switch, StyleSheet, Text, TouchableOpacity, Alert, Modal, Animated } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';

// import components
import NavBar from '../components/nav_bar.js';
import TabBar from '../components/tab_bar.js';
import CustomButton from '../components/customButton'
import SettingsItem from '../components/settings_item.js';
import { SelectList } from 'react-native-dropdown-select-list'

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

// colors
const green = 'rgb(52, 199, 89)';
const blue = 'rgb(0, 122, 255)';
const gray4 = 'rgb(209, 209, 214)';
const gray5 = 'rgb(229, 229, 234)';
const gray6 = 'rgb(242, 242, 247)';

// Languages
  
const data_lang = [
    {key:'1', value:'Deutsch'},
    {key:'2', value:'Englisch', disabled:true},
    {key:'3', value:'Französisch', disabled:true},
    {key:'4', value:'Spanisch', disabled:true},
]

const data_fontsize = [
  {key:'1', value:'Klein'},
  {key:'2', value:'Mittel',},
  {key:'3', value:'Groß',},
]

const data_noti = [
  {key:'1', value:'3-Mal am Tag'},
  {key:'2', value:'1-Mal am Tag',},
  {key:'3', value:'3-Mal die Woche',},
]

// return settings page
const SettingsPage = ({ navigation }) => {


  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [lang_selected, lang_setSelected] = useState(false);

  const [size_selected, size_setSelected] = useState(false);

  const [noti_selected, noti_setSelected] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <NavBar page_title="Einstellungen" />
      <ScrollView>
        {/* <SettingsItem icon={faCamera} label="Einstellung 1" toggle={faToggleOn} toggle_color={green} />
        <SettingsItem icon={faBell} label="Einstellung 2" toggle={faToggleOff} toggle_color={gray4} />
        <SettingsItem icon={faSquare} label="Einstellung 3" toggle={faToggleOff} toggle_color={gray4} />
        <SettingsItem icon={faSquare} label="Einstellung 4" toggle={faToggleOff} toggle_color={gray4} />
        <SettingsItem icon={faSquare} label="Einstellung 5" toggle={faToggleOff} toggle_color={gray4} />
        <SettingsItem icon={faSquare} label="Einstellung 6" toggle={faToggleOff} toggle_color={gray4} />
        <SettingsItem icon={faSquare} label="Einstellung 7" toggle={faToggleOff} toggle_color={gray4} />
        <SettingsItem icon={faSquare} label="Einstellung 8" toggle={faToggleOff} toggle_color={gray4} /> */}
        
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Einstellungen abgeschlossen!");
            setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={[styles.modalView, {}]}>

                    <Text style={styles.modalText}>Benachrichtigungen</Text>
                    <View style={styles.container}>
                    <SelectList 
                          setSelected={(value) => lang_setSelected(value)} 
                          placeholder={"Wie oft wollen Sie benachrichtigt werden?"}
                          data={data_noti}
                          save="value"
                          search={false}
                          boxStyles= {{
                            // height: 75,
                            marginTop: 40,
                            borderBottomWidth: 0.5,
                            borderColor: gray5,
                            backgroundColor: 'white'
                          }}
                          dropdownTextStyles= {{
                            
                          }}
                          dropdownStyles= {{
                            borderBottomWidth: 0.5,
                            borderColor: gray5,
                            backgroundColor: 'white'
                          }}
                        />

                        <View style={styles.container}>
                          <View style={styles.switchView}>
                            <Text>Keine Benachrichtigungen</Text>
                            <Switch
                              trackColor={{ false: "#00ccff", true: "#757575" }}
                              thumbColor={isEnabled ? "#000000" : "#0000ff"}
                              ios_backgroundColor="#3e3e3e"
                              onValueChange={toggleSwitch}
                              value={isEnabled}
                            />
                          </View>
                        </View>
                    </View>
                    

                    <View style={styles.buttonView}>
                        
                        <CustomButton text='Weiter' color="skyblue"/>
                        <CustomButton text='Zurück' onPress={() => setModalVisible(false)} color="red" />

                    </View>
                    
                </View>
            </View>
        </Modal>

        <SelectList 
          setSelected={(value) => lang_setSelected(value)} 
          placeholder={"Wähle eine Sprache"}
          data={data_lang}
          save="value"
          search={false}
          boxStyles= {{
            height: 75,
            borderBottomWidth: 0.5,
            borderColor: gray5,
            backgroundColor: 'white',
            alignItems: "center"
          }}
          dropdownTextStyles= {{
            
          }}
          dropdownStyles= {{
            borderBottomWidth: 0.5,
            borderColor: gray5,
            backgroundColor: 'white'
          }}
        />

        <SelectList 
          setSelected={(value) => size_setSelected(value)} 
          placeholder={"Wähle eine Größe"}
          data={data_fontsize}
          save="value"
          search={false}
          boxStyles= {{
            height: 75,
            borderBottomWidth: 0.5,
            borderColor: gray5,
            backgroundColor: 'white',
            alignItems: "center"
          }}
          dropdownStyles= {{
            borderBottomWidth: 0.5,
            borderColor: gray5,
            backgroundColor: 'white'
          }}
        />

        <View style={styles.container}>
          <View style={styles.switchView}>
            <Text>  Dark Mode</Text>
            <Switch
              trackColor={{ false: "#81b0ff", true: "#767577" }}
              thumbColor={isEnabled ? "#f4f3f4" : "skyblue"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.switchView}>

            <Text>  Benachrichtigungen</Text>

            <TouchableOpacity onPress={() => setModalVisible(true)}>

              <View style={styles.circle}>
                <Text> Mehr </Text>
              </View>

            </TouchableOpacity>

          </View>
        </View>

        <View style={styles.container_button}>

            <CustomButton
              text='Fertig'
              color="skyblue"
            />

        </View>

      </ScrollView>
      <TabBar home={gray4} stats={gray4} settings={blue} navigation={navigation} />
    </View>
  );
}

export default SettingsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_button: {
    flex: 1,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: gray5,
    backgroundColor: 'white'
  },
  switchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: gray5,
    backgroundColor: 'white'
  },
  circle: {
      width: 60,
      height: 40,
      borderRadius: 40 / 2,
      backgroundColor: '#00ccff',
      alignItems: 'center',
      justifyContent: 'center'
  },
  centeredView: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  modalView: {
    flex: 0.9,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 50,
      height: 100
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24

  },
  buttonView: {
    paddingTop:100,
    flex: 1,
    flexDirection: "row"
  }
});