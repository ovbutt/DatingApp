import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const notications = [
  {
    name: "Thomas Curtis liked your photo",
    time: "2 hours ago",
    story: require("./../images/story1.jpg")
  },
  {
    name: "Christine Barton liked your photo",
    time: "2 hours ago",
    story: require("./../images/story2.jpg")
  },
  {
    name: "Ovais Butt reacted the story on your time line.",
    time: "2 hours ago",
    story: require("./../images/story3.jpg")
  },
  {
    name: "Waseem Ahmed shared your post.",
    time: "2 hours ago",
    story: require("./../images/story4.jpg")
  },
  {
    name: "Ammar Iqbal commented on your photo",
    time: "2 hours ago",
    story: require("./../images/story5.jpg")
  },
  {
    name: "Ahmed Hanif added new photo",
    time: "2 hours ago",
    story: require("./../images/story6.jpg")
  }
];
export default class Notifications extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: "#242a38" }}>
          <Icon
            name="ios-arrow-round-back"
            size={30}
            color="white"
            style={{ marginTop: 20, marginLeft: 20 }}
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
            Notifications
          </Text>
          <View style={{ marginTop: 20 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={notications}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("MessageDetail")
                  }
                >
                  <View style={{ marginLeft: 20, marginBottom: 20 }}>
                    <View
                      style={{
                        flexDirection: "row"
                        //marginTop: 160,
                        ///marginLeft: 5
                        // alignItems: "center",
                        // justifyContent: "center"
                      }}
                    >
                      <View
                        style={{
                          width: 70,
                          height: 70,
                          borderRadius: 100
                        }}
                      >
                        <Image
                          source={`${item.story}`}
                          style={{
                            width: 70,
                            height: 70,
                            borderRadius: 100
                          }}
                        />
                        <View
                          style={{
                            width: 18,
                            height: 18,
                            borderRadius: 100,
                            backgroundColor: "pink",
                            position: "absolute",
                            bottom: 0,
                            right: 7,
                            borderWidth: 1,
                            borderColor: "white"
                          }}
                        />
                      </View>
                      <View
                        style={{ flexDirection: "column", marginLeft: 10 }}
                      >
                        <Text
                          style={{
                            color: "white",
                            marginLeft: 5,
                            marginTop: 5,
                            fontSize: 18,
                            width: "60%"
                          }}
                        >
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            color: "grey",
                            marginLeft: 5,
                            marginTop: 5,
                            fontSize: 14
                          }}
                        >
                          {item.time}
                        </Text>
                      </View>
                      {/* <Text
                      style={{
                        color: "grey",
                        position: "absolute",
                        right: 30,
                        top: 10
                      }}
                    >
                      {item.time}
                    </Text> */}
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
