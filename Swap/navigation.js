import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import Home from './Screens/Home';
import ClothingDetail from './Screens/ClothingDetail';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function RootNavigation() {

    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    }
    let [fontsLoaded] = useFonts({
        'Montserrat': require('./assets/fonts/Montserrat-Bold.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='ClothingDetail' component={ClothingDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}