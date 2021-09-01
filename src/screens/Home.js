import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Menu from '../components/organisms/Menu';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Gafe</Text>
            <Text style={styles.subtitle}>Actualizado hace 34 minutos</Text>

            <Menu />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
        flexDirection: 'column'
    },

    title: {
        fontSize: 26,
    },

    subtitle: {
        fontSize: 14,
        marginBottom: 30,
    }
});

  
export default HomeScreen;