// authors: Tim Suchan, Maxim Torgovitski

// import react native
import { ScrollView, Text, useColorScheme, View, } from "react-native";

// import components
import Button from "../components/button";
import styles from "../components/styles";

// import icons
import { faBell, faCalendar, faCamera, faChartSimple, faGear, faHouse, faPlay, faUser } from "@fortawesome/free-solid-svg-icons";

// return home page
const Home = ({ navigation }) => {

  const colorScheme = useColorScheme();
  const containerColor = colorScheme === "light" ? styles.light_container : styles.dark_container;
  const squareColor = colorScheme === "light" ? styles.light_square : styles.dark_square;
  const textColor = colorScheme === "light" ? styles.light_text : styles.dark_text;

  return (
    <View style={[{ flex: 1 }, containerColor]}>
      <View style={[{ flex: 1 }, containerColor, { justifyContent: "center" }, { alignItems: "center" },]}>
        <View style={[squareColor, { width: 256 }, { height: 256 }, { borderRadius: 16 }, { padding: 16 }, { margin: 8 }, { justifyContent: "flex-end" }]}>
          <Text style={[{ fontSize: 32 }, textColor, { opacity: 0.5 }]}>Szenario</Text>
          <Text style={[{ fontSize: 16 }, textColor, { opacity: 0.5 }]}>Übung</Text>
        </View>
        <View>
          <Button icon={faPlay} label="Szenario fortsetzen" navigation={navigation} target={"Menu"} />
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