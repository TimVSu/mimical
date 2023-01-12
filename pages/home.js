// authors: Tim Suchan, Maxim Torgovitski

// import react native
import { ScrollView, Text, TouchableOpacity, useColorScheme, View, } from "react-native";

// import components
import Button from "../components/button";
import styles from "../components/styles";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons'; 

// import icons
import { faChartSimple, faGear, faHouse, faPlay} from "@fortawesome/free-solid-svg-icons";
import Exercise from "../components/exercise";
import { getIcon, getScenario, getScenarioFromTask } from "../components/contentManager";

// return home page
const Home = ({ navigation }) => {

  const { getItem, setItem } = useAsyncStorage('lastTask');
  const [nextTask, setNextTask] = useState(1);
  const [completions, setCompletions ] = useState({});
  const [fetchCompleted, setFetchCompleted] = useState(false);

  const readItemFromStorage = async () => {
    try {
      const item = await getItem();
      if (item){
      setNextTask(parseInt(item) + 1);
      setFetchCompleted(true);
      }
    }
    catch {
    }
  }

  const fetchCompletions = async () => {
    try {
      const item = await AsyncStorage.getItem('@completions')
      if (item){
      setCompletions(JSON.parse(item));
      }
      
    } catch(e) {
      // read error
    }
      }

  useEffect(() => {
    readItemFromStorage();
    fetchCompletions();
  }, []);

  useFocusEffect(
    useCallback(() => {
     readItemFromStorage();
     fetchCompletions();
    }, [])
  );


  // light/dark mode
  const colorScheme = useColorScheme();
  const containerColor = colorScheme === "light" ? styles.light_container : styles.dark_container;
  const squareColor = colorScheme === "light" ? styles.light_square : styles.dark_square;
  const textColor = colorScheme === "light" ? styles.light_text : styles.dark_text;

  // language
  const language = "german";

  return (
    <View style={[{ flex: 1 }, containerColor]}>
      <View style={[{ flex: 1 }, containerColor, { justifyContent: "center" }, { alignItems: "center" },]}>
        {fetchCompleted &&
        <Exercise
          level={getScenario(getScenarioFromTask(nextTask)).indexOf(nextTask) + 1}
          key={nextTask}
          icon={getIcon(getScenarioFromTask(nextTask))}
          navigation={navigation}
          unlocked={true}
          completed={Object.keys(completions).includes(nextTask.toString())}
          scenarioKey={getScenarioFromTask(nextTask)}
          fromHomeScreen={true}>
        </Exercise>}
        <View>
          <Button icon={faHouse} label="Übersicht" navigation={navigation} target={"Menu"} />
          <Button icon={faChartSimple} label="Fortschritt" navigation={navigation} target={"Progress"} />
          <Button icon={faGear} label="Einstellungen" navigation={navigation} target={"Settings"} />
        </View>
      </View>
      {/* <View style={[{ borderTopWidth: 1 }, { width: "100%" }, containerColor]}>
        <ScrollView>
          <Button icon={faUser} label="Log in" navigation={navigation} target={"Login"} />
          <Button icon={faUser} label="Log in" navigation={navigation} target={"HomeL"} />
          <Button icon={faCamera} label="Cam Preview" navigation={navigation} target={"Level"} />
          <Button icon={faBell} label="Notifications" navigation={navigation} target={"Notifications"} />
          <Button icon={faCalendar} label="Calendar" navigation={navigation} target={"Calendar"} />
        </ScrollView>
      </View> */}
    </View>
  );

};

export default Home;