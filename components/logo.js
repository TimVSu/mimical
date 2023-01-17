// author: Maxim Torgovitski

// import react native
import { Text, View } from 'react-native';
import React from 'react';

// import components
import { light_primary_color, dark_primary_color } from './styles';

const Logo = () => {
    return (
        <View style={[{ alignItems: 'center' }]}>
            {/* mimical badge */}
            <View style={[{ backgroundColor: 'black' }, { padding: 8 }, { borderRadius: 24 }, { margin: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]}>
                {/* mimical logo */}
                <View style={[{ backgroundColor: light_primary_color }, { width: 32 }, { height: 64 }, { borderWidth: 0 }, { borderTopLeftRadius: 16 }, { borderBottomLeftRadius: 16 }, { justifyContent: 'space-around' }]}>
                    <View style={[{ backgroundColor: 'white' }, { width: 16 }, { height: 16 }, { borderWidth: 0 }, { borderRadius: 8 }, { marginTop: 8 }, { marginLeft: 8 }]}></View>
                    <View style={[{ marginBottom: 8 }]}>
                        <View style={[{ backgroundColor: 'white' }, { width: 8 }, { height: 8 }, { borderWidth: 0 }, { marginLeft: 16 }]}></View>
                        <View style={[{ backgroundColor: 'white' }, { width: 16 }, { height: 8 }, { borderWidth: 0 }, { marginLeft: 16 }]}></View>
                    </View>
                </View>
                <View style={[{ backgroundColor: 'white' }, { width: 32 }, { height: 64 }, { borderWidth: 0 }, { borderTopRightRadius: 16 }, { borderBottomRightRadius: 16 }, { justifyContent: 'space-around' }]}>
                    <View style={[{ backgroundColor: light_primary_color }, { width: 16 }, { height: 16 }, { borderWidth: 0 }, { borderRadius: 8 }, { marginTop: 8 }, { marginLeft: 8 }]}></View>
                    <View style={[{ width: 16 }, { marginBottom: 8 }, { alignItems: 'flex-end' }]}>
                        <View style={[{ backgroundColor: light_primary_color }, { width: 8 }, { height: 8 }, { borderWidth: 0 }]}></View>
                        <View style={[{ backgroundColor: light_primary_color }, { width: 16 }, { height: 8 }, { borderWidth: 0 }]}></View>
                    </View>
                </View>
                {/* mimical label */}
                <View style={[{ paddingLeft: 16 }, { paddingRight: 8 }]}>
                    <Text style={[{ fontSize: 32 }, { fontWeight: 'bold' }, { color: 'white' }]}>mimical</Text>
                    <Text style={[{ fontSize: 16 }, { fontWeight: 'bold' }, { color: 'white' }]}>Face Training App</Text>
                </View>
            </View>
            {/* mimical for patients badge */}
            <View style={[{ backgroundColor: 'black' }, { padding: 8 }, { borderRadius: 24 }, { margin: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]}>
                {/* mimical for patients logo */}
                <View style={[{ backgroundColor: light_primary_color }, { width: 32 }, { height: 64 }, { borderWidth: 0 }, { borderTopLeftRadius: 16 }, { borderBottomLeftRadius: 16 }, { justifyContent: 'space-around' }]}>
                    <View style={[{ backgroundColor: 'white' }, { width: 16 }, { height: 16 }, { borderWidth: 0 }, { borderRadius: 8 }, { marginTop: 8 }, { marginLeft: 8 }]}></View>
                    <View style={[{ marginBottom: 8 }]}>
                        <View style={[{ backgroundColor: 'white' }, { width: 8 }, { height: 8 }, { borderWidth: 0 }, { marginLeft: 16 }]}></View>
                        <View style={[{ backgroundColor: 'white' }, { width: 16 }, { height: 8 }, { borderWidth: 0 }, { marginLeft: 16 }]}></View>
                    </View>
                </View>
                {/* mimical for patients label */}
                <View style={[{ paddingLeft: 16 }, { paddingRight: 8 }]}>
                    <Text style={[{ fontSize: 32 }, { fontWeight: 'bold' }, { color: 'white' }]}>mimical App</Text>
                    <Text style={[{ fontSize: 16 }, { fontWeight: 'bold' }, { color: 'white' }]}>for Patients</Text>
                </View>
            </View>
            {/* mimical for therapists badge */}
            <View style={[{ backgroundColor: 'black' }, { padding: 8 }, { borderRadius: 24 }, { margin: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]}>
                {/* mimical for therapists label */}
                <View style={[{ paddingLeft: 8 }, { paddingRight: 16 }]}>
                    <Text style={[{ fontSize: 32 }, { fontWeight: 'bold' }, { color: 'white' }]}>mimical Dashboard</Text>
                    <Text style={[{ fontSize: 16 }, { fontWeight: 'bold' }, { color: 'white' }]}>for Therapists</Text>
                </View>
                {/* mimical for therapists logo */}
                <View style={[{ backgroundColor: 'white' }, { width: 32 }, { height: 64 }, { borderWidth: 0 }, { borderTopRightRadius: 16 }, { borderBottomRightRadius: 16 }, { justifyContent: 'space-around' }]}>
                    <View style={[{ backgroundColor: light_primary_color }, { width: 16 }, { height: 16 }, { borderWidth: 0 }, { borderRadius: 8 }, { marginTop: 8 }, { marginLeft: 8 }]}></View>
                    <View style={[{ width: 16 }, { marginBottom: 8 }, { alignItems: 'flex-end' }]}>
                        <View style={[{ backgroundColor: light_primary_color }, { width: 8 }, { height: 8 }, { borderWidth: 0 }]}></View>
                        <View style={[{ backgroundColor: light_primary_color }, { width: 16 }, { height: 8 }, { borderWidth: 0 }]}></View>
                    </View>
                </View>
            </View>
        </View>

        // mimical logo small
        // <View style={[{ backgroundColor: 'black' }, { padding: 4 }, { borderRadius: 12 }, { margin: 4 }, { flexDirection: 'row' }, { alignItems: 'center' }]}>
        //     <View style={[{ backgroundColor: light_primary_color }, { width: 16 }, { height: 32 }, { borderWidth: 0 }, { borderTopLeftRadius: 8 }, { borderBottomLeftRadius: 8 }, { justifyContent: 'space-around' }]}>
        //         <View style={[{ backgroundColor: 'white' }, { width: 8 }, { height: 8 }, { borderWidth: 0 }, { borderRadius: '100%' }, { marginTop: 4 }, { marginLeft: 4 }]}></View>
        //         <View style={[{ marginBottom: 4 }]}>
        //             <View style={[{ backgroundColor: 'white' }, { width: 4 }, { height: 4 }, { borderWidth: 0 }, { marginLeft: 8 }]}></View>
        //             <View style={[{ backgroundColor: 'white' }, { width: 8 }, { height: 4 }, { borderWidth: 0 }, { marginLeft: 8 }]}></View>
        //         </View>
        //     </View>
        //     <View style={[{ backgroundColor: 'white' }, { width: 16 }, { height: 32 }, { borderWidth: 0 }, { borderTopRightRadius: 8 }, { borderBottomRightRadius: 8 }, { justifyContent: 'space-around' }]}>
        //         <View style={[{ backgroundColor: light_primary_color }, { width: 8 }, { height: 8 }, { borderWidth: 0 }, { borderRadius: '100%' }, { marginTop: 4 }, { marginLeft: 4 }]}></View>
        //         <View style={[{ width: 8 }, { marginBottom: 4 }, { alignItems: 'flex-end' }]}>
        //             <View style={[{ backgroundColor: light_primary_color }, { width: 4 }, { height: 4 }, { borderWidth: 0 }]}></View>
        //             <View style={[{ backgroundColor: light_primary_color }, { width: 8 }, { height: 4 }, { borderWidth: 0 }]}></View>
        //         </View>
        //     </View>
        // </View>

        // mimical logo medium
        // <View style={[{ backgroundColor: 'black' }, { padding: 6 }, { borderRadius: 18 }, { margin: 6 }, { flexDirection: 'row' }, { alignItems: 'center' }]}>
        //     <View style={[{ backgroundColor: light_primary_color }, { width: 24 }, { height: 48 }, { borderWidth: 0 }, { borderTopLeftRadius: 12 }, { borderBottomLeftRadius: 12 }, { justifyContent: 'space-around' }]}>
        //         <View style={[{ backgroundColor: 'white' }, { width: 12 }, { height: 12 }, { borderWidth: 0 }, { borderRadius: '100%' }, { marginTop: 6 }, { marginLeft: 6 }]}></View>
        //         <View style={[{ marginBottom: 6 }]}>
        //             <View style={[{ backgroundColor: 'white' }, { width: 6 }, { height: 6 }, { borderWidth: 0 }, { marginLeft: 12 }]}></View>
        //             <View style={[{ backgroundColor: 'white' }, { width: 12 }, { height: 6 }, { borderWidth: 0 }, { marginLeft: 12 }]}></View>
        //         </View>
        //     </View>
        //     <View style={[{ backgroundColor: 'white' }, { width: 24 }, { height: 48 }, { borderWidth: 0 }, { borderTopRightRadius: 12 }, { borderBottomRightRadius: 12 }, { justifyContent: 'space-around' }]}>
        //         <View style={[{ backgroundColor: light_primary_color }, { width: 12 }, { height: 12 }, { borderWidth: 0 }, { borderRadius: '100%' }, { marginTop: 6 }, { marginLeft: 6 }]}></View>
        //         <View style={[{ width: 12 }, { marginBottom: 6 }, { alignItems: 'flex-end' }]}>
        //             <View style={[{ backgroundColor: light_primary_color }, { width: 6 }, { height: 6 }, { borderWidth: 0 }]}></View>
        //             <View style={[{ backgroundColor: light_primary_color }, { width: 12 }, { height: 6 }, { borderWidth: 0 }]}></View>
        //         </View>
        //     </View>
        // </View>

        // mimical logo large
        // <View style={[{ backgroundColor: 'black' }, { padding: 8 }, { borderRadius: 24 }, { margin: 8 }, { flexDirection: 'row' }, { alignItems: 'center' }]}>
        //     <View style={[{ backgroundColor: light_primary_color }, { width: 32 }, { height: 64 }, { borderWidth: 0 }, { borderTopLeftRadius: 16 }, { borderBottomLeftRadius: 16 }, { justifyContent: 'space-around' }]}>
        //         <View style={[{ backgroundColor: 'white' }, { width: 16 }, { height: 16 }, { borderWidth: 0 }, { borderRadius: '100%' }, { marginTop: 8 }, { marginLeft: 8 }]}></View>
        //         <View style={[{ marginBottom: 8 }]}>
        //             <View style={[{ backgroundColor: 'white' }, { width: 8 }, { height: 8 }, { borderWidth: 0 }, { marginLeft: 16 }]}></View>
        //             <View style={[{ backgroundColor: 'white' }, { width: 16 }, { height: 8 }, { borderWidth: 0 }, { marginLeft: 16 }]}></View>
        //         </View>
        //     </View>
        //     <View style={[{ backgroundColor: 'white' }, { width: 32 }, { height: 64 }, { borderWidth: 0 }, { borderTopRightRadius: 16 }, { borderBottomRightRadius: 16 }, { justifyContent: 'space-around' }]}>
        //         <View style={[{ backgroundColor: light_primary_color }, { width: 16 }, { height: 16 }, { borderWidth: 0 }, { borderRadius: '100%' }, { marginTop: 8 }, { marginLeft: 8 }]}></View>
        //         <View style={[{ width: 16 }, { marginBottom: 8 }, { alignItems: 'flex-end' }]}>
        //             <View style={[{ backgroundColor: light_primary_color }, { width: 8 }, { height: 8 }, { borderWidth: 0 }]}></View>
        //             <View style={[{ backgroundColor: light_primary_color }, { width: 16 }, { height: 8 }, { borderWidth: 0 }]}></View>
        //         </View>
        //     </View>
        // </View>
    );
}

export default Logo;