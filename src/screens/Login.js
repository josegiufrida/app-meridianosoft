
import React, { useState, useContext, useRef } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Platform, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import colors from '../theme/colors';
import axios from 'axios';
import API from '../utils/api';
import { AuthContext } from '../utils/AuthContext';
import fonts from '../theme/fonts';
import DevelopedBy from '../components/atoms/DevelopedBy';
import { StatusBar } from 'react-native';
import SvgIcons from '../assets/svg/SvgIcons';

function Login({ navigation }) {

    StatusBar.setBackgroundColor(colors.backgroundColor, false);

    const { setAuth } = useContext(AuthContext);

	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);

    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const refPassword = useRef();


    const change_visibility_password = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    
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

            <View style={{alignItems: 'center', marginTop: 60, marginBottom: 45}}>
                <Image
                    style={styles.icon}
                    source={require('../assets/images/icon-logo-meridianosoft.png')}
                />
            </View>

            <View style={{alignItems: 'center', marginBottom: 36}}>
                <Text style={styles.title}>Bienvenido</Text>
                <Text style={styles.subTitle}>Ingresa con las credenciales enviadas</Text>
            </View>


            { error &&
                <View style={styles.errorContainer}>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
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
                style={styles.input}
            />

            <View style={{marginTop: 14}}>
                <View style={{zIndex: 1}}>
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
                        style={styles.input}
                        secureTextEntry={isPasswordVisible}
                    />
                </View>

                <TouchableWithoutFeedback
                    onPress={() => change_visibility_password()}
                >
                    <View style={styles.see_password}>
                        { isPasswordVisible ?
                            <SvgIcons src={'eye'} size={24} />
                            :
                            <SvgIcons src={'eyeoff'} size={24} />
                        }
                    </View>
                </TouchableWithoutFeedback>
            </View>

            <TouchableOpacity
                onPress={logIn}
            >
                <View style={styles.login_button}>
                    <Text style={styles.login_button_text}>Ingresar</Text>
                </View>
            </TouchableOpacity>


            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end'}}>
                <DevelopedBy />
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
        flexDirection: 'column',
    },

    icon: {
        height: 47,
        width: 60,
    },

    title: {
        fontFamily: fonts.type.poppinsMedium,
        fontSize: 26,
    },

    subTitle: {
        fontFamily: fonts.type.poppinsRegular,
        fontSize: 14,
        color: colors.textSecondary,
    },

    errorContainer: {
        marginBottom: 14,
        paddingVertical: 7,
        paddingHorizontal: 14,
        backgroundColor: 'rgba(252, 53, 87, 0.7)',
        borderRadius: 6,
        borderWidth: 1.8,
        borderColor: colors.red
    },

    errorMessage: {
        fontFamily: fonts.type.poppinsMedium,
        fontSize: 14,
        color: 'white',
    },

    input: {
        height: 60,
        paddingTop: 15,
        paddingHorizontal: 14,
        
        backgroundColor: colors.white,
        borderRadius: 6,

        fontFamily: fonts.type.poppinsRegular,
        fontSize: 16,
        elevation: 4,
    },

    see_password: {
        position: 'absolute',
        height: '100%',
        justifyContent: 'center',
        zIndex: 2,
        right: 0,
        paddingHorizontal: 14,
    },

    login_button: {
        height: 60,
        width: '100%',

        marginTop: 28,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: colors.primary,
        borderRadius: 6,
    },

    login_button_text: {
        fontFamily: fonts.type.poppinsRegular,
        fontSize: 18,
        color: colors.white,
    },
});

  
export default Login;