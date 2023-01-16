// author: Maxim Torgovitski

// import react native
import { Text, View } from 'react-native';
import React from 'react';

// import components
import { light_primary_color, dark_primary_color } from './styles';

const Logo = () => {
    return (
        <View style={[{ backgroundColor: 'black' }, { padding: 8 }, { borderRadius: 24 }, { flexDirection: 'row' }, { alignItems: 'center' }]}>
            <View style={[{ backgroundColor: light_primary_color }, { width: 32 }, { height: 64 }, { borderWidth: 0 }, { borderTopLeftRadius: 16 }, { borderBottomLeftRadius: 16 }, { justifyContent: 'space-around' }]}>
                <View style={[{ backgroundColor: 'white' }, { width: 16 }, { height: 16 }, { borderWidth: 0 }, { borderRadius: '100%' }, { marginTop: 8 }, { marginLeft: 8 }]}></View>
                <View style={[{ marginBottom: 8 }]}>
                    <View style={[{ backgroundColor: 'white' }, { width: 8 }, { height: 8 }, { borderWidth: 0 }, { marginLeft: 16 }]}></View>
                    <View style={[{ backgroundColor: 'white' }, { width: 16 }, { height: 8 }, { borderWidth: 0 }, { marginLeft: 16 }]}></View>
                </View>
            </View>
            <View style={[{ backgroundColor: 'white' }, { width: 32 }, { height: 64 }, { borderWidth: 0 }, { borderTopRightRadius: 16 }, { borderBottomRightRadius: 16 }, { justifyContent: 'space-around' }]}>
                <View style={[{ backgroundColor: light_primary_color }, { width: 16 }, { height: 16 }, { borderWidth: 0 }, { borderRadius: '100%' }, { marginTop: 8 }, { marginLeft: 8 }]}></View>
                <View style={[{ width: 16 }, { marginBottom: 8 }, { alignItems: 'flex-end' }]}>
                    <View style={[{ backgroundColor: light_primary_color }, { width: 8 }, { height: 8 }, { borderWidth: 0 }]}></View>
                    <View style={[{ backgroundColor: light_primary_color }, { width: 16 }, { height: 8 }, { borderWidth: 0 }]}></View>
                </View>
            </View>
            <View style={[{ paddingLeft: 16 }, { paddingRight: 8 }]}>
                <Text style={[{ fontSize: 32 }, { fontWeight: 'bold' }, { color: 'white' }]}>mimical</Text>
                <Text style={[{ fontSize: 16 }, { fontWeight: 'bold' }, { color: 'white' }]}>Face Training App</Text>
            </View>
        </View>
    );
}

export default Logo;