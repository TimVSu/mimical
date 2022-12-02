import React, { Component } from "react";
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Text,
} from "react-native";
import styleu from "../styles/stylesu";
import Feather from "react-native-vector-icons/Feather";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPw: "",
      check_textInputChange: false,
      secureTextEntry: true,
      confirmSecureTextEntry: true,
    };
  }

  InsertRecord = () => {
    var Email = this.state.email;
    var Password = this.state.password;
    var ConfirmPw = this.state.confirmPw;
    var checkEmail = RegExp(
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i
    );

    //Check if Email is provided
    if (Email.length == 0 || Password.length == 0 || ConfirmPw.length == 0) {
      alert("Required Field Is Missing!!!");
    } else if (!checkEmail.test(Email)) {
      alert("invalid email!!!");
    }

    // Password validations
    else if (Password.length < 8) {
      alert("Minimum 08 characters required!!!");
    } else if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(Password)) {
      alert("Use atleast 01 special character!!!");
    } else if (/[ ]/.test(Password)) {
      alert("Don't include space in password!!!");
    } else if (Password !== ConfirmPw) {
      alert("Password doesnot match!!!");
    } else {
      //API to render signup screen
      var InsertAPIURL = "http://10.0.2.2:80/SignUp.php";

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      var Data = {
        Email: Email,
        Password: Password,
      };

      //Fetch function
      fetch(InsertAPIURL, {
        method: "POST",
        headers: headers,
        //convert data to JSON
        body: JSON.stringify(Data),
      })
        //Check response type of API
        .then((response) => response.json())
        .then((response) => {
          // If data is in JSON -> Display alert message
          alert(response[0].Message);
          //Navigate to next screen if authentications are valid
          this.props.navigation.navigate("Sign In");
        })
        .catch((error) => {
          alert("Error Occured" + error);
        });
    }
  };

  updateSecureTextEntry() {
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  updateConfirmSecureTextEntry() {
    this.setState({
      ...this.state,
      confirmSecureTextEntry: !this.state.confirmSecureTextEntry,
    });
  }

  render() {
    return (
      <View style={styleu.viewStyle}>
        <View style={styleu.action}>
          <TextInput
            placeholder="Email eingeben"
            placeholderTextColor="#ff0000"
            style={styleu.textInput}
            onChangeText={(email) => this.setState({ email })}
          />
        </View>
        <View style={styleu.action}>
          <TextInput
            placeholder="Passwort eingeben"
            placeholderTextColor="#ff0000"
            secureTextEntry={this.state.secureTextEntry ? true : false}
            style={styleu.textInput}
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
        <View style={styleu.action}>
          <TextInput
            placeholder="Passwort wiederholen"
            placeholderTextColor="#ff0000"
            style={styleu.textInput}
            onChangeText={(confirmPw) => this.setState({ confirmPw })}
            secureTextEntry={this.state.confirmSecureTextEntry ? true : false}
          />
          <TouchableOpacity
            onPress={this.updateConfirmSecureTextEntry.bind(this)}
          >
            {this.state.confirmSecureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="black" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styleu.loginButtonSection}>
          <Pressable
            style={styleu.loginButton}
            onPress={() => {
              this.InsertRecord();
            }}
          >
            <Text style={styleu.text}>Anmelden</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}
