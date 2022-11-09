import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button, //only on Android
  Alert,
  Platform,
  Dimensions,
} from "react-native";

export default function App() {
  //let x = 1;
  //console.log("App executed");

  //x.toString;

  const handlePress = () => console.log("Text pressed");

  console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      {/* <Text numberOfLines={1} onPress={() => console.log("Text clicked")}> */}
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native!
      </Text>
      {/* <Image source={require("./assets/icon.png")} /> */}
      <TouchableOpacity onPress={() => console.log("Image tapped")}>
        <Image
          //blurRadius={10}
          //fadeDuration={1000} //only on Android
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>
      {/* <StatusBar style="auto" /> */}
      <Button
        color={"red"}
        title="Click Me"
        //onPress={() => console.log("Button pressed")}
        onPress={
          () =>
            Alert.alert("Button tapped", "Now what?", [
              { text: "Yeah", onPress: () => console.log("Yes") },
              { text: "Nah", onPress: () => console.log("No") },
            ])

          // Alert.prompt(
          //   "Do you see it behind you?",
          //   "Because you should",
          //   (text) => console.log(text) //only iOS
          // )
        }
      />
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "50%",
          height: 70,
        }}
      ></View>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    //alignItems: "center",
    //justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
