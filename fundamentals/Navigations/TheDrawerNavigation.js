import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import DashboardScreen from "./Screens/DashboardScreen";
import SettingScreen from "./Screens/SettingScreen";
const drawer = createDrawerNavigator();


const TheDrawerNavigation = () => {
    return (
        <NavigationContainer>
            <drawer.Navigator>
                <drawer.Screen
                    name= 'DashBoard'
                    component={DashboardScreen}
                    options={{
                        title: "My Dashboard",
                        drawerLabel: "Dashboard Label",
                        drawerActiveBackgroundColor: 'lightblue',
                        drawerActiveTintColor: '#333',
                        drawerContentStyle: {
                            backgroundColor: '#c6cbef'
                        }
                    }}
                />
                <drawer.Screen
                    name= 'Settings'
                    component={SettingScreen}
                />
            </drawer.Navigator>
        </NavigationContainer>
    );
}


export default TheDrawerNavigation