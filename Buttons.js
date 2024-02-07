import {View, Button} from "react-native"
const logoImg = require("./assets/adaptive-icon.png");



const Buttons = () => {
  return(
    <View style={{ flex:1, backgroundColor:"plum", padding: 60}}>
      <Button 
        title= "Press"
        onPress={
          () => console.log("Button pressed")
        }
        color="midnightblue"
        // disabled={false}
      />
    </View>
  );
   
}

export default Buttons;