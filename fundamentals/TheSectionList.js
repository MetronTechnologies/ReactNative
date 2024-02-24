import {SafeAreaView, SectionList, View, Text} from "react-native";
import {myStyles} from "./Stylings";
import pokeSection from "./PokemonCards/groupedData.json";

const TheSectionList = () => {
    const sectionStyle = myStyles.Pokemon.pokeList;
    return (
        <SafeAreaView style={sectionStyle.container}>
            <View style={sectionStyle.scrollView}>
                <SectionList
                    sections={pokeSection}
                    renderItem={
                        ({item}) => {
                            return (
                                <View style={sectionStyle.sectionCard}>
                                    <Text style={sectionStyle.text}>{item}</Text>
                                </View>
                            )
                        }
                    }
                    renderSectionHeader={
                        ({section}) => (
                            <Text style={sectionStyle.sectionHeaderText}>{section.type}</Text>
                        )
                    }
                    ItemSeparatorComponent={
                        () => (
                            <View
                                style={{height: 16}}
                            />
                        )
                    }
                    SectionSeparatorComponent={
                        () => (
                            <View
                                style={{height: 16}}
                            />
                        )
                    }
                />
            </View>
        </SafeAreaView>
    );
}

export default TheSectionList;