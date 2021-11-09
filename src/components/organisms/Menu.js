import React from 'react';
import { StyleSheet, ScrollView, Text, View, Alert, FlatList } from 'react-native';
import colors from '../../theme/colors';

import Item from '../molecules/Item';


const Menu = ({collections}) => {

    const defaultColor = (name) => {
        return colors.menu[name] || colors.menu.default;
    }

    const renderItem = ({item}) => (
        <Item collection={item} accentColor={defaultColor(item.name)} />
    );

    return(
        <View style={{flex: 1, marginHorizontal: -14}}>
            <FlatList
                data={collections}
                extraData={collections}
                renderItem={renderItem}
                keyExtractor={item => item.collection_id}
                contentContainerStyle={{paddingHorizontal: 14}}
            />
        </View>
    );
};

export default Menu;