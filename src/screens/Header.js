
import React, { useState, useContext, useRef } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Platform } from 'react-native';
import colors from '../theme/colors';

import HeaderNav from '../components/molecules/HeaderNav';


function Header() {

    return (
        <View style={styles.container}>

			<HeaderNav />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 48,
        paddingBottom: 36,
		backgroundColor: colors.primary,
    },
});

  
export default Header;