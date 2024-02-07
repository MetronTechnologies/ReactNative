import { useState } from "react";
import { View, Text, Image, Modal, Button } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

const Modals = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  function toggleModal() {
    setIsModalVisible(!isModalVisible);
  }

  return (
    <View style={{ flex: 1, backgroundColor: "black", padding: 60 }}>
      <Button color="purple" title="Display modal" onPress={toggleModal} />
      <Modal visible={isModalVisible} onRequestClose={toggleModal} animationType="slide">
        <View style={{ borderColor: "black", marginTop: "60%", flexDirection: "column", justifyContent: "center", alignItems: "center", alignSelf: "center", backgroundColor: "gray", height: 200, width: "100%" }}>
          <View style={{ backgroundColor: "darkblue", height: 150, width: "50%" }}>
            <Text style ={{ color: "white"}}>Modal content</Text>
            <Button color="blue" title="Close modal" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Modals;
