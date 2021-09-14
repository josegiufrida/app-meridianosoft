import React, { useContext } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { AuthContext } from '../utils/AuthContext';

import Menu from '../components/organisms/Menu';
import axios from 'axios';
import API from '../utils/api';

function HomeScreen({ navigation }) {

    const { auth, logOut } = useContext(AuthContext);

    const logout = async () => {
        try{
            await axios.post(API.LOGOUT);
            logOut();
        } catch (error) {
            // On Server Error
            if(error.response){

                // O tambien por codigo 400, 404 etc                    #####################

                if(error.response.data?.error === 'unauthenticated'){
                    // Lost token, need re-login
                }

                if(error.response.data?.error === 'unauthorized'){
                    // Not authorized to query this resource
                }

                //setErrorMessage(error.response.data?.message);
                // SET ERROR HTTP CODE OR ERROR NAME

            } else {
                //setErrorMessage('Ha ocurrido un error');
            }

            console.error(error);
        }
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>{auth.company_name}</Text>
            <Text style={styles.subtitle}>Actualizado hace 34 minutos</Text>

            <Menu />

            <Button
                title={'LOGOUT'}
                onPress={logout}
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