import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Arrow from '../atoms/Arrow';
import colors from '../../theme/colors';


const Result = ({title, subTitle}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigation.navigate('Search', {search: search})}
        >
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
            
            <Arrow />
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',

        marginBottom: 16,
        padding: 14,

        backgroundColor: '#FFFFFF',
        borderRadius: 6,
    },

    title:{
        fontSize: 14,
        color: colors.textPrimary,
    },

    subTitle:{
        fontSize: 14,
        color: colors.textSecondary,
    }
});
  

export default Result;