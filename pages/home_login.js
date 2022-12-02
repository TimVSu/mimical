//@Author Stoil Iliev
import React, { Component } from "react";
import { Button } from "react-native";
import { Center } from "native-base";

const HomeLogin = ({ navigation }) => {
  return (
    <>
      <Center mt="10">
        <Button
          mt="5"
          title="Sign In"
          onPress={() => navigation.navigate("Sign In")}
        />
      </Center>

      <Center mt="10">
        <Button
          mt="5"
          title="Sign Up"
          onPress={() => navigation.navigate("Sign Up")}
        />
      </Center>
    </>
  );
};

export default HomeLogin;
