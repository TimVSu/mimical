import React, { useEffect, useRef } from 'react';
import "../pages/global"
import {Text, StyleSheet, View, TouchableOpacity, Animated } from 'react-native';

export default function customButton({ text, onPress, color }) {    
    
    const progress = useRef(new Animated.Value(0.5)).current;
    const scale = useRef(new Animated.Value(1)).current;

    const custom_font =

        global.custom_fontsize === "Klein" ? styles.klein : styles.klein;
    
    useEffect(() => {

        Animated.loop(
            Animated.parallel([
            Animated.sequence([
                Animated.spring(progress, { toValue: 1, useNativeDriver: true }),
                Animated.spring(progress, { toValue: 0.5, useNativeDriver: true }),
            ]),
            Animated.sequence([
                Animated.spring(scale, { toValue: 2, useNativeDriver: true }),
                Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
            ]),
            ])
        ).start();
    }, []);

    return (
        
        <TouchableOpacity onPress={ onPress }>
            <View style={styles.shape_container}>
                <Animated.View style={[styles.square, {
                    opacity: progress,
                    backgroundColor: color,
                    transform: [
                        { scale },
                        { rotate: progress.interpolate(
                            {
                                inputRange: [0.5, 1],
                                outputRange: ["0deg" , "360deg"],
                            }),}
                    ],
                    borderRadius: progress.interpolate({
                        inputRange: [0.5, 1],
                        outputRange: [SIZE / 4, SIZE / 2],
                    }
                    )
                }]}> 
                    <Text style={[styles.buttonText, custom_font]}> { text } </Text>
                </Animated.View>
            </View>
        </TouchableOpacity>
    )
}

const SIZE = 50.0
const styles = StyleSheet.create({
    
    shape_container: {
        borderRadius: 25,
        height: 100,
        width: 100,
        alignItems: 'center',
        textAlignVertical: "center",
        justifyContent: 'center',
        margin: 10,
    },
    square: {
        alignItems: 'center',
        textAlignVertical: "center",
        paddingVertical: 16,
        width: SIZE,
        height: SIZE,
        backgroundColor: '#264653',
    },
    buttonText: {
        flex: 1,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 10
    },
    klein: {
      fontSize: 14
    },
    gross: {
      fontSize: 24
    }
})