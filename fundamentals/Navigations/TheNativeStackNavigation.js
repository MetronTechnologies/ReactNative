import {Pressable, SafeAreaView, Text} from "react-native";
import {myStyles} from "../Stylings";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";


const Stack = createNativeStackNavigator();

const TheNativeStackNavigation = () => {
    const navStyle = myStyles.Navigation;
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerStyle: {
                    backgroundColor: '#6a51ae'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerRight: () => (
                    <Pressable onPress={() => alert('Menu button pressed')}>
                        <Text style={{color: '#fff', fontSize: 16}}>
                            Menu
                        </Text>
                    </Pressable>
                ),
                contentStyle: {
                    backgroundColor: '#e8e4f3'
                }
            }}>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={
                        {title: "Welcome home"}
                    }
                />
                <Stack.Screen
                    name="About"
                    component={AboutScreen}
                    initialParams={
                        {name: "New Gods"}
                    }
                    // options={
                    //     ({route}) => (
                    //         {title: route.params.name}
                    //     )
                    // }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default TheNativeStackNavigation;