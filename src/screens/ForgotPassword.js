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

export default class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
      loading: false,
      hidePassword: true,
      token: "",
      userEmail: "",
      userName: "",
      userId: ""
    };
  }

  static navigationOptions = {
    header: null
  };

  toggleShowButton() {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" style={{ marginTop: 30 }} />;
    } else {
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("App")}
        >
          <Text style={{ color: "#d35400", fontSize: 18, fontWeight: "700" }}>
            Log In
          </Text>
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("./../images/forgotPasswordBG.png")}
          style={{ height: "100%", width: "100%" }}
        >
          <ScrollView>
            <Icon
              name="ios-close"
              color="white"
              size={35}
              style={{ position: "absolute", top: 30, left: 30 }}
              onPress={() => this.props.navigation.goBack()}
            />
            <View style={{ marginLeft: 30, marginTop: 130 }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 36,
                  fontWeight: "bold"
                }}
              >
                Forgot Password
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 16,
                  marginTop: 12,
                  width: "85%"
                }}
              >
                Please enter your email address. You will receive a link to
                create a new password via email.
              </Text>
            </View>
            <View style={styles.container}>
              <View
                style={{
                  flexDirection: "row",
                  borderColor: "white",
                  //borderWidth: 1,
                  borderRadius: 25,
                  height: 50,
                  width: "80%",
                  backgroundColor: "rgba(255, 255, 255, 0.3)"
                }}
              >
                <TextInput
                  fontSize={18}
                  placeholder="Your email"
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
                  autoCapitalize="none"
                  selectionColor="#f54b64"
                />
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("App")}
              >
                <Image
                  source={require("./../images/SendButton.png")}
                  style={{ marginTop: 50 }}
                />
              </TouchableOpacity>
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
    marginBottom: 20,
    marginTop: 50
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: "#ffffff",
    marginTop: 10
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 40,
    width: 290,
    marginTop: 10
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#003366",
    borderRadius: 25,
    marginTop: 10,
    height: 40,
    width: 250
  },
  showButton: {
    paddingTop: 8,
    paddingLeft: 10
  }
});
