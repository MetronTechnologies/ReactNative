import {myStyles} from "../../Stylings";
import {Text, View} from "react-native";

const SettingScreen = () => {
    const dashStyle = myStyles.Navigation.drawer;
    return (
        <View style={dashStyle.container}>
            <Text style={dashStyle.text}>Settings Screen</Text>
        </View>
    );
}


export default SettingScreen;