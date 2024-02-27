import {myStyles} from "../../Stylings";
import {Text, View} from "react-native";

const CourseList = () => {
    const dashStyle = myStyles.Navigation.drawer;
    return (
        <View style={dashStyle.container}>
            <Text style={dashStyle.text}>Course List Screen</Text>
        </View>
    );
}


export default CourseList