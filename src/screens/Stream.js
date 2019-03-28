import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  FlatList
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

export default class Stream extends Component {
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
          <View style={{ marginTop: 250 }}>
            <View
              style={{ flexDirection: "row", marginBottom: 20, marginLeft: 30 }}
            >
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
              >
                Following
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                  marginLeft: 20
                }}
              >
                For You
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                  marginLeft: 20
                }}
              >
                Popular
              </Text>
            </View>
            <View>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={stories}
                renderItem={({ item }) => (
                  <View style={{ marginLeft: 20 }}>
                    <ImageBackground
                      style={{ width: 150, height: 200 }}
                      source={`${item.story}`}
                      imageStyle={{ borderRadius: 10 }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          marginTop: 160,
                          marginLeft: 5
                        }}
                      >
                        <Image
                          source={`${item.profileImage}`}
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 100,
                            borderWidth: 2,
                            borderColor: "#f54b64"
                          }}
                        />
                        <Text
                          style={{
                            color: "white",
                            marginLeft: 5,
                            marginTop: 5
                          }}
                        >
                          {item.name}
                        </Text>
                      </View>
                    </ImageBackground>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
