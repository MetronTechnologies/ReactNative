import {SafeAreaView, Text, View, Platform} from "react-native";
import {myStyles} from "./Stylings";


const ThePlatformSpecificCode = () => {
    const styling = myStyles.SafeArea;
    const pscStyle =  myStyles.PlatformCode;
    return (
        <SafeAreaView style={styling.safeContainer}>
            <View style={pscStyle.container}>
                <View style={styling.box}>
                    <Text style={pscStyle.text}>Platform Code</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ThePlatformSpecificCode;