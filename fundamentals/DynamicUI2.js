import {Text, useWindowDimensions, View} from "react-native";
import {myStyles} from "./Stylings";

const DynamicUI2 = () => {

    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

    return (
        <View style={myStyles.DynamicUI.default.container}>
            <View style={
                [myStyles.DynamicUI.dimensionApi.box, {
                    width: windowWidth > 500 ? "70%" : "90%",
                    height: windowHeight > 600 ? "60%" : "90%"
                }]
            }>
                <Text style={{fontSize: windowWidth > 500 ? 50 : 24}}>
                    Dynamic User Interface With UseWindowDimension
                </Text>
            </View>
        </View>
    );
}

export default DynamicUI2;