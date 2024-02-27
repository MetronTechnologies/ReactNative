import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CourseList from "./Screens/CourseList";
import Profile from "./Screens/Profile";
import SettingScreen from "./Screens/SettingScreen";
import Ionicons from '@expo/vector-icons/Ionicons';


const tab = createBottomTabNavigator();
const TheTabNavigation = () => {

    return (
        <NavigationContainer>
            <tab.Navigator
                screenOptions={{
                    tabBarLabelPosition: 'below-icon',
                    tabBarShowLabel: true,
                    tabBarActiveTintColor: 'purple',
                    tabBarInactiveTintColor: 'black'
                }}
            >
                <tab.Screen
                    name="CourseList"
                    component={CourseList}
                    options={{
                        tabBarLabel: 'My Courses'
                    }}
                />
                <tab.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Ionicons
                                name='person'
                                size={20}
                                color={color}
                            />
                        ),
                        tabBarBadge: 3
                    }}
                />
                <tab.Screen
                    name='Settings'
                    component={SettingScreen}
                />
            </tab.Navigator>
        </NavigationContainer>
    )
}


export default TheTabNavigation;