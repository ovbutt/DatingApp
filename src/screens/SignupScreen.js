import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class SignupScreen extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      password: "",
      password_confirmation: "",
      loading: false,
      token: "",
      userEmail: "",
      userName: "",
      userId: ""
    };
    //this.getTokenFromLoginRequest = this.getTokenFromLoginRequest.bind(this)
  }

  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.navigation.navigate("App")}
      >
        <Text style={{ color: "#d35400", fontSize: 18, fontWeight: "700" }}>
          {" "}
          Sign Up{" "}
        </Text>
      </TouchableOpacity>
    );
  }

  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("./../images/signupBG.png")}
          style={{ height: "100%", width: "100%" }}
        >
          <ScrollView>
            <Icon
              name="ios-arrow-round-back"
              color="white"
              size={35}
              style={{ position: "absolute", top: 30, left: 30 }}
              onPress={() => this.props.navigation.goBack()}
            />
            <View style={styles.container}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 36,
                  fontWeight: "700",
                  marginBottom: 60,
                  marginTop: 100
                }}
              >
                Create an account
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  borderColor: "white",
                  //borderWidth: 1,
                  borderRadius: 25,
                  height: "8%",
                  width: "90%",
                  backgroundColor: "rgba(255, 255, 255, 0.3)"
                  //opacity: 0.7
                }}
              >
                {/* <Icon
                  name="ios-contact"
                  size={25}
                  style={{
                    color: "white",
                    paddingLeft: 15,
                    paddingTop: 8,
                    paddingRight: 10
                  }}
                /> */}
                <TextInput
                  fontSize={18}
                  placeholder="Full Name"
                  autoCapitalize="words"
                  autoCorrect={false}
                  onChangeText={fullName => this.setState({ fullName })}
                  value={this.state.fullName}
                  placeholderTextColor="white"
                  style={{
                    color: "white",
                    height: "100%",
                    width: "80%",
                    paddingLeft: 20
                  }}
                  selectionColor="#f54b64"
                  //underlineColorAndroid="white"
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderColor: "white",
                  //borderWidth: 1,
                  borderRadius: 25,
                  height: "8%",
                  width: "90%",
                  marginTop: 10,
                  backgroundColor: "rgba(255, 255, 255, 0.3)"
                }}
              >
                {/* <Icon
                  name="ios-mail"
                  size={25}
                  style={{
                    color: "white",
                    paddingLeft: 15,
                    paddingTop: 8,
                    paddingRight: 10
                  }}
                /> */}
                <TextInput
                  fontSize={18}
                  placeholder="Email"
                  autoCorrect={false}
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                  placeholderTextColor="white"
                  style={{
                    color: "white",
                    height: "100%",
                    width: "80%",
                    paddingLeft: 20
                  }}
                  selectionColor="#f54b64"
                  // underlineColorAndroid="white"
                  autoCapitalize="none"
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderColor: "white",
                  //borderWidth: 1,
                  borderRadius: 25,
                  height: "8%",
                  width: "90%",
                  marginTop: 10,
                  backgroundColor: "rgba(255, 255, 255, 0.3)"
                }}
              >
                {/* <Icon
                  name="ios-lock"
                  size={25}
                  style={{
                    color: "white",
                    paddingLeft: 15,
                    paddingTop: 8,
                    paddingRight: 10
                  }}
                /> */}
                <TextInput
                  fontSize={18}
                  placeholder="Phone"
                  autoCorrect={false}
                  secureTextEntry={true}
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                  placeholderTextColor="white"
                  style={{
                    color: "white",
                    height: "100%",
                    width: "80%",
                    paddingLeft: 20
                  }}
                  selectionColor="#f54b64"
                  // underlineColorAndroid="white"
                  autoCapitalize="none"
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderColor: "white",
                  //borderWidth: 1,
                  borderRadius: 25,
                  height: "8%",
                  width: "90%",
                  marginTop: 10,
                  backgroundColor: "rgba(255, 255, 255, 0.3)"
                }}
              >
                {/* <Icon
                  name="ios-lock"
                  size={25}
                  style={{
                    color: "white",
                    paddingLeft: 15,
                    paddingTop: 8,
                    paddingRight: 10
                  }}
                /> */}
                <TextInput
                  fontSize={18}
                  placeholder="Date of birth"
                  autoCorrect={false}
                  secureTextEntry={true}
                  onChangeText={password_confirmation =>
                    this.setState({ password_confirmation })
                  }
                  value={this.state.password_confirmation}
                  placeholderTextColor="white"
                  style={{
                    color: "white",
                    height: "100%",
                    width: "80%",
                    paddingLeft: 20
                  }}
                  selectionColor="#f54b64"
                  // underlineColorAndroid="white"
                  autoCapitalize="none"
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderColor: "white",
                  //borderWidth: 1,
                  borderRadius: 25,
                  height: "8%",
                  width: "90%",
                  marginTop: 10,
                  backgroundColor: "rgba(255, 255, 255, 0.3)"
                }}
              >
                {/* <Icon
                  name="ios-lock"
                  size={25}
                  style={{
                    color: "white",
                    paddingLeft: 15,
                    paddingTop: 8,
                    paddingRight: 10
                  }}
                /> */}
                <TextInput
                  fontSize={18}
                  placeholder="Password"
                  autoCorrect={false}
                  secureTextEntry={true}
                  onChangeText={password_confirmation =>
                    this.setState({ password_confirmation })
                  }
                  value={this.state.password_confirmation}
                  placeholderTextColor="white"
                  style={{
                    color: "white",
                    height: "100%",
                    width: "80%",
                    paddingLeft: 20
                  }}
                  selectionColor="#f54b64"
                  // underlineColorAndroid="white"
                  autoCapitalize="none"
                />
              </View>
              <Image
                source={require("./../images/signUp2.png")}
                style={{ marginTop: 30 }}
              />
              {/* {this.renderButton()} */}
              {/* <Text
          style={styles.textStyle}
          onPress={() => this.props.navigation.goBack()}
        >
          Log In
        </Text> */}
              {/* <TouchableOpacity
              style={styles.button2}
              onPress={() => this.props.navigation.goBack()}
            >
              <Text style={{ color: "white", fontSize: 18, fontWeight: "400" }}>
                {" "}
                Log In{" "}
              </Text>
            </TouchableOpacity> */}
              {/* <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "300" }}
                >
                  Already have an Account?
                </Text>
              </TouchableOpacity> */}
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  textStyle: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff"
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: "#ffffff"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 40,
    width: 290,
    marginTop: 10,
    marginBottom: 50
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2980b9",
    borderRadius: 25,
    marginTop: 10,
    height: 40,
    width: 250
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  }
});
