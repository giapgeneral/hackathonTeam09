import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./HomeScreen";
import { TokenListNavigator } from "./TokenNavigator";
import { ExamplesScreens } from "./ExamplesScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function MainScreen() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="gamepad-variant-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="List"
          component={TokenListNavigator}
          options={{
            headerShown: false,
            tabBarLabel: "Tokens",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bank" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Examples"
          component={ExamplesScreens}
          options={{
            tabBarLabel: "Examples",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
