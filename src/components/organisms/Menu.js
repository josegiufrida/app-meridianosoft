import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import colors from '../../theme/colors';

import Item from '../molecules/Item';


const Menu = () => {
    return(
        <ScrollView>
            <Item name={'Clientes'} table={'clientes'} accentColor={colors.violet}/>
            <Item name={'Proveerdores'} table={'proveerdores'} accentColor={colors.blue}/>
            <Item name={'Saldos'} table={'saldos'} accentColor={colors.green}/>
            <Item name={'Articulos'} table={'articulos'} accentColor={colors.orange}/>
            <Item name={'Comprobantes'} table={'comprobantes'} accentColor={colors.red}/>
        </ScrollView>
    );
};

export default Menu;