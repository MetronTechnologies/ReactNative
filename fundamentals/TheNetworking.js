import {ActivityIndicator, Button, FlatList, SafeAreaView, Text, TextInput, View} from "react-native";
import {myStyles} from "./Stylings";
import {useEffect, useState} from "react";

const TheNetworking = () => {
    const netStyle = myStyles.Networking;
    useEffect(() => {
        fetchData();
    }, []);
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [posting, setPosting] = useState(false);
    const [error, setError] = useState("");

    const fetchData = async (limit = 10) => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
            );
            const data = await response.json();
            setDataList(data);
            setLoading(false);
            setError("");
        } catch (e) {
            console.error("Error ---> ", e);
            setError("Failed to fetch post list");
            setLoading(false);
        }

    }
    const handleRefresh = () => {
        setRefreshing(true);
        fetchData(20)
            .then(
                () => {
                    setRefreshing(false)
                }
            )
    }
    if (loading) {
        return (
            <SafeAreaView style={netStyle.loader}>
                <ActivityIndicator size='large' color='#0000ff'/>
                <Text>Loading...</Text>
            </SafeAreaView>
        )
    }
    const handlePosting = async () => {
        setPosting(true);
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts", {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: postTitle,
                        body: postBody
                    })
                }
            )
            const newPost = await response.json();
            setDataList([newPost, ...dataList])
            setPostTitle("");
            setPostBody("");
            setPosting(false);
            setError("");
        } catch (e) {
            console.error("Error ---> ", e);
            setError("Failed to post");
        }
    }
    return (
        <SafeAreaView style={netStyle.container}>
            {
                error ? (
                    <View style={netStyle.errorContainer}>
                        <Text style={netStyle.errorText}>{error}</Text>
                    </View>
                ) : (
                    <>
                        <View style={netStyle.inputContainer}>
                            <TextInput
                                style={netStyle.input}
                                placeholder="Post title"
                                value={postTitle}
                                onChangeText={setPostTitle}
                            />
                            <TextInput
                                style={netStyle.input}
                                placeholder="Post Body"
                                value={postBody}
                                onChangeText={setPostBody}
                            />
                            <Button
                                title={posting ? "Posting ..." : "Post"}
                                onPress={handlePosting}
                                disabled={posting}
                            />
                        </View>
                        <View style={netStyle.listContainer}>
                            <FlatList
                                data={dataList}
                                renderItem={
                                    ({item}) => {
                                        return (
                                            <View style={netStyle.card}>
                                                <Text style={netStyle.titleText}>{item.title}</Text>
                                                <Text style={netStyle.bodyText}>{item.body}</Text>
                                            </View>
                                        )
                                    }
                                }
                                ListEmptyComponent={
                                    () => (
                                        <Text>No posts found</Text>
                                    )
                                }
                                ListHeaderComponent={
                                    () => (
                                        <Text style={netStyle.headerText}>Post List</Text>
                                    )
                                }
                                ListFooterComponent={
                                    () => (
                                        <Text style={netStyle.footerText}>End of list</Text>
                                    )
                                }
                                ItemSeparatorComponent={
                                    () => (
                                        <View
                                            style={{height: 16}}
                                        />
                                    )
                                }
                                refreshing={refreshing}
                                onRefresh={handleRefresh}
                            />
                        </View>
                    </>
                )
            }

        </SafeAreaView>
    );
}

export default TheNetworking;