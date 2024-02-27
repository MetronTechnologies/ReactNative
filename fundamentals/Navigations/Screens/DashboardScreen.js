import {Button, Text, View} from "react-native";
import {myStyles} from "../../Stylings";

const DashboardScreen = ({navigation}) => {
    const dashStyle = myStyles.Navigation.drawer;
    return (
        <View style={dashStyle.container}>
            <Text style={dashStyle.text}>DashBoard Screen</Text>
            <Button
                title='Toggle drawer'
                onPress={
                    () => (
                        navigation.toggleDrawer()
                    )
                }
            />
            <Button
                title='Settings'
                onPress={
                    () => (
                        navigation.jumpTo("Settings")
                    )
                }
            />
        </View>
    );
}


export default DashboardScreen;