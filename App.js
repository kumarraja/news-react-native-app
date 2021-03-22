import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {theme} from './src/theme';

import StartScreen from './src/screens/StartScreen';
import HomeScreen from './src/screens/DashboardScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ResetPasswordScreen from './src/screens/ForgetPwdScreen';

import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator
              // initialRouteName="StartScreen"
              initialRouteName="Dashboard"
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="StartScreen" component={StartScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={SignUpScreen} />
              <Stack.Screen name="Dashboard" component={HomeScreen} />
              <Stack.Screen
                name="ResetPasswordScreen"
                component={ResetPasswordScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
}
