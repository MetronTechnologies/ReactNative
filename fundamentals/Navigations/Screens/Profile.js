import {myStyles} from "../../Stylings";
import {Text, View} from "react-native";

const Profile = () => {
    const dashStyle = myStyles.Navigation.drawer;
    return (
        <View style={dashStyle.container}>
            <Text style={dashStyle.text}>Profile Screen</Text>
        </View>
    );
}


export default Profile