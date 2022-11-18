//@Author: Stoil Iliev
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform, Alert } from "react-native";
import * as RootNavigation from "../components/root_navigation";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

//Using expo notifications
export default function Notification() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
        console.log(notification);
      });

    //Check for response
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        //console.log(response);
        console.log("opened");

        //redirect to Home Screen
        RootNavigation.navigate("Home");
        alert("ok");
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Text>Einstellungen für Benachrichtigungen: {expoPushToken}</Text>
      {/* <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>
          Title: {notification && notification.request.content.title}{" "}
        </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>
          Data:{" "}
          {notification && JSON.stringify(notification.request.content.data)}
        </Text>
      </View> */}
      {/* Set up Notifications */}
      <Button
        title="Ich möchte tägliche Reminder um 11 Uhr"
        onPress={async () => {
          await schedulePushMorningNotification();
        }}
      />
      <Button
        title="Ich möchte einen täglichen Reminder um 18 Uhr"
        onPress={async () => {
          await schedulePushEveningNotification();
          //await Notifications.cancelAllScheduledNotificationsAsync("one");
        }}
      />
      {/* Cancel all Notifications */}
      <Button
        title="Ich möchte keine Benachrichtigungen mehr"
        onPress={() => {
          Alert.alert("Benachrichtigungen ausschalten", "Sind Sie sicher?", [
            {
              text: "Ja",
              onPress: () => {
                console.log("Notifications cancelled"),
                  Notifications.cancelAllScheduledNotificationsAsync();
              },
            },
            {
              text: "Abbrechen",
              onPress: () => console.log("Continued notifications"),
            },
          ]);
        }}
      />
    </View>
  );
}

//Schedules one or several notifications
async function schedulePushMorningNotification(time) {
  await Notifications.scheduleNotificationAsync({
    identifier: "one",
    content: {
      title: "EmotionAI",
      body: "Es ist Zeit für eine Übung!",
      data: { data: "tba" },
    },
    trigger: {
      //seconds: 5,
      hour: 11,
      minute: 0,
      repeats: true,
    },
  });
}

async function schedulePushEveningNotification(time) {
  await Notifications.scheduleNotificationAsync({
    identifier: "two",
    content: {
      title: "Zeit für Übung",
      //subtitle: "Test",
      body: "Es ist Zeit für eine Übung!",
      sound: true,
      //data: {
      //  to: "new-log",
      //},
      color: "#000000",
    },
    trigger: {
      //seconds: 10,
      hour: 18,
      minute: 0,
      repeats: true,
    },
  });
}

//Registers the notifications on the device
async function registerForPushNotificationsAsync() {
  let token;

  //Additional settings available only on Android
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
      bypassDnd: false,
      lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
      sound: true,
    });
  }

  //Notifications work properly only on physical devices
  //Subsequently ask/check for permissions
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Benutzen Sie bitte ein physisches Gerät");
  }

  return token;
}

//Cancels a single scheduled notification

async function CancelPushNotifications() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}
