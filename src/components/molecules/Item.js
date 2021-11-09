import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from '../atoms/Icon';
import Arrow from '../atoms/Arrow';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';


const Item = ({collection, accentColor}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigation.navigate('Search', {collection: collection})}
        >
            <Icon src={collection.name} accentColor={accentColor}></Icon>
            <Text style={styles.title}>{collection.title}</Text>
            <Arrow />
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',

        marginBottom: 20,
        padding: 14,

        backgroundColor: colors.white,
        borderRadius: 6,
       
        shadowColor: '#787878',
        elevation: 8,
    },

    title:{
        flex: 1,
        color: colors.textPrimary,
        fontFamily: fonts.type.poppinsMedium,
        paddingTop: 3,
        fontSize: 17,
        marginLeft: 14,
    },
});
  

export default Item;