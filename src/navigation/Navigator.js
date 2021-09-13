import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Import screens
import LoginScreen from '../../src/screens/Login';
import HomeScreen from '../../src/screens/Home';
import SearchScreen from '../../src/screens/Search';
import ClientScreen from '../../src/screens/Client';
import { AuthContext } from '../utils/AuthContext';



const Stack = createNativeStackNavigator();

function Navigator() {

    const { auth } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                { auth.token ? (
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Perro' }} />
                        <Stack.Screen name="Search" component={SearchScreen} />
                        <Stack.Screen name="Client" component={ClientScreen} />
                    </>
                ) : (
                    <Stack.Screen name="Login" component={LoginScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;