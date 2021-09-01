import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from '../atoms/Icon';
import Arrow from '../atoms/Arrow';


const Item = ({name, search, accentColor}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigation.navigate('Search', {search: search})}
        >
            <Icon accentColor={accentColor}></Icon>
            <Text style={styles.title}>{name}</Text>
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
        flex: 1,
        fontSize: 17,
        marginLeft: 14,
    },
});
  

export default Item;