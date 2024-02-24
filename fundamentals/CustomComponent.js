import { Text, View } from "react-native";

const CustomComponent = ({name}) => {
    return (
        <View style={{ flex: 1, padding: 60, backgroundColor: "#D0F2F8"}}>
            <Text>This is {name}</Text>
        </View>
    );
}

export default CustomComponent;