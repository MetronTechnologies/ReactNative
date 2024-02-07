import { View, Image, Text, Button, ScrollView, Pressable } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

const Pressables = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Button
          title="Press"
          onPress={() => console.log("Button pressed")}
          color="midnightblue"
        />
        <Pressable onPress={() => console.log("First image pressed")}>
          <Image source={logoImg} style={{ width: 200, height: 200 }} />
        </Pressable>
        <Pressable onPress={() => console.log("Text pressed")}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            fringilla id purus et feugiat. Donec ornare dui et sapien
            sollicitudin, at accumsan turpis euismod. Praesent sit amet odio ac
            lorem interdum dictum a vel risus. Ut aliquam eget magna eget
            maximus. Vivamus varius urna neque, sed tincidunt lectus vestibulum
            et. Phasellus non tellus non dui malesuada efficitur. Nullam in
            lectus sed ligula molestie eleifend. Nullam sodales nisi ac lacus
            malesuada, sit amet fringilla metus porta. Etiam malesuada sit amet
            turpis non mollis. Vestibulum aliquet dapibus feugiat. Donec sed
            neque ultricies, hendrerit nunc at, elementum turpis. Praesent
            dictum lacus et tempus gravida. Vestibulum at velit consectetur,
            efficitur velit et, convallis lacus. Fusce posuere rhoncus feugiat.
            Mauris eget enim ex. Fusce eu ullamcorper orci. Aliquam erat
            volutpat. Quisque faucibus ante non elementum laoreet. Nulla
            venenatis mauris ut odio rutrum malesuada. Vestibulum id
            sollicitudin est. Etiam aliquet, lacus id porttitor cursus, justo
            ante placerat sapien, eu ornare magna risus quis mauris. Phasellus
            vulputate eget leo vel varius. Nunc nibh magna, fringilla at blandit
            ut, rutrum ut sem. Curabitur gravida dignissim dictum. Nullam non
            vulputate orci, vel vulputate eros. Nam quis velit et eros tristique
            sodales. Pellentesque aliquet turpis sem. Nullam id urna luctus,
            scelerisque eros sed, eleifend ipsum. Sed odio urna, pretium iaculis
            nisl eget, luctus consectetur mi. Nam in eros in magna porttitor
            tincidunt. Donec ornare, dui eu malesuada faucibus, purus dui tempor
            turpis, ac venenatis risus nisi id lorem. Aliquam eros magna, dictum
            quis nisi ut, tincidunt imperdiet ante. Sed ac dui ipsum.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Duis nulla elit, scelerisque a felis in,
            dignissim accumsan nunc. Praesent laoreet felis a sagittis rutrum.
            Suspendisse potenti. Maecenas rhoncus, nibh laoreet tempus sodales,
            ligula lectus volutpat justo, eu laoreet justo tortor quis felis.
            Aenean lacinia ex eget scelerisque lobortis. Praesent vel
            ullamcorper nulla, et sagittis turpis. Duis ornare cursus bibendum.
            Nam eget fermentum nunc. Etiam sed tellus nulla. Donec venenatis
            quam ac tortor vestibulum aliquam. Sed nisl est, posuere at justo
            id, vehicula ornare est. Nulla facilisi. Cras venenatis odio at
            pulvinar volutpat. Pellentesque pellentesque id tortor eu hendrerit.
            Fusce neque est, faucibus id quam in, sodales elementum felis.
            Suspendisse tincidunt arcu eu leo aliquet, sed porta tellus aliquet.
            Aliquam pretium auctor turpis, id pharetra eros lacinia ac. Nunc
            pulvinar sit amet sapien eget venenatis. Vestibulum ac auctor
            lectus, eu iaculis elit. Nunc convallis rutrum nisl ut vulputate.
            Phasellus sed tempus arcu. Mauris suscipit magna a pretium
            fringilla. Duis lobortis lectus et augue scelerisque, vel placerat
            lectus molestie. Nulla vitae dapibus ligula, ac ultricies lorem. Ut
            sit amet metus felis. Cras velit urna, mattis tempor semper in,
            sollicitudin vel ex.
          </Text>
        </Pressable>

        <Pressable onPress={() => console.log("Second image pressed")}>
          <Image
            source={{ uri: "https://picsum.photos/id/1/200/300" }}
            style={{ width: 200, height: 200 }}
          />
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Pressables;
