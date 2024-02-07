import { ActivityIndicator, View } from "react-native";

const TheActivityIndicator = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "#fbfefe", padding: 60 }}>
            <ActivityIndicator/>
            <ActivityIndicator size="large"/>
            <ActivityIndicator size="large" color="midnightblue"/>
            <ActivityIndicator size="large" color="midnightblue" animating={true}/>
        </View>
    );
}

export default TheActivityIndicator;