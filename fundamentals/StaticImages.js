import {View, Text, Image, ImageBackground} from "react-native"
const logoImg = require("../assets/adaptive-icon.png");



const StaticImages = () => {
  return(
    <View style={{ flex:1, backgroundColor:"plum", padding: 60}}>
      <Text>This works</Text>
      <Image style={{width: 300, height: 300}} source={logoImg}/>
    </View>
  );
   
}

export default StaticImages;