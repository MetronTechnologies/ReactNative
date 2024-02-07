import { View, Text } from "react-native";
import { myStyles } from "./Stylings";

const MyBox = ({children, style}) => {
    return (
        <View style={[myStyles.Layout.default.box, style]}>
            <Text style={myStyles.DefaultBoxSetting.text}>{children}</Text>
        </View>
    );
}


export default MyBox;