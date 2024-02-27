import {Button, SafeAreaView, Text} from "react-native";
import {myStyles} from "../../Stylings";
import {useNavigation} from "@react-navigation/native";
const HomeScreen = ({navigation, route}) => {
    //Uses the concept of react native navigation
    // const navigation = useNavigation();
    const homeStyle = myStyles.Navigation.home;
    return (
        <SafeAreaView style={homeStyle.container}>
            <Text style={homeStyle.text}>Home Screen</Text>
            <Text style={homeStyle.text}>{route.params?.result}</Text>
            <Button
                title='Go to about'
                onPress={
                    () => (
                        navigation.navigate("About", {
                            name: 'Apocalypse'
                        })
                    )
                }
            />
        </SafeAreaView>
    )
}



export default HomeScreen