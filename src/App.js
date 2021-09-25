import React, { useEffect } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

// Import Navigators from React Navigation
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import AsyncStorage from '@react-native-async-storage/async-storage';

import SplashScreen from 'react-native-splash-screen';
import SignInScreen from './Screen/AppEntry/SignInScreen';
import SignUpScreen from './Screen/AppEntry/SignUpScreen';
import TabNavigationRoutes from './Screen/TabNavigationRoutes';


enableScreens(true);
const Stack = createStackNavigator();

const routeNav = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@user_id')
    return jsonValue != null ? "TabNavigationRoutes" : "Auth";
  } catch(e) {
    console.log("Can't route after splash screen!")
  }
}


const Auth = () => {
  const isDarkMode = useColorScheme() === 'dark';

  //Stack Nav or Login & Sign Up Screens
  return (
    <Stack.Navigator initialRouteName = "SignInScreen">
      <Stack.Screen 
        name = "SignInScreen"
        component = {SignInScreen}
        options = {{headerShown: false}}
      />
      <Stack.Screen 
        name = "SignUpScreen"
        component = {SignUpScreen}
        options = {{
          title: 'Register',
          headerStyle: {
            backgroundColor: isDarkMode ? styles.darker : styles.lighter,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
      />
    </Stack.Navigator>
  );
};
const splash = () => {
  return componentDidMount = () => {
    SplashScreen.hide()
  };
}
const App = () => {
  useEffect (() => {
    splash();
  }, []);
  
  return (
    <NavigationContainer initialRouteName = {routeNav()} >
      <Stack.Navigator> 
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name = "Auth"
          component = {Auth}
          options = {{headerShown: false}}
        />
        {/* Navigation Tabs as a landing page */}
        <Stack.Screen
          name = "TabNavigationRoutes"
          component = {TabNavigationRoutes}
          options = {{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({  
  lighter: {color: '#F3F3F3'},
  darker: {color: '#222'}
});

export default App;
