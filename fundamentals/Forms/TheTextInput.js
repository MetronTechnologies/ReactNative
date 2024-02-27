import {SafeAreaView, Text, TextInput} from "react-native";
import {myStyles} from "../Stylings";
import {useState} from "react";

const TheTextInput = () => {
    const formStyle = myStyles.FormStyles;
    const[name, setName] = useState("");
    return (
        <SafeAreaView style={formStyle.container}>
            <TextInput
                style={formStyle.textInput}
                value={name}
                onChangeText={setName}
                placeholder="Your name"
                secureTextEntry
                keyboardType='numeric'
                autoCorrect={false}
                autoCapitalize="none"
            />
            <Text style={formStyle.text}>My name is {name}</Text>
            <TextInput
                style={[formStyle.textInput, formStyle.multiline]}
                placeholder='message'
                multiline
            />
        </SafeAreaView>
    )
}


export default TheTextInput