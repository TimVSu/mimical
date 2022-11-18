//@Author: Stoil Iliev
import React, { useEffect } from "react";
import { View, StyleSheet, Image, Text, Button } from "react-native";
import * as Calendar from "expo-calendar";

function Kalender() {
  useEffect(() => {
    (async () => {
      //Ask for permission
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        //const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        console.log("calender access granted");
        //console.log({ calendars });
      }
    })();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {/* Add events to device calendar */}
      <Button
        title="Termin zum Kalendar hinzufügen"
        onPress={() => createCalendar()}
      ></Button>
    </View>
  );
}

async function getDefaultCalendarSource() {
  const defaultCalendar = await Calendar.getDefaultCalendarAsync();
  return defaultCalendar.source;
}

//Creates a new expo calendar
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
  });

  //Inform User that events are saved
  console.log(`Your new calendar ID is: ${newCalendarID}`);
  alert("Im Kalender gespeichert");

  //Creates event with calendar ID
  let getcalid = newCalendarID;

  //Add events filled with defined data
  const newevent = await Calendar.createEventAsync(getcalid, {
    title: "EmotionAI Übung",
    startDate: new Date("2022-11-18T17:00:00.000Z"),
    endDate: new Date("2022-11-18T17:00:00.000Z"),
    timeZone: "GMT+1",
    //location: "Germany",
    alarms: [{ relativeOffset: -15 }],
    status: Calendar.EventStatus.CONFIRMED,
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
    recurrenceRule: {
      frequency: Calendar.Frequency.DAILY,
      occurence: 4,
      //interval: 1,
    },
  });
}

export default Kalender;
