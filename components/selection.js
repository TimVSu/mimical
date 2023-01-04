// author: Maxim Torgovitski

// import react native
import { Pressable, Text, useColorScheme, View } from 'react-native';
import React, { useState } from 'react';

// import components
import styles from '../components/styles.js';
import { light_primary_color, dark_primary_color, light_background_color, dark_background_color, gray5, dark_gray5 } from '../components/styles.js';

const Selection = (props) => {

    // light/dark mode
    const colorScheme = useColorScheme();
    const containerColor = colorScheme === 'light' ? styles.light_container : styles.dark_container;
    const textColor = colorScheme === 'light' ? styles.light_text : styles.dark_text;
    const optionsContainerColor = colorScheme === 'light' ? gray5 : dark_gray5;
    const selectionColor = colorScheme === 'light' ? light_background_color : dark_background_color;

    // state variables
    const [optionIsEnabled1, setOptionIsEnabled1] = useState(false);
    const [optionIsEnabled2, setOptionIsEnabled2] = useState(false);
    const [optionIsEnabled3, setOptionIsEnabled3] = useState(false);

    // onPress functions
    const selectOption1 = () => [setOptionIsEnabled1(true), setOptionIsEnabled2(false), setOptionIsEnabled3(false)];
    const selectOption2 = () => [setOptionIsEnabled1(false), setOptionIsEnabled2(true), setOptionIsEnabled3(false)];
    const selectOption3 = () => [setOptionIsEnabled1(false), setOptionIsEnabled2(false), setOptionIsEnabled3(true)];

    return (
        <View style={[styles.settings_item, containerColor]}>
            <Text style={[{ fontSize: 17 }, textColor]}>{props.title}</Text>
            <View style={[{ backgroundColor: optionsContainerColor }, { padding: 2 }, { borderRadius: 12 }, { flexDirection: 'row' }]}>
                <Pressable style={({ pressed }) => [{ backgroundColor: optionIsEnabled1 ? selectionColor : pressed ? colorScheme === 'light' ? light_primary_color : dark_primary_color : null }, { padding: 8 }, { margin: 4 }, { borderRadius: 8 }]} disabled={optionIsEnabled1} onPress={selectOption1}>
                    <Text style={[{ fontSize: 17 }, textColor]}>{props.option1}</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [{ backgroundColor: optionIsEnabled2 ? selectionColor : pressed ? colorScheme === 'light' ? light_primary_color : dark_primary_color : null }, { padding: 8 }, { margin: 4 }, { borderRadius: 8 }]} disabled={optionIsEnabled2} onPress={selectOption2}>
                    <Text style={[{ fontSize: 17 }, textColor]}>{props.option2}</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [{ backgroundColor: optionIsEnabled3 ? selectionColor : pressed ? colorScheme === 'light' ? light_primary_color : dark_primary_color : null }, { padding: 8 }, { margin: 4 }, { borderRadius: 8 }]} disabled={optionIsEnabled3} onPress={selectOption3}>
                    <Text style={[{ fontSize: 17 }, textColor]}>{props.option3}</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Selection;