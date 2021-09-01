import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';


const hexToRgbA = (hex, opacity) => {
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+ opacity +')';
    } else {
        return 'rgba(0,0,0,1)';
    }
}


const Icon = ({accentColor}) => (
    <View style={[styles.container, {backgroundColor: hexToRgbA(accentColor, 0.15)}]}>
        <Text>I</Text>
    </View>
);


const styles = StyleSheet.create({
    container: {
        height: 46,
        width: 46,

        padding: 11,
        borderRadius: 6, 
    },
});


export default Icon;