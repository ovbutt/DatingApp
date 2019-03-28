import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

export default class MessageDetail extends Component {
  constructor() {
    super();
    this.state = { commentPost: "" };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#242a38" }}>
        <View style={{ marginTop: 20, marginLeft: 20, flexDirection: "row" }}>
          <Icon
            name="ios-arrow-round-back"
            size={40}
            color="white"
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />

          <Text
            style={{
              alignSelf: "center",
              color: "white",
              fontSize: 16,
              //marginTop: 20,
              marginLeft: 80
            }}
          >
            {" "}
            Henry Chapman{" "}
          </Text>
          <Image
            source={require("./../images/feed1.jpg")}
            style={{
              height: 40,
              width: 40,
              borderRadius: 100,
              position: "absolute",
              right: 20
              //top: 20
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            position: "absolute",
            bottom: 0
            //backgroundColor: "white"
            //height: 70
          }}
        >
          <TextInput
            fontSize={18}
            placeholderTextColor="white"
            placeholder="Type a comment..."
            scrollEnabled={true}
            multiline={true}
            onChangeText={commentPost => this.setState({ commentPost })}
            value={this.state.commentPost}
            style={{
              fontSize: 16,
              borderRadius: 25,
              borderWidth: 1,
              borderColor: "white",
              width: "80%",
              margin: 10,
              height: "60%",
              paddingLeft: 15
            }}
          />
          <TouchableOpacity
            onPress={() => {
              //this.onPostButtonPressed();
            }}
          >
            <View
              style={{
                marginTop: 10,
                marginLeft: 5,
                backgroundColor: "#f54b64",
                width: 40,
                borderRadius: 100,
                height: 40,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Icon name="md-send" size={25} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
