
import React, { useState, useContext, useRef } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Platform } from 'react-native';
import colors from '../theme/colors';
import axios from 'axios';
import API from '../utils/api';
import { AuthContext } from '../utils/AuthContext';


function Login({ navigation }) {

    const { setAuth } = useContext(AuthContext);

	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const refPassword = useRef();

    
	const loginApi = async () => {
        try {

            const response = await axios.post(API.LOGIN, {
                'username': username,
				'password': password,
				'device': Platform.OS
            });
            
            // Save
            setAuth(await response.data);

        } catch (error) {

            if (error.response) {

                // Username or password empty
                if(error.response.status === 422){
                    if(error.response.data.errors?.username){
                        // Border
                    }

                    if(error.response.data.errors?.password){
                        // Border
                    }

                    setErrorMessage('Los datos ingresados son incorrectos');
                }

                // Username or password incorrect
                if(error.response.status === 401){
                    if(error.response.error === 'invalid-credentials'){
                        //Border
                        //Border
                        setErrorMessage(error.response.messge);
                    }
                }
            } else {
                setErrorMessage('Ha ocurrido un error');
            }

            console.error(error);
            setError(true);
        }
    };


     

    return (
        <View style={styles.container}>

            { error &&
                <View style={styles.errorContainer}>
                    <Text>{errorMessage}</Text>
                </View>
            }

			<TextInput
                onChangeText={setUsername}
                value={username}
                placeholder='Usuario'
                autoCompleteType='off'
                maxLength={100}
                selectionColor={colors.primary}
                placeholderTextColor={colors.textSecondary}
                returnKeyType={'next'}
                onSubmitEditing={() => refPassword.current.focus()}
                blurOnSubmit={false}
            />

			<TextInput
                onChangeText={setPassword}
                ref={refPassword}
                value={password}
                placeholder='Contraseña'
                autoCompleteType='off'
                maxLength={100}
                selectionColor={colors.primary}
                placeholderTextColor={colors.textSecondary}
                returnKeyType={'done'}
                onSubmitEditing={loginApi}
            />

            <Button
                onPress={loginApi}
                title='Ingresar'
                color='#841584'
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
    },

    errorContainer: {
        backgroundColor: 'red',
    },

    errorText: {
        color: 'white',
    }
});

  
export default Login;