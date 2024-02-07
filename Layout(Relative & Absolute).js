import {View} from "react-native";
import {myStyles} from "./Stylings";
import MyBox from "./MyBox";

const LayoutRelativeAbsolute = () => {
    return (
        <View style={myStyles.Layout.default.container}>
            <MyBox style={{backgroundColor: "cyan"}} >Box 1</MyBox>
            <MyBox style={{backgroundColor: "silver"}} >Box 2</MyBox>
            <MyBox style={{backgroundColor: "orange"}} >Box 3</MyBox>
            <MyBox style={{backgroundColor: "violet"}} >Box 4</MyBox>
            <MyBox style={{backgroundColor: "grey"}} >Box 5</MyBox>
            <MyBox style={{backgroundColor: "green"}} >Box 6</MyBox>
            <MyBox style={{backgroundColor: "black"}} >Box 7</MyBox>
        </View>
    );
}

export default LayoutRelativeAbsolute;