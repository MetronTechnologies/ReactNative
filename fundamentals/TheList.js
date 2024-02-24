import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {myStyles} from "./Stylings";
import pokeList from "./PokemonCards/data.json";

export const TheList = () => {
    const pokeStyle = myStyles.Pokemon.pokeList;
    return (
        <SafeAreaView style={pokeStyle.container}>
            <ScrollView style={pokeStyle.scrollView}>
                <View>
                    {
                        pokeList.map(
                            poke => {
                                return (
                                    <View key={poke.ID}  style={pokeStyle.card}>
                                        <Text style={pokeStyle.text}> {poke.type}</Text>
                                        <Text style={pokeStyle.text}>{poke.name}</Text>
                                    </View>
                                )
                            }
                        )
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}