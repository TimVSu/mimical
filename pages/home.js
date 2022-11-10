import { Button } from "react-native";
import { Center } from "native-base";

const Home = ({ navigation }) => {
  return (
    <>
      <Center mt="10">
        <Button
          mt="5"
          title="login"
          onPress={() => navigation.navigate("Login")}
        />
      </Center>
      <Center mt="10">
        <Button
          mt="5"
          title="cam Preview"
          onPress={() => navigation.navigate("Level")}
        />
      </Center>
      <Center mt="10">
        <Button
          mt="5"
          title="Notifications"
          onPress={() => navigation.navigate("Notifications")}
        />
      </Center>
      <Center mt="10">
        <Button
          mt="5"
          title="Calendar"
          onPress={() => navigation.navigate("Calendar")}
        />
      </Center>
    </>
  );
};

export default Home;
