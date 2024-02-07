import { View, Alert, Button } from "react-native";

const TheAlert = () => {
    return (
        <View style={{ flex: 1, padding: 60, backgroundColor: "#D0F2F8"}}>
            <Button  title="Alert" onPress={() => Alert.alert("Alert title")}/>
            <Button  title="Alert" onPress={() => Alert.alert("Alert title", "The message")}/>
            <Button  title="Alert" onPress={() => Alert.alert("Alert title", "The message", [{
                    text: "Cancel",
                    onPress: () => console.log("Cancel pressed")
                }, {
                    text: "Ok",
                    onPress: () => console.log("Ok pressed")
                }
            ])}/>
        </View>
    );
}

export default TheAlert;