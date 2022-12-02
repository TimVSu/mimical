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
import stylei from "../Database/styles/stylesi";
import Feather from "react-native-vector-icons/Feather";

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

  InsertRecord = () => {
    var Email = this.state.email;
    var Password = this.state.password;

    //Check if Email is provided
    if (Email.length == 0 || Password.length == 0) {
      alert("Required Field Is Missing!!!");
    } else {
      //API to render login screen
      var APIURL = "http://10.0.2.2:80/login.php";

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      var Data = {
        Email: Email,
        Password: Password,
      };

      //Fetch function
      fetch(APIURL, {
        method: "POST",
        headers: headers,
        //convert data to JSON
        body: JSON.stringify(Data),
      })
        //Check response type of API
        .then((Response) => Response.json())
        .then((Response) => {
          // If data is in JSON -> Display alert message
          alert(Response[0].Message);
          if (Response[0].Message == "Success") {
            console.log("true");
            //Navigate to next screen if authentications are valid
            this.props.navigation.navigate("HomeL");
          }
          console.log(Data);
        })
        .catch((error) => {
          console.error("ERROR FOUND" + error);
        });
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
              this.InsertRecord();
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
