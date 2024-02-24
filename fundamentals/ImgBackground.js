import {View, Text, Image, ImageBackground} from "react-native"


const logoImg = require("../assets/adaptive-icon.png");
const ImgBackground = () => {
  return(
    <View style={{ flex:1, backgroundColor:"plum", padding: 60}}>
      <Text>This works</Text>
      <ImageBackground source={logoImg} style={{flex: 1}}>
        <Text>Image Text</Text>
      </ImageBackground>
    </View>
  );
   
}

export default ImgBackground;