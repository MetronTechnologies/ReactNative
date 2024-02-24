import {SafeAreaView, ScrollView} from "react-native";
import {myStyles} from "../Stylings.js";
import PokemonCards from "./PokemonCards";


const Pokemon = () => {
    const areaStyling = myStyles.SafeArea;
    const pokeStyling = myStyles.Pokemon;
    const poke1 = {
        name: "Pokemon 1",
        image: require("../../assets/poke1.jpg"),
        type: "Fire",
        hp: 39,
        moves: ["Scratch", "Ember", "Growl", "Leer"],
        weakness: ["Water", "Rock"]
    };
    const poke2 = {
        name: "Pokemon 2",
        image: require("../../assets/poke2.jpg"),
        type: "water",
        hp: 45,
        moves: ["Tackle", "Water Gun", "Tail Whip", "Leer"],
        weakness: ["Electric", "Grass"]
    };
    const poke3 = {
        name: "Pokemon 3",
        image: require("../../assets/poke3.jpg"),
        type: "Grass",
        hp: 80,
        moves: ["Scratch", "Ember", "Growl", "Leer"],
        weakness: ["Water", "Rock"]
    };
    const poke4 = {
        name: "Pokemon 4",
        image: require("../../assets/poke4.png"),
        type: "Electric",
        hp: 70,
        moves: ["Tackle", "Water Gun", "Tail Whip", "Leer"],
        weakness: ["Electric", "Grass"]
    };

    return (
        <SafeAreaView style={pokeStyling.container}>
            <ScrollView>
                <PokemonCards {...poke1}/>
                <PokemonCards {...poke2}/>
                <PokemonCards {...poke3}/>
                <PokemonCards {...poke4}/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Pokemon;