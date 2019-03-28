import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

export default class EditProfile extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#242a38" }}>
        <Icon
          name="ios-arrow-round-back"
          size={30}
          color="white"
          style={{ marginTop: 20, marginLeft: 20 }}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 30,
            marginTop: 20,
            marginLeft: 20,
            fontWeight: "bold"
          }}
        >
          Edit Profile
        </Text>
        <Image
          source={require("./../images/feed1.jpg")}
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            alignSelf: "center",
            marginTop: 30
          }}
        />
        <Text style={{ color: "#f54b64", alignSelf: "center" }}>
          Change profile photo
        </Text>
        <View
          style={{
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <View style={{ flexDirection: "row", width: "100%" }}>
            <Text style={{ color: "grey", marginLeft: 20 }}>Username</Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                position: "absolute",
                right: 20,
                fontSize: 16
              }}
            >
              Darrell Bailey
            </Text>
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 30 }}>
            <Text style={{ color: "grey", marginLeft: 20 }}>Email</Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                position: "absolute",
                right: 20,
                fontSize: 16
              }}
            >
              darrell_bailey@gmail.com
            </Text>
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 30 }}>
            <Text style={{ color: "grey", marginLeft: 20 }}>Phone</Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                position: "absolute",
                right: 20,
                fontSize: 16
              }}
            >
              +65 39879 343
            </Text>
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 30 }}>
            <Text style={{ color: "grey", marginLeft: 20 }}>Gender</Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                position: "absolute",
                right: 20,
                fontSize: 16
              }}
            >
              Female
            </Text>
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 30 }}>
            <Text style={{ color: "grey", marginLeft: 20 }}>Date of Birth</Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                position: "absolute",
                right: 20,
                fontSize: 16
              }}
            >
              16/04/1998
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
