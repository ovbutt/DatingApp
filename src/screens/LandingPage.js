import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class MainScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("./../images/landingBG.png")}
          style={{ height: "100%", width: "100%" }}
        >
          <View style={{ marginTop: 150, marginLeft: 30 }}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 36,
                width: "60%"
              }}
            >
              Find new friends nearby
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "white",
                width: "80%",
                marginTop: 20
              }}
            >
              With millions of users all over the world, we give you the ability
              to connect with people no matter where you are.
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Image source={require("./../images/LoginButton1.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Signup")}
            >
              <Image
                source={require("./../images/SignUpButton.png")}
                style={{ marginTop: 10 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 35
            }}
          >
            <Text style={{ color: "#e0e0e0", fontSize: 15 }}>
              Or log in with
            </Text>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Icon name="logo-facebook" size={25} color="white" />
              <Icon
                name="logo-twitter"
                size={25}
                color="white"
                style={{ marginLeft: 20 }}
              />
              <Icon
                name="logo-googleplus"
                size={25}
                color="white"
                style={{ marginLeft: 20 }}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
