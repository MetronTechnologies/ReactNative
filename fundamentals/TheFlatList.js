import {FlatList, SafeAreaView, Text, View} from "react-native";
import {myStyles} from "./Stylings";
import pokeList from "./PokemonCards/data.json";

const TheFlatList = () => {
    const flatStyle = myStyles.Pokemon.pokeList;
    const flatStyle2 = myStyles.Pokemon.flatList;
    return (
        <SafeAreaView style={flatStyle.container}>
            <View style={flatStyle.scrollView}>
                <FlatList
                    data={pokeList}
                    renderItem={
                        ({item}) => {
                            return (
                                <View key={item.ID}  style={flatStyle2.card}>
                                    <Text style={flatStyle.text}>
                                        {item.type}
                                    </Text>
                                    <Text style={flatStyle.text}>
                                        {item.name}
                                    </Text>
                                </View>
                            )
                        }
                    }
                    ItemSeparatorComponent={
                        <View
                            style={{height: 16}}
                        />
                    }
                    ListEmptyComponent={
                        <Text style={flatStyle.listEmpty}>
                            No Items Found
                        </Text>
                    }
                    ListHeaderComponent={
                        <Text style={flatStyle.headerText}>
                            Pokemon List
                        </Text>
                    }
                    ListFooterComponent={
                        <Text style={flatStyle.footerText }>
                            End of list
                        </Text>
                    }
                />
            </View>
        </SafeAreaView>
    );
}


export default TheFlatList;