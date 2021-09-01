import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import colors from '../../theme/colors';

const Arrow = () => (
    <View style={styles.container}>
        <Text>A</Text>
    </View>
);


const styles = StyleSheet.create({
    container: {
        height: 24,
        width: 24,

        alignItems: 'center',
        alignContent: 'center',
        
        backgroundColor: colors.arrow,
        borderRadius: 12,
    },
});


export default Arrow;