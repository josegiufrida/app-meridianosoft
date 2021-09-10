import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Import screens
import HomeScreen from '../../src/screens/Home';
import SearchScreen from '../../src/screens/Search';
import ClientScreen from '../../src/screens/Client';



const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Perro' }} />
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="Client" component={ClientScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;