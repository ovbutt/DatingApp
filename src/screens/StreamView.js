import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  FlatList,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const stories = [
  {
    name: "Thomas Curtis",
    profileImage: require("./../images/profileImage.jpg"),
    story: require("./../images/story1.jpg")
  },
  {
    name: "Christine Barton",
    profileImage: require("./../images/profileImage.jpg"),
    story: require("./../images/story2.jpg")
  },
  {
    name: "Ovais Butt",
    profileImage: require("./../images/profileImage.jpg"),
    story: require("./../images/story3.jpg")
  },
  {
    name: "Waseem Ahmed",
    profileImage: require("./../images/profileImage.jpg"),
    story: require("./../images/story4.jpg")
  },
  {
    name: "Ammar Iqbal",
    profileImage: require("./../images/profileImage.jpg"),
    story: require("./../images/story5.jpg")
  },
  {
    name: "Ahmed Hanif",
    profileImage: require("./../images/profileImage.jpg"),
    story: require("./../images/story6.jpg")
  }
];

export default class StreamView extends Component {
  constructor() {
    super();
    this.state = { commentPost: "" };
  }
  //   toggleSendIcon() {
  //     if (!this.state.commentPost.length) {
  //       return (
  //         <Image
  //           source={require("../../thum/sendGrey.png")}
  //           style={{ height: 30, width: 30 }}
  //         />
  //       );
  //     } else {
  //       return (
  //         <Image
  //           source={require("../../thum/send.png")}
  //           style={{ height: 30, width: 30 }}
  //         />
  //       );
  //     }
  //   }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("./../images/liveback.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              marginLeft: 20
            }}
          >
            <Image
              source={require("./../images/profileImage.jpg")}
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                borderWidth: 2,
                borderColor: "#f54b64"
              }}
            />
            <View style={{ flexDirection: "column", marginLeft: 10 }}>
              <Text
                style={{
                  color: "white",
                  marginLeft: 5,
                  marginTop: 5,
                  fontSize: 18
                }}
              >
                Devin Stewart
              </Text>
              <Text style={{ marginLeft: 5, marginTop: 5, color: "white" }}>
                01:08:30
              </Text>
            </View>
          </View>
          <Icon
            name="ios-close-circle"
            size={35}
            color="white"
            style={{ position: "absolute", right: 20, top: 30 }}
          />
          <View style={{ marginTop: 250 }} />
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
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
