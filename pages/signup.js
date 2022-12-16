import React, { Component } from "react";
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Text,
} from "react-native";
import styleu from "../backend/stylesu";
import Feather from "react-native-vector-icons/Feather";
import axios from "axios";

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

  signup = async () => {
    var Email = this.state.email;
    var Password = this.state.password;
    var ConfirmPw = this.state.confirmPw;

    var checkEmail = RegExp(
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i
    );

    //Check if Email is provided
    if (Email.length == 0 || Password.length == 0 || ConfirmPw.length == 0) {
      alert("Email fehlt");
    } else if (!checkEmail.test(Email)) {
      alert("Kein Email");
    }

    // Password validations
    else if (Password.length < 8) {
      alert("Mindestens 8 Zeichen");
    } else if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(Password)) {
      alert("Mindestens ein Sonderzeichen");
    } else if (/[ ]/.test(Password)) {
      alert("Ohne Leerschritt");
    } else if (Password !== ConfirmPw) {
      alert("Passwörter stimmen nicht {berein");
    } else {
      await axios({
        method: "post",
        data: {
          Email: Email,
          Password: Password,
        },
        // Must be changed depending on device for testing
        url: "http://192.168.1.98:3000/api/signup",
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
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
              this.signup();
              //this.props.navigation.navigate("HomeLogin");
            }}
          >
            <Text style={styleu.text}>Anmelden</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}
