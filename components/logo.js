// author: Maxim Torgovitski

// import react native
import { useColorScheme, View } from 'react-native';
import React from 'react';

// import colors
import { light_primary_color, dark_primary_color } from './styles';

// mimical logo
const Logo = () => {

    // light/dark mode
    const colorScheme = useColorScheme();
    const containerColor = colorScheme === 'light' ? light_primary_color : dark_primary_color;

    return (
        <View style={[{ backgroundColor: 'black' }, { padding: 0 }, { borderRadius: 24 }, { margin: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]}>
            <View style={[{ backgroundColor: containerColor }, { width: 32 }, { height: 64 }, { borderWidth: 0 }, { borderTopLeftRadius: 16 }, { borderBottomLeftRadius: 16 }, { justifyContent: 'space-around' }]}>
                <View style={[{ backgroundColor: 'white' }, { width: 16 }, { height: 16 }, { borderWidth: 0 }, { borderRadius: 8 }, { marginTop: 8 }, { marginLeft: 8 }]}></View>
                <View style={[{ marginBottom: 8 }]}>
                    <View style={[{ backgroundColor: 'white' }, { width: 8 }, { height: 8 }, { borderWidth: 0 }, { marginLeft: 16 }]}></View>
                    <View style={[{ backgroundColor: 'white' }, { width: 16 }, { height: 8 }, { borderWidth: 0 }, { marginLeft: 16 }]}></View>
                </View>
            </View>
            <View style={[{ backgroundColor: 'white' }, { width: 32 }, { height: 64 }, { borderWidth: 0 }, { borderTopRightRadius: 16 }, { borderBottomRightRadius: 16 }, { justifyContent: 'space-around' }]}>
                <View style={[{ backgroundColor: containerColor }, { width: 16 }, { height: 16 }, { borderWidth: 0 }, { borderRadius: 8 }, { marginTop: 8 }, { marginLeft: 8 }]}></View>
                <View style={[{ width: 16 }, { marginBottom: 8 }, { alignItems: 'flex-end' }]}>
                    <View style={[{ backgroundColor: containerColor }, { width: 8 }, { height: 8 }, { borderWidth: 0 }]}></View>
                    <View style={[{ backgroundColor: containerColor }, { width: 16 }, { height: 8 }, { borderWidth: 0 }]}></View>
                </View>
            </View>
        </View>
    );

}

export default Logo;