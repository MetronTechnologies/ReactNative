import {SafeAreaView, View, Text, Image} from "react-native";
import {myStyles} from "../Stylings.js";

const getTypeDetails = (type) => {
    switch (type.toLowerCase()){
        case "electric":
            return { borderColor: "#FFD700", emoji: "⚡"};
        case "water":
            return { borderColor: "#6493EA", emoji: "💧"};
        case "fire":
            return { borderColor: "#FF5733", emoji: "🔥"};
        case "grass":
            return { borderColor: "#66CC66", emoji: "🌿"}
        default:
            return { borderColor: "#A0A0A0", emoji: "❓"}
    }
}

const PokemonCards = ({name, image, type, hp, moves, weakness}) => {
    const areaStyling = myStyles.SafeArea;
    const pokeStyling = myStyles.Pokemon;
    const {borderColor, emoji} = getTypeDetails(type);
    return (
        <View style={pokeStyling.card}>
            <View style={pokeStyling.nameContainer}>
                <Text style={pokeStyling.name}>{name}</Text>
                <Text style={pokeStyling.hp}>♥{hp}</Text>
            </View>
            <Image resizeMode='contain' style={pokeStyling.image} source={image} accessibilityLabel={`${name} pokemon`}/>
            <View style={pokeStyling.typeContainer}>
                <View style={[pokeStyling.badge, {borderColor}]}>
                    <Text style={pokeStyling.typeEmoji}>{emoji}</Text>
                    <Text style={pokeStyling.typeText}>{type}</Text>
                </View>
            </View>
            <View style={pokeStyling.movesContainer}>
                <Text style={pokeStyling.movesText}>
                    Moves: {moves.join(", ")}
                </Text>
            </View>
            <View style={pokeStyling.weakContainer}>
                <Text style={pokeStyling.movesText}>
                    Weakness: {weakness.join(", ")}
                </Text>
            </View>
        </View>
    );
}

export default PokemonCards;