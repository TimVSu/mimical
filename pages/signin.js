//Author Stoil Iliev
import React, { Component } from "react";
import {
  View,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import axios from "axios";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      check_textInputChange: false,
      secureTextEntry: true,
    };
  }

  signin = async () => {
    var Email = this.state.email;
    var Password = this.state.password;

    //Check if Email is provided
    if (Email.length == 0 || Password.length == 0) {
      alert("Email fehlt");
    } else {
      //API to render login screen

      var Data = {
        Email: Email,
        Password: Password,
      };
      //Check if account exists
      await axios({
        method: "post",
        data: {
          Email: Email,
          Password: Password,
        },
        // Must be changed depending on device for testing
        url: "http://192.168.1.98:3000/api/signin",
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      //Navigate to next screen if authentications are valid
      //this.props.navigation.navigate("HomeLogin");
    }
  };

  updateSecureTextEntry() {
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  render() {
    return (
      <View style={stylei.viewStyle}>
        <View style={stylei.action}>
          <TextInput
            placeholder="Ihr Email"
            placeholderTextColor="#ff0000"
            style={stylei.textInput}
            onChangeText={(email) => this.setState({ email })}
          />
        </View>

        <View style={stylei.action}>
          <TextInput
            placeholder="Ihr Passwort"
            placeholderTextColor="#ff0000"
            style={stylei.textInput}
            secureTextEntry={this.state.secureTextEntry ? true : false}
            onChangeText={(password) => this.setState({ password })}
          />
          <TouchableOpacity onPress={this.updateSecureTextEntry.bind(this)}>
            {this.state.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="black" size={20} />
            )}
          </TouchableOpacity>
        </View>

        {/* Button */}

        <View style={stylei.loginButtonSection}>
          <Pressable
            style={stylei.loginButton}
            onPress={() => {
              this.signin();
            }}
          >
            <Text style={stylei.text}>Einloggen</Text>
          </Pressable>
        </View>

        <View style={stylei.loginButtonSection}>
          <Pressable
            style={stylei.loginButton}
            onPress={() => {
              this.props.navigation.navigate("Sign Up");
            }}
          >
            <Text style={stylei.text}>Anmelden</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const stylei = StyleSheet.create({
  viewStyle: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  textInput: {
    borderBottomColor: "#ff0000",
    borderBottomWidth: 1,
    marginBottom: 50,
    height: 40,
    fontSize: 20,
    flex: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 150,
    borderRadius: 10,
    backgroundColor: "black",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    paddingBottom: 5,
    width: "100%",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textTransform: "uppercase",
  },
  loginButtonSection: {
    width: "100%",
    // height: '30%',
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#06baab",
    color: "white",
    height: 35,
    justifyContent: "center", //up dwn
    alignItems: "center", //r & l
    width: "70%",
    borderRadius: 10,
  },
});
