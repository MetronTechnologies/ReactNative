import {View, Text, Dimensions} from "react-native";
import {myStyles} from "./Stylings";
import {useState, useEffect} from "react";

const DynamicUI = () => {
    const[myDimension, setMyDimension] = useState({
        window: Dimensions.get("window")
    });

    useEffect(() => {
        const subscription = Dimensions.addEventListener("change", ({window}) => {
            setMyDimension({window})
        });
        return () => subscription?.remove();
    }, []);

    const {window} = myDimension;
    const windowWidth = window.width;
    const windowHeight = window.height;

    return (
        <View style={myStyles.DynamicUI.default.container}>
            <View style={
                [myStyles.DynamicUI.dimensionApi.box, {
                    width: windowWidth > 500 ? "70%" : "90%",
                    height: windowHeight > 600 ? "60%" : "90%"
                }]
            }>
                <Text style={{fontSize: windowWidth > 500 ? 50 : 24}}>Dynamic User Interface</Text>
            </View>
        </View>
    );
}

export default DynamicUI;
