import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import colors from '../../theme/colors';

import Item from '../molecules/Item';


const Menu = () => {
    return(
        <ScrollView>
            <Item name={'Clientes'} search={'clientes'} accentColor={colors.violet}/>
            <Item name={'Proveerdores'} search={'proveerdores'} accentColor={colors.blue}/>
            <Item name={'Saldos'} search={'saldos'} accentColor={colors.green}/>
            <Item name={'Articulos'} search={'articulos'} accentColor={colors.orange}/>
            <Item name={'Comprobantes'} search={'comprobantes'} accentColor={colors.red}/>
        </ScrollView>
    );
};

export default Menu;