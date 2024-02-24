import {SafeAreaView, Text, View, Pressable} from "react-native";
import {myStyles} from "./Stylings.js";


const CustomButton = ({onPress, title}) => {

    const pscStyle = myStyles.PlatformCode;
    const styling = myStyles.SafeArea;

    return (
        <SafeAreaView style={styling.safeContainer}>
            <View style={styling.container}>
                <View style={styling.box}>
                    <Pressable
                        onPress={onPress}
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "lightblue",
                            borderRadius: 5,
                            padding: 10
                        }}
                    >
                        <Text style={{color: "blue", fontSize: 10}}>{title}</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}


export default CustomButton;