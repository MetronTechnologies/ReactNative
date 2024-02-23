import {SafeAreaView, View} from "react-native";
import pokeList from './PokemonCards/data.json'
import {myStyles} from "./Stylings";

export const TheList = () => {
    const pokeStyle = myStyles.Pokemon;
    return (
        <SafeAreaView style={pokeStyle.container}>
            <View>
                {
                    pokeList.map(
                        poke => {
                            return (
                                <View></View>

                                +
                            )
                        }
                    )
                }
            </View>
        </SafeAreaView>
    );
}