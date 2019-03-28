import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import IconFA from "react-native-vector-icons/FontAwesome";

const feed = [
  {
    name: "Marcus Norris",
    time: "2 hours ago",
    profilePhoto: require("./../images/profileImage.jpg"),
    tags: "#relax, #travel",
    feedPhoto: require("./../images/feed1.jpg"),
    description: "Airport Hotels the right way to start a short break holiday",
    likes: "360",
    comments: "35",
    shares: "18"
  },
  {
    name: "Marcus Norris",
    time: "2 hours ago",
    profilePhoto: require("./../images/profileImage.jpg"),
    tags: "#relax, #travel",
    feedPhoto: require("./../images/feed2.jpg"),
    description: "Airport Hotels the right way to start a short break holiday",
    likes: "360",
    comments: "35",
    shares: "18"
  },
  {
    name: "Marcus Norris",
    time: "2 hours ago",
    profilePhoto: require("./../images/profileImage.jpg"),
    tags: "#relax, #travel",
    feedPhoto: require("./../images/feed3.jpg"),
    description: "Airport Hotels the right way to start a short break holiday",
    likes: "360",
    comments: "35",
    shares: "18"
  },
  {
    name: "Marcus Norris",
    time: "2 hours ago",
    profilePhoto: require("./../images/profileImage.jpg"),
    tags: "#relax, #travel",
    feedPhoto: require("./../images/feed4.jpg"),
    description: "Airport Hotels the right way to start a short break holiday",
    likes: "360",
    comments: "35",
    shares: "18"
  },
  {
    name: "Marcus Norris",
    time: "2 hours ago",
    profilePhoto: require("./../images/profileImage.jpg"),
    tags: "#relax, #travel",
    feedPhoto: require("./../images/feed5.jpg"),
    description: "Airport Hotels the right way to start a short break holiday",
    likes: "360",
    comments: "35",
    shares: "18"
  },
  {
    name: "Marcus Norris",
    time: "2 hours ago",
    profilePhoto: require("./../images/profileImage.jpg"),
    tags: "#relax, #travel",
    feedPhoto: require("./../images/feed6.jpg"),
    description: "Airport Hotels the right way to start a short break holiday",
    likes: "360",
    comments: "35",
    shares: "18"
  }
];
export default class SignoutScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: "#242a38" }}>
          <Icon
            name="md-create"
            style={{ position: "absolute", right: 20, top: 20 }}
            color="#f54b64"
            size={30}
            onPress={() => {
              this.props.navigation.navigate("EditProfile");
            }}
          />
          <View
            style={{
              flexDirection: "row",
              marginTop: 50,
              marginLeft: 10
            }}
          >
            <Image
              source={require("./../images/feed1.jpg")}
              style={{
                height: 100,
                width: 100,
                borderRadius: 100
              }}
            />
            <View
              style={{
                flexDirection: "column",
                marginTop: 20,
                marginLeft: 10,
                width: "80%"
              }}
            >
              <Text style={{ color: "white", fontSize: 26, fontWeight: "600" }}>
                Blanche Hall
              </Text>
              <Text style={{ color: "grey", fontSize: 14 }}>@jorgecutis</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 30, marginLeft: 15 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>128</Text>
              <Text style={{ color: "white", marginLeft: 5 }}>Posts</Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: 30 }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>3120</Text>
              <Text style={{ color: "white", marginLeft: 5 }}>Following</Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: 30 }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>5024</Text>
              <Text style={{ color: "white", marginLeft: 5 }}>Follower</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: 50,
              backgroundColor: "black",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row"
            }}
          >
            <Icon
              name="ios-grid"
              size={30}
              color="#f54b64"
              style={{ marginLeft: 10 }}
            />
            <Icon
              name="ios-image"
              size={30}
              color="#f54b64"
              style={{ marginLeft: 60 }}
            />
            <Icon
              name="ios-play-circle"
              size={30}
              color="#f54b64"
              style={{ marginLeft: 60 }}
            />
            <Icon
              name="ios-musical-note"
              size={30}
              color="#f54b64"
              style={{ marginLeft: 60 }}
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              //horizontal={true}
              data={feed}
              renderItem={({ item }) => (
                <View
                  style={{
                    marginLeft: 20,
                    width: "90%",
                    height: 450,
                    elevation: 5,
                    borderRadius: 10,
                    borderColor: "grey",
                    //borderWidth: 1,
                    marginBottom: 20,
                    shadowColor: "white"
                  }}
                >
                  <View style={{ position: "absolute", right: 30, top: 15 }}>
                    <Icon name="ios-more" color="white" size={35} />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 15,
                      marginLeft: 10
                    }}
                  >
                    <Image
                      source={`${item.profilePhoto}`}
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
                        {item.name}
                      </Text>
                      <Text
                        style={{ marginLeft: 5, marginTop: 5, color: "grey" }}
                      >
                        {item.time}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      color: "#f54b64",
                      marginLeft: 10,
                      marginTop: 10,
                      fontSize: 16
                    }}
                  >
                    {item.tags}
                  </Text>
                  <Text
                    style={{
                      color: "#fff",
                      marginLeft: 10,
                      marginTop: 10,
                      fontSize: 16,
                      marginBottom: 10
                    }}
                  >
                    {item.description}
                  </Text>
                  <Image
                    source={`${item.feedPhoto}`}
                    style={{ width: "100%", height: "50%" }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 20,
                      marginTop: 10,
                      marginBottom: 5
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="ios-thumbs-up" size={30} color="white" />
                      <Text
                        style={{
                          color: "white",
                          marginLeft: 10,
                          fontSize: 15,
                          marginTop: 5
                        }}
                      >
                        {item.likes}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: 20 }}>
                      <Icon name="ios-chatbubbles" size={30} color="white" />
                      <Text
                        style={{
                          color: "white",
                          marginLeft: 10,
                          fontSize: 15,
                          marginTop: 5
                        }}
                      >
                        {item.comments}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        position: "absolute",
                        right: 30
                      }}
                    >
                      <Icon name="ios-share-alt" size={30} color="white" />
                      <Text
                        style={{
                          color: "white",
                          marginLeft: 10,
                          fontSize: 15,
                          marginTop: 5
                        }}
                      >
                        {item.shares}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d35400",
    borderRadius: 25,
    height: 40,
    width: 290
  }
});
