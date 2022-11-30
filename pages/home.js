import React, { Component } from "react";
import { Button } from "react-native";
import { Center } from "native-base";

const Home = ({ navigation }) => {
  return (
    <View style={[{ flex: 1 }, containerColor]}>
      <View
        style={[
          { flex: 1 },
          containerColor,
          { justifyContent: "center" },
          { alignItems: "center" },
        ]}
      >
        <View
          style={[
            { backgroundColor: gray6 },
            { width: 256 },
            { height: 256 },
            { borderRadius: 16 },
            { borderBottomColor: gray4 },
            { padding: 16 },
            { margin: 8 },
            { justifyContent: "flex-end" },
            squareColor,
          ]}
        >
          <Text
            style={[
              { fontSize: 32 },
              { color: gray4 },
              { opacity: 0.5 },
              textColor,
            ]}
          >
            Szenario
          </Text>
          <Text
            style={[
              { fontSize: 16 },
              { color: gray4 },
              { opacity: 0.5 },
              textColor,
            ]}
          >
            Übung
          </Text>
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
          <Button
            icon={faUser}
            label="Log in"
            navigation={navigation}
            target={"Login"}
          />
          <Button
            icon={faCamera}
            label="Cam Preview"
            navigation={navigation}
            target={"Level"}
          />
          <Button
            icon={faBell}
            label="Notifications"
            navigation={navigation}
            target={"Notifications"}
          />
          <Button
            icon={faCalendar}
            label="Calendar"
            navigation={navigation}
            target={"Calendar"}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
