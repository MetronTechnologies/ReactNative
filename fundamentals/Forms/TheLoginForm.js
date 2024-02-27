import {
    Button,
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    View
} from "react-native";
import {myStyles} from "../Stylings";
import {useState} from "react";
import logo from "../../assets/poke1.jpg";

const TheLoginForm = () => {
    const formStyles = myStyles.FormStyles;
    const loginStyle = formStyles.login;
    const[username, setUserName] = useState("");
    const[password, setPassword] = useState("");
    const[errors, setErrors] = useState({});
    const validateForm = () => {
        let errors = {};
        if(!username){
            errors.username = "username is required";
        }
        if(!password){
            errors.password = "password is required";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0
    }

    const handleSubmit = () => {
        if(validateForm()){
            console.log('Submitted', username, password);
            setUserName("");
            setPassword("");
            setErrors({});
        }
    }
    return (
        <SafeAreaView style={formStyles.container}>
            <KeyboardAvoidingView
                // behavior='padding'
                keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
                style={loginStyle.container}
            >
                <View style={loginStyle.form}>
                    <Image source={logo} style={loginStyle.image}/>
                    <Text style={loginStyle.labels}>Username</Text>
                    <TextInput
                        style={loginStyle.inputs}
                        placeholder="Enter your username"
                        value={username}
                        onChangeText={setUserName}
                    />
                    {
                        errors.username ?
                            <Text style={loginStyle.errorText}>
                                {errors.username}
                            </Text> : null
                    }
                    <Text style={loginStyle.labels}>Password</Text>
                    <TextInput
                        value={password}
                        style={loginStyle.inputs}
                        placeholder="Enter your password"
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    {
                        errors.password ?
                            <Text style={loginStyle.errorText}>
                                {errors.password}
                            </Text> : null
                    }
                    <Button title="Login" onPress={handleSubmit}/>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


export default TheLoginForm