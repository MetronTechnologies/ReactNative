import {Button, SafeAreaView, Text} from "react-native";
import {myStyles} from "../../Stylings";
import {useLayoutEffect} from "react";
const AboutScreen = ({route, navigation}) => {
    const {name} = route.params;
    const homeStyle = myStyles.Navigation.home;
    //Use normal react hooks
    // const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: name
        })
    }, [navigation, name]);
    return (
        <SafeAreaView style={homeStyle.container}>
            <Text style={homeStyle.text}>About Screen {name}</Text>
            <Button
                title="Update the topic"
                onPress={
                    () => (
                        navigation.setParams({
                            name: "Kryptonians"
                        })
                    )
                }
            />
            <Button
                title="Back to home"
                onPress={
                    () => (
                        navigation.navigate("Home", {
                            result: "Krytonians",
                        })
                    )
                }
            />
        </SafeAreaView>
    )
}



export default AboutScreen