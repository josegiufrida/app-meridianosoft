import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import SvgIcons from '../../assets/svg/SvgIcons';
import colors from '../../theme/colors';

const Arrow = () => (
    <View style={styles.container}>
        <View style={{height: 10, width: 5}}>
            <SvgIcons src={'arrow'} color={colors.arrow}/>
        </View>
    </View>
);


const styles = StyleSheet.create({
    container: {
        height: 24,
        width: 24,

        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        
        backgroundColor: colors.arrowCircle,
        borderRadius: 12,
    },
});


export default Arrow;