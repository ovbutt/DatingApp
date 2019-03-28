import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView
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

export default class MainScreen extends Component {
  constructor() {
    super();
    this.state = { search: "" };
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: "#242a38" }}>
          <View style={{ flexDirection: "row", marginTop: 30, marginLeft: 20 }}>
            <View
              style={{
                flexDirection: "row",
                borderColor: "white",
                //borderWidth: 1,
                borderRadius: 25,
                height: 40,
                width: "75%",
                backgroundColor: "rgba(255, 255, 255, 0.3)"
              }}
            >
              <Icon
                name="ios-search"
                size={25}
                style={{
                  color: "white",
                  paddingLeft: 15,
                  paddingTop: 8,
                  paddingRight: 10
                }}
              />
              <TextInput
                fontSize={16}
                placeholder="Search"
                autoCorrect={false}
                onChangeText={search => this.setState({ search })}
                value={this.state.search}
                placeholderTextColor="white"
                style={{
                  color: "white",
                  height: "100%",
                  width: "80%",
                  paddingLeft: 20
                }}
                // selectionColor="white"
                // underlineColorAndroid="white"
                autoCapitalize="none"
                selectionColor="#f54b64"
              />
            </View>
            <Image
              source={require("./../images/profileImage.jpg")}
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
                marginLeft: 20
              }}
            />
          </View>
          <Text
            style={{
              marginLeft: 30,
              color: "white",
              fontSize: 36,
              marginTop: 10,
              fontWeight: "bold",
              marginBottom: 20
            }}
          >
            Discover
          </Text>
          <Text
            style={{
              position: "absolute",
              right: 30,
              top: 110,
              color: "#f54b64",
              fontSize: 16
            }}
          >
            View all
          </Text>
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
                        style={{ color: "white", marginLeft: 5, marginTop: 5 }}
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

const styles = StyleSheet.create({});
