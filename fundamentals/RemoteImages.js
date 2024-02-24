import {View, Text, Image, ImageBackground} from "react-native"
const logoImg = require("../assets/adaptive-icon.png");



const RemoteImages = () => {
  return(
    <View style={{ flex:1, backgroundColor:"plum", padding: 60}}>
      <Text>This works</Text>
      <Image style={{width: 380, height: 340}} source={{uri: 'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s'}} />
    </View>
  );
   
}

export default RemoteImages;