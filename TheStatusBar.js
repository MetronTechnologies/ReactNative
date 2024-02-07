import { View, Text, StatusBar } from "react-native";

const TheStatusBar = () => {

    return (
        <View style={{ flex: 1, backgroundColor: "white", padding: 60 }}>
            <StatusBar backgroundColor="red" barStyle="light-content" hidden={false}/>
            <Text>The status bar</Text>
        </View>
    );

}


export default TheStatusBar;