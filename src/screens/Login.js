
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

    
	const logIn = async () => {
        try {

            const response = await axios.post(API.LOGIN, {
                'username': username,
				'password': password,
				'device': Platform.OS
            });
            
            // Save user data
            setAuth(await response.data).catch(error => {
                throw new Error();
            });

        } catch (error) {

            if(error.response){

                var error_message = error.response.data?.message || 'Ha ocurrido un error';

				switch (error.response.status){

					case 401:
						// User or password incorrect
                            // BORDER
                            // BORDER
                        setErrorMessage(error_message);
						break;
                    
                    case 403:
                        // User inactive
                        setErrorMessage(error_message);
                        break;
                    
                    case 404:
                        // Company not found
                        setErrorMessage(error_message);
                        break;
                    
                    case 422:
                        // Invalid data or empty
                        if(error.response.data?.errors?.username){
                            // BORDER
                        }
    
                        if(error.response.data?.errors?.password){
                            // BORDER
                        }
                        setErrorMessage(error_message);
                        break;
					

					default:
						setErrorMessage(error_message);
					
				}

            } else {
                setErrorMessage('Ha ocurrido un error');
            }

            setError(true);
            console.error(error);

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
                onSubmitEditing={logIn}
            />

            <Button
                onPress={logIn}
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