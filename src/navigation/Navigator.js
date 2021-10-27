import React, { useContext } from 'react';
import { Alert, Easing, InteractionManager  } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators } from '@react-navigation/stack';
//import { fromLeft } from 'react-navigation-transitions';

// Import screens
import LoadingScreen from '../../src/screens/Loading';
import LoginScreen from '../../src/screens/Login';
import HomeScreen from '../../src/screens/Home';
import SearchScreen from '../../src/screens/Search';
import ClientScreen from '../../src/screens/Client';
import SupplierScreen from '../../src/screens/Supplier';
import ProductScreen from '../../src/screens/Product';
import { AuthContext } from '../utils/AuthContext';
import SplashScreen from 'react-native-splash-screen';



//const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

function Navigator() {

    const { auth, isLoading } = useContext(AuthContext);

    if(!isLoading){
        // Hide splash screen after all transitions finish
        InteractionManager.runAfterInteractions(() => {
            SplashScreen.hide();
        });
    }

    return (
        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            > 

                { !isLoading &&

                    auth.token ? (
                        <>
                            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Perro' }} />
                            <Stack.Screen name="Search" component={SearchScreen} />
                            <Stack.Screen name="Client" component={ClientScreen} />
                            <Stack.Screen name="Supplier" component={SupplierScreen} />
                            <Stack.Screen name="Product" component={ProductScreen} />
                        </>
                    ) : (
                        <Stack.Screen name="Login" component={LoginScreen} />
                    )

                }

            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default Navigator;