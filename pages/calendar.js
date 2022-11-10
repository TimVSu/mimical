import React, { useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import * as Calendar from "expo-calendar";

function Kalender() {
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        // const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        console.log("calender access granted");
        //  console.log({ calendars });
      }
    })();
  }, []);
  return (
    <TouchableOpacity onPress={() => createCalendar()}>
      <Text> Zu Kalendar hinzufügen </Text>
    </TouchableOpacity>
  );
}

async function getDefaultCalendarSource() {
  const defaultCalendar = await Calendar.getDefaultCalendarAsync();
  return defaultCalendar.source;
}

async function createCalendar(playdate, teamname, location) {
  console.log(playdate);
  const defaultCalendarSource =
    Platform.OS === "ios"
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: "CalendarName" };
  const newCalendarID = await Calendar.createCalendarAsync({
    title: "CalendarName",
    color: "red",
    timeZone: "GMT+1",
    status: Calendar.EventStatus.CONFIRMED,
    entityType: Calendar.EntityTypes.EVENT,
    sourceId: defaultCalendarSource.id,
    source: defaultCalendarSource,
    name: "internalCalendarName",
    ownerAccount: "personal",
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
    //recurrenceRule: Calendar.Frequency.DAILY,

    //frequency: Calendar.Frequency.DAILY,
    //recurrenceRule: { frequency: "DAILY", occurrence: 2 },
    // reccurenceRule: {
    //   frequency: Calendar.Frequency.DAILY,
    //   interval: 1,
    //   occurence: 4,
    // },
  });

  console.log(`Your new calendar ID is: ${newCalendarID}`);
  alert("Im Kalender gespeichert");

  // creating event with calendar ID
  let getcalid = newCalendarID;

  const newevent = await Calendar.createEventAsync(getcalid, {
    title: "EmotionAI Übung",
    startDate: new Date("2022-11-10T11:00:00.000Z"),
    endDate: new Date("2022-11-10T11:00:00.000Z"),
    //occurrence: 3,
    timeZone: "GMT+1",
    //location: "Germany",
    alarms: [{ relativeOffset: -15 }],
    status: Calendar.EventStatus.CONFIRMED,
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
    //recurrenceRule: Calendar.Frequency.DAILY,
  });
}

export default Kalender;
