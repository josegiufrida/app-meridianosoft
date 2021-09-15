import React, { useContext } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { AuthContext } from '../utils/AuthContext';

import Menu from '../components/organisms/Menu';


function HomeScreen({ navigation }) {

    const { auth, logOut } = useContext(AuthContext);

    return (
        <View style={styles.container}>

            <Text style={styles.title}>{auth.company_name}</Text>
            <Text style={styles.subtitle}>Actualizado hace 34 minutos</Text>

            <Menu />

            <Button
                title={'LOGOUT'}
                onPress={logOut}
            />

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