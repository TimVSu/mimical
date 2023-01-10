// authors: Tim Suchan, Maxim Torgovitski

// import react native
import { ScrollView, Text, useColorScheme, View } from "react-native";

// import components
import Button from "../components/button";
import styles from "../components/styles";

// import icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

// colors
const green = "rgb(52, 199, 89)";
const blue = "rgb(0, 122, 255)";
const gray4 = "rgb(209, 209, 214)";
const gray5 = "rgb(229, 229, 234)";
const gray6 = "rgb(242, 242, 247)";

// return home page
const Home = ({ navigation }) => {

  const colorScheme = useColorScheme();
  const containerColor = colorScheme === "light" ? styles.light_container : styles.dark_container;
  const squareColor = colorScheme === "light" ? styles.light_square : styles.dark_square;
  const textColor = colorScheme === "light" ? styles.light_text : styles.dark_text;

  return (
    <View style={[{ flex: 1 }, containerColor]}>
      <View style={[{ flex: 1 }, containerColor, { justifyContent: "center" }, { alignItems: "center" },]}      >
        <View style={[{ backgroundColor: gray6 }, { width: 256 }, { height: 256 }, { borderRadius: 16 }, { borderBottomColor: gray4 }, { padding: 16 }, { margin: 8 }, { justifyContent: "flex-end" }, squareColor,]}        >
          <Text style={[{ fontSize: 32 }, { color: gray4 }, { opacity: 0.5 }, textColor,]}>Szenario</Text>
          <Text style={[{ fontSize: 16 }, { color: gray4 }, { opacity: 0.5 }, textColor,]}>Übung</Text>
        </View>
        <Button
          icon={faPlay}
          label="Szenario fortsetzen"
          navigation={navigation}
          target={"Menu"}
        />
        <Button
          icon={faHouse}
          label="Übersicht"
          navigation={navigation}
          target={"Menu"}
        />
      </View>
      <View style={[{ borderTopWidth: 1 }, { width: "100%" }, containerColor]}>
        <ScrollView>
          {/* <Button
            icon={faUser}
            label="Log in"
            navigation={navigation}
            target={"Login"}
          /> */}
          <Button
            icon={faUser}
            label="Log in"
            navigation={navigation}
            target={"HomeLogin"}
          />
        </ScrollView>
      </View>
    </View>
  );

};

export default Home;