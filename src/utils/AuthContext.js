import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API from './api';
import { Alert } from 'react-native';


const AuthContext = createContext({});


const configureAxiosHeaders = (token) => {
	axios.defaults.headers['Authorization'] = 'Bearer ' + token;
	axios.defaults.headers['Accept'] = 'application/json';
	axios.defaults.headers['Content-Type'] = 'application/json';
};


const AuthProvider = ({ children }) => {


  	const [isLoading, setIsLoading] = useState(true);
  	const [auth, setAuthState] = useState({});


  	// Get current auth state
  	const getAuthState = async () => {
    	try {
			
     		const token = await EncryptedStorage.getItem('@token');

			const user = JSON.parse( await AsyncStorage.getItem('@user') || {});

			// Configure axios headers
			configureAxiosHeaders(token);

			setAuthState({
				'token': token, 
				...user
			});

			setIsLoading(false);

			console.info('Get auth state');

    	} catch (error) {

			// Error retriving token or user data
			// Go to login
      		setAuthState({});
			setIsLoading(false);

    	}
  	};


	
  	// Update auth state
  	const setAuth = async (data) => {
		
		return new Promise ( async (resolve, reject) => {
			try {

				if(!data){
					throw new Error('empty data');
				}

				// New object without token
				const {token, ...data_without_token} = data;

				await EncryptedStorage.setItem('@token', data.token);

				await AsyncStorage.setItem('@user', JSON.stringify(data_without_token));

				// Configure axios headers
				configureAxiosHeaders(data.token);

				setAuthState(data);

				console.info('Auth setted');

				resolve();

			} catch (error) {
				reject(error);
				console.error(error);
			}
		});
		
  	};



	const logOut = async () => {
		try {

			await axios.post(API.LOGOUT);
			configureAxiosHeaders('');

			console.info('User logout');

			clearUserData();

		} catch (error){

            if(error.response){

				switch (error.response.status){

					case 401:
						// Unauthenticated
						// Finish logout
						configureAxiosHeaders('');
						clearUserData();
						break;
					
					default:
						Alert.alert(
							'Ha ocurrido un error',
							'Compruebe su conexión de internet',
							[{ text: 'Cancel', style: 'cancel' }],
							{ cancelable: true }
						);
						
				}

            } else {
                Alert.alert(
					'Ha ocurrido un error',
					'Compruebe su conexión de internet',
					[{ text: 'Cancel', style: 'cancel' }],
					{ cancelable: true }
				);
            }

            console.error(error);

		}
	};



	const clearUserData = async () => {
		try {

			await EncryptedStorage.clear();
			
			await AsyncStorage.clear();

			setAuthState({});

			console.info('User data cleared');
			
		} catch (error){
			
			// There was an error on the native side
			// Finish clear user data
			setAuthState({});
			console.error(error);

		}
	};


  	useEffect(() => {
		getAuthState();
  	}, []);



  	return (
    	<AuthContext.Provider value={{ isLoading, auth, setAuth, logOut, clearUserData }}>
      		{children}
    	</AuthContext.Provider>
  	);
};



export { AuthContext, AuthProvider };