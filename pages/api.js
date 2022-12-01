import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';

const Api = ({ navigation }) => {

    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState();
    let [response, setResponse] = useState();

    useEffect(() => {
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoading(false);
                setResponse(result)
        },
        (error) => {
            setIsLoading(false);
            setError(error)
        }
        )
    })

    getContent = () => {
        if (isLoading) {
            
            return <ActivityIndicator size="large" />
        }

        if (error) {
            return <Text>{error}</Text>
        }
        console.log(response)
        return <Text>API Called</Text>
    }

    return(
        <View style={styles.container}>

            {getContent()}
            <Text style={styles.text}>Let's Test the Api</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {

        textAlign: "center",
        fontWeight: "bold"
    }
});

export default Api;