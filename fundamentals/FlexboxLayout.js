import { View, Text } from "react-native";
import { myStyles } from "./Stylings";
import MyBox from "./MyBox";

const FlexBoxLayout = () => {
    return (
        <View style={myStyles.FlexProperties.Default.container}>
            <MyBox style={{ backgroundColor: "#8e9b00" }}>Box1</MyBox>
            <MyBox style={{ backgroundColor: "purple"}}>Box2</MyBox>
            {/*<MyBox style={{ backgroundColor: "purple", alignSelf: "stretch", flex: 1, flexBasis: 140 }}>Box2</MyBox>*/}
            <MyBox style={{ backgroundColor: "#1c4c56" }}>Box3</MyBox>
            {/*<MyBox style={{ backgroundColor: "#ab9156", flex: 1, height: 140 }}>Box4</MyBox>*/}
            <MyBox style={{ backgroundColor: "#ab9156"}}>Box4</MyBox>
            <MyBox style={{ backgroundColor: "#6b0803" }}>Box5</MyBox>
            <MyBox style={{ backgroundColor: "#1c4c56" }}>Box6</MyBox>
            <MyBox style={{ backgroundColor: "#b95f21" }}>Box7</MyBox>
        </View>
    );
}


export default FlexBoxLayout;