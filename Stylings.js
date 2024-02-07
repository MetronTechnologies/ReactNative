import {StyleSheet} from "react-native";



export const myStyles = StyleSheet.create({
    DefaultBoxSetting: {
        container: {
            flex: 1,
            backgroundColor: "#D0F2F8",
            borderColor: "black",
            // borderWidth: 1,
            paddingTop: 60
        },
        box: {
            backgroundColor: "#fff",
            padding: 20,
            width: "50%"
        },
        text: {
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            color: "white"
        }
    },
    FlexProperties: {
        Default: {
            flexContainer: {
                marginTop: 64,
                borderWidth: 1,
                borderColor: "red",
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
            },
            container: {
                flex: 1,
                backgroundColor: "#D0F2F8",
                marginTop: 30
            },
            box: {
                backgroundColor: "#fff",
                padding: 20,
                width: "50%"
            },
            text: {
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",
                color: "white"
            },
            flexWrapper: {
                marginTop: 64,
                borderWidth: 6,
                height: 300,
                borderColor: "midnightblue",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap"
            }
        },
        FlexBasis: {
            container: {
                marginTop: 70,
                flex: 1
            }
        },
        FlexGrow: {
            box: {
                flexGrow: 1
            }
        },
        GapProperty:{
            container: {
                height: 300,
                marginTop: 64,
                borderWidth: 6,
                borderColor: "red",
                flexWrap: "wrap",
                // rowGap: 20,
                // columnGap: 30
                gap: 10
            },
            boxes: {
                backgroundColor: "#fff",
                padding: 20,
            }
        }
    },
    Layout: {
        default: {
            container: {
                flex: 1,
                marginTop: 64,
                borderWidth: 6,
                borderColor: "red"
            },
            box: {
                padding: 20,
                width: 100,
                height: 100
            }
        },
    },
    DynamicUI: {
        default: {
            container: {
                flex: 1,
                backgroundColor: "plum",
                alignItems: "center",
                justifyContent: "center"
            },
            box: {
                width: 300,
                height: 300,
                backgroundColor: "lightblue",
                alignItems: "center",
                justifyContent: "center"
            },
            text: {
                fontSize: 24
            }
        },
        anotherWay: {
            box: {
                width: "70%",
                height: "70%",
                backgroundColor: "lightblue",
                alignItems: "center",
                justifyContent: "center"
            },
        },
        dimensionApi: {
            box: {
                backgroundColor: "lightblue",
                alignItems: "center",
                justifyContent: "center"
            }
        }
    }

});