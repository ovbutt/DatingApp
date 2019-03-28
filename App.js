import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  DrawerItems,
  createBottomTabNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/Ionicons";

import LoginScreen from "./src/screens/LoginScreen";
import Home from "./src/screens/MainScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SignoutScreen from "./src/screens/SignoutScreen";
import LandingPage from "./src/screens/LandingPage";
import ForgotPassword from "./src/screens/ForgotPassword";
import Stream1 from "./src/screens/Stream";
import Messages from "./src/screens/Messages";
import Notifications from "./src/screens/Notifications";
import EditProfile from "./src/screens/EditProfile";
import StreamView from "./src/screens/StreamView";
import MessageDetail from "./src/screens/MessageDetail";

export default class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      // </View>
      <AppContainer />
    );
  }
}
// const CustomDrawerComponents = props => (
//   <SafeAreaView>
//     <View
//       style={{
//         elevation: 1,
//         shadowColor: "grey",
//         marginTop: 30,
//         marginBottom: 30,
//         alignItems: "center",
//         justifyContent: "center"
//       }}
//     >
//       <Image
//         source={require("./src/images/profileImage.jpg")}
//         style={{
//           width: 120,
//           height: 120,
//           borderRadius: 100
//         }}
//       />
//       <Text
//         style={{
//           color: "black",
//           fontWeight: "bold",
//           fontSize: 16,
//           marginTop: 10
//         }}
//       >
//         John Doe
//       </Text>
//     </View>
//     <DrawerItems {...props} />
//   </SafeAreaView>
// );

// const AppStackNavigator = createDrawerNavigator(
//   {
//     Home: Home,
//     Logout: SignoutScreen
//   },
//   {
//     // defaultNavigationOptions: {
//     //   header: null
//     // },
//     contentComponent: CustomDrawerComponents,
//     contentOptions: {
//       activeTintColor: "#d35400"
//     },
//     defaultNavigationOptions: ({ navigation }) => ({
//       drawerIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === "Home") {
//           //iconName = 'ios-star';
//         }
//         return (
//           <View
//             style={{
//               marginLeft: 5,
//               alignItems: "center",
//               justifyContent: "center",
//               backgroundColor: "#d35400",
//               width: 10,
//               height: 10,
//               borderRadius: 100
//             }}
//           />
//         );
//       }
//     })
//   }
// );

const ProfilesStack = createStackNavigator(
  {
    Profiles: SignoutScreen,
    EditProfile: EditProfile
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
const MessagesStack = createStackNavigator(
  {
    Messages: Messages,
    MessageDetail: MessageDetail
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const BottomTab = createBottomTabNavigator(
  {
    Home: Home,
    Streams: Stream1,
    Messages: MessagesStack,
    Notifications: Notifications,
    Profiles: ProfilesStack
  },
  {
    tabBarOptions: {
      activeTintColor: "#f54b64",
      style: { backgroundColor: "#242a38" }
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "ios-home";
        } else if (routeName === "Streams") {
          iconName = "ios-tv";
        } else if (routeName === "Messages") {
          iconName = "ios-chatboxes";
        } else if (routeName === "Notifications") {
          iconName = "ios-notifications";
        } else if (routeName === "Profiles") {
          iconName = "ios-contacts";
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    })
  }
);

const AuthStack = createStackNavigator(
  {
    LandingPage: LandingPage,
    Login: LoginScreen,
    Signup: SignupScreen,
    ForgotPassword: ForgotPassword,
    Signout: SignoutScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AuthSwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: BottomTab
  },
  {
    initialRouteName: "Auth"
  }
);

const AppContainer = createAppContainer(AuthSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
