import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./HomeScreen";
import { ListProduct } from "./ListProductScreen";
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
          name="Items"
          component={ListProduct}
          options={{
            headerShown: false,
            tabBarLabel: "Items",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="storefront"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={ExamplesScreens}
          options={{
            tabBarLabel: "Setting",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
