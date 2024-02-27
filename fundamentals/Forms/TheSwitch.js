import {SafeAreaView, Switch, Text, View} from "react-native";
import {myStyles} from "../Stylings";
import {useState} from "react";

const TheSwitch = () => {
    const[dark, light] = useState(false);
    const switchStyles = myStyles.FormStyles;
    return (
        <SafeAreaView style={switchStyles.container}>
            <View style={switchStyles.switch.container}>
                <Text>Dark mode</Text>
                <Switch
                    value={dark}
                    onValueChange={
                        () => (
                            light(
                                (previousMode) => (
                                    !previousMode
                                )
                            )
                        )
                    }
                    trackColor={{false: '#767577', true: 'lightblue'}}
                    thumbColor='#f4f3f4'
                />
            </View>
        </SafeAreaView>
    );
}

export default TheSwitch;