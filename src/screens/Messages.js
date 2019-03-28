import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const stories = [
  {
    name: "Thomas",
    profileImage: require("./../images/profileImage.jpg"),
    story: require("./../images/story1.jpg")
  },
  {
    name: "Christine",
    profileImage: require("./../images/profileImage.jpg"),
    story: require("./../images/story2.jpg")
  },
  {
    name: "Ovais",
    profileImage: require("./../images/profileImage.jpg"),
    story: require("./../images/story3.jpg")
  },
  {
    name: "Waseem",
    profileImage: require("./../images/profileImage.jpg"),
    story: require("./../images/story4.jpg")
  },
  {
    name: "Ammar",
    profileImage: require("./../images/profileImage.jpg"),
    story: require("./../images/story5.jpg")
  },
  {
    name: "Ahmed",
    profileImage: require("./../images/profileImage.jpg"),
    story: require("./../images/story6.jpg")
  }
];

const messages = [
  {
    name: "Thomas Curtis",
    message: "Hey! How's it going?",
    date: "04:04AM",
    story: require("./../images/story1.jpg")
  },
  {
    name: "Christine Barton",
    message: "What kind of music do you like?",
    date: "04:04AM",
    story: require("./../images/story2.jpg")
  },
  {
    name: "Ovais Butt",
    message: "Sounds good to me!",
    date: "04:04AM",
    story: require("./../images/story3.jpg")
  },
  {
    name: "Waseem Ahmed",
    message: "Hi Tina. How's your night going?",
    date: "04:04AM",
    story: require("./../images/story4.jpg")
  },
  {
    name: "Ammar Iqbal",
    message: "What did you do over the weekend?",
    date: "04:04AM",
    story: require("./../images/story5.jpg")
  },
  {
    name: "Ahmed Hanif",
    message: "Are you coming home tonight?",
    date: "04:04AM",
    story: require("./../images/story6.jpg")
  }
];
export default class Messages extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#242a38" }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: "6%",
              paddingRight: "6%",
              marginTop: 20
            }}
          >
            <Icon name="ios-arrow-round-back" size={40} color="white" />
            <Icon
              name="md-add"
              size={35}
              color="#f78361"
              onPress={() => {
                this.props.navigation.navigate("MessageDetail");
              }}
            />
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 30,
              marginLeft: 20,
              marginTop: 20,
              marginBottom: 20,
              fontWeight: "bold"
            }}
          >
            {" "}
            Messages{" "}
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderBottomColor: "#242a50",
              borderTopColor: "#242a50",
              borderLeftColor: "#242a50",
              borderRightColor: "#242a50",
              paddingTop: 20,
              paddingBottom: 20
            }}
          >
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={stories}
              renderItem={({ item }) => (
                <View style={{ marginLeft: 20 }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("MessageDetail");
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "column",
                        //marginTop: 160,
                        ///marginLeft: 5
                        alignItems: "center",
                        justifyContent: "center"
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
                          source={`${item.profileImage}`}
                          style={{
                            width: 70,
                            height: 70,
                            borderRadius: 100
                          }}
                        />
                        <View
                          style={{
                            width: 15,
                            height: 15,
                            borderRadius: 100,
                            backgroundColor: "green",
                            position: "absolute",
                            bottom: 0,
                            right: 7,
                            borderWidth: 1,
                            borderColor: "white"
                          }}
                        />
                      </View>
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
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={messages}
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
                      <View style={{ flexDirection: "column", marginLeft: 10 }}>
                        <Text
                          style={{
                            color: "white",
                            marginLeft: 5,
                            marginTop: 5,
                            fontSize: 18
                          }}
                        >
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            color: "white",
                            marginLeft: 5,
                            marginTop: 5,
                            fontSize: 16
                          }}
                        >
                          {item.message}
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: "grey",
                          position: "absolute",
                          right: 30,
                          top: 10
                        }}
                      >
                        {item.date}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
