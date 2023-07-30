import { registerRootComponent } from "expo";
import { RecoilRoot } from "recoil";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/dev";
import SignIn from "./screens/SignIn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "./screens/MainScreen";
import { Provider } from "react-redux";
import store from "./redux/store";
import CartScreen from "./screens/CartScreen/CartScreen";

const Stack = createNativeStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <RecoilRoot>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="CartScreen" component={CartScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    </Provider>
  );
}

export default registerRootComponent(App);
