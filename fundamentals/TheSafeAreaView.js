import {View, Text, SafeAreaView} from "react-native";
import {myStyles} from "./Stylings";

const TheSafeAreaView = () => {
    const styling = myStyles.SafeArea;

    return (
        <SafeAreaView style={styling.safeContainer}>
            <View style={styling.container}>
                <View style={styling.box}>
                    <Text style={styling.text}>Safe Area</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default TheSafeAreaView;