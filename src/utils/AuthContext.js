import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthContext = createContext({});


const configureAxiosHeaders = (token) => {
	axios.defaults.headers['Authorization'] = 'Bearer ' + token;
	axios.defaults.headers['Accept'] = 'application/json';
	axios.defaults.headers['Content-Type'] = 'application/json';
};


const AuthProvider = ({ children }) => {

  	const [isLoading, setIsLoading] = useState(true);
  	const [auth, setAuthState] = useState({});

  	// Get current auth state from AsyncStorage
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

    	} catch (error) {
      		setAuthState({});
			setIsLoading(false);
    	}
  	};

  	// Update AsyncStorage & context state
  	const setAuth = async (data) => {
    	try {

			const {token, ...data_without_token} = data;

			await EncryptedStorage.setItem('@token', data.token);

			await AsyncStorage.setItem('@user', JSON.stringify(data_without_token));

			// Configure axios headers
			configureAxiosHeaders(data.token);

			setAuthState(data);

    	} catch (error) {
      		Promise.reject(error);
    	}
  	};


	const logOut = async () => {
		try {

			await EncryptedStorage.removeItem('@token');

			await AsyncStorage.removeItem('@user');

			configureAxiosHeaders('');

			setAuthState({});
			
		} catch (error){
			Promise.reject(error);
		}
	}


  	useEffect(() => {
		getAuthState();
  	}, []);


  	return (
    	<AuthContext.Provider value={{ auth, setAuth, isLoading, logOut }}>
      		{children}
    	</AuthContext.Provider>
  	);
};



export { AuthContext, AuthProvider };