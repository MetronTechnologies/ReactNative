import {Platform, StatusBar, StyleSheet} from "react-native";



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
    },
    SafeArea: {
        container: {
            flex: 1,
            backgroundColor: "plum"
        },
        box: {
            padding: 20
        },
        text: {
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center"
        },
        safeContainer: {
            flex: 1,
            backgroundColor: "plum"
        }
    },
    PlatformCode: {
        container:{
            flex: 1,
            backgroundColor: "plum",
            paddingTop: Platform.OS === "ios" ? 20 : 0
        },
        text: {
            fontWeight: "bold",
            textAlign: "center",
            ...Platform.select({
                ios: {
                    color: "purple",
                    fontSize: 24
                },
                android: {
                    color: "blue",
                    fontSize: 30,
                    fontStyle: "italic"
                }
            })
        }
    },
    Pokemon: {
        container: {
            flex: 1,
            backgroundColor: '#f5f5f5',
            paddingTop: Platform.OS == "android" ?
                StatusBar.currentHeight : 0,
        },
        card: {
            backgroundColor: 'white',
            borderRadius: 16,
            borderWidth: 2,
            padding: 16,
            margin: 16,
            ...Platform.select({
                ios: {
                    shadowOffset: {
                        width: 2,
                        height: 2
                    },
                    shadowColor: '#333',
                    shadowOpacity: 0.3,
                    shadowRadius: 4
                },
                android: {
                    elevation: 5
                }
            })
        },
        nameContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 32
        },
        name: {
            fontSize: 30,
            fontWeight: 'bold'
        },
        hp: {
            fontSize: 22
        },
        image: {
            width: '100%',
            height: 200,
            marginBottom: 16
        },
        typeContainer: {
            marginBottom: 40,
            alignItems: 'center'
        },
        badge: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 6,
            paddingHorizontal: 12,
            borderRadius: 20,
            borderWidth: 4
        },
        typeEmoji: {
            fontSize: 30,
            marginRight: 12
        },
        typeText: {
            fontSize: 22,
            fontWeight: 'bold'
        },
        movesContainer: {
            marginBottom: 16
        },
        movesText: {
            fontSize: 22,
            fontWeight: 'bold'
        },
        weakContainer: {
            marginBottom: 8
        },
        pokeList: {
            container: {
                flex: 1,
                backgroundColor: '#f5f5f5',
                paddingTop: StatusBar.currentHeight
            },
            scrollView: {
                paddingHorizontal: 16
            },
            card: {
                backgroundColor: 'white',
                borderWidth: 1,
                padding: 16,
                borderRadius: 8,
                marginBottom: 16
            },
            text: {
                fontSize: 30
            },
            listEmpty: {
                fontWeight: 'bold',
                fontSize: 20
            },
            headerText: {
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'center',
                marginBottom: 12
            },
            footerText: {
                fontWeight: 'bold',
                fontSize: 20,
                marginTop: 12,
                textAlign: 'center'
            },
            sectionHeaderText: {
                backgroundColor: 'white',
                fontSize: 24,
                fontWeight: 'bold'
            },
            sectionCard: {
                borderWidth: 1,
                borderRadius: 10,
                padding: 16
            }
        },
        flatList: {
            card: {
                backgroundColor: 'white',
                borderRadius: 10,
                borderWidth: 1,
                padding: 16
            }
        }
    },
    FormStyles: {
        container: {
            flex: 1,
            backgroundColor: '#f5f5f5',
            paddingTop: StatusBar.currentHeight
        },
        textInput: {
            height: 40,
            margin: 12,
            padding: 10,
            borderWidth: 1,
            borderRadius: 10
        },
        multiline: {
            minHeight: 100,
            textAlignVertical: "top"
        },
        switch: {
            container: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10
            }
        },
        text: {
            fontSize: 30,
            padding: 10
        },
        login: {
            container: {
                flex: 1,
                justifyContent: 'center',
                paddingHorizontal: 20,
                backgroundColor: '#f5f5f5'
            },
            form: {
                backgroundColor: 'white',
                padding: 20,
                borderRadius: 10,
                shadowColor: 'black',
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5
            },
            labels: {
                fontSize: 16 ,
                marginBottom: 5,
                fontWeight: 'bold'
            },
            inputs: {
                height: 40,
                borderColor: '#ddd',
                borderWidth: 1,
                padding: 10,
                borderRadius: 5,
                marginBottom: 15
            },
            image: {
                width: 200,
                height: 200,
                alignSelf: 'center',
                marginBottom: 50,
                borderRadius: 10
            },
            errorText: {
                color: 'red',
                marginBottom: 10
            }
        }
    },
    Networking: {
        container: {
            flex: 1,
            backgroundColor: '#f5f5f5',
            paddingTop: StatusBar.currentHeight
        },
        listContainer: {
            flex: 1,
            paddingHorizontal: 16
        },
        card: {
            backgroundColor: 'white',
            padding: 16,
            borderRadius: 10,
            borderWidth: 1
        },
        titleText: {
            fontSize: 30,
        },
        bodyText: {
            fontSize: 24,
            color: '#666666'
        },
        headerText: {
            fontSize: 24,
            textAlign: 'center',
            marginBottom: 12
        },
        footerText: {
            fontSize: 24,
            textAlign: 'center',
            marginTop: 12
        },
        loader: {
            flex: 1,
            backgroundColor: '#f5f5f5',
            paddingTop: StatusBar.currentHeight,
            justifyContent: 'center',
            alignItems: 'center'
        },
        inputContainer: {
            backgroundColor: 'white',
            padding: 16,
            borderRadius: 10,
            borderWidth: 1,
            margin: 16
        },
        input: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 8,
            padding: 8,
            borderRadius: 8
        },
        errorContainer: {
            backgroundColor: '#ffc0cb',
            padding: 16,
            borderRadius: 8,
            borderWidth: 1,
            margin: 16,
            alignItems: 'center'
        },
        errorText: {
            color: '#d8000c',
            fontSize: 16,
            textAlign: 'center'
        }
    },
    Navigation: {
        container: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
        },
        home: {
            container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            },
            text: {
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 16
            }
        },
        drawer: {
            container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            },
            text: {
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 16
            }
        }
    }
})