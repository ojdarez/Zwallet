import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../TabNavs/HomeScreen';
import ManageScreen from '../TabNavs/Manage';
import InsightsScreen from '../TabNavs/Insights';

const BottomTab = createBottomTabNavigator();

const TabNavigationRoutes = () => {
    const Zest_Blue = "#2196f3"
    const Zest_Gold = "#DA962F"
    const Zest_Silver = "#C0C0C0"
    const Zest_Purple = "#219"
    
    return (
        <BottomTab.Navigator
            initialRouteName = "Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return (
                            <Ionicons
                                name={focused ? 'md-home' : 'ios-home-outline'}
                                size={size}
                                color={focused ? Zest_Blue : Zest_Silver}
                            />
                        );
                    } else if (route.name === 'Manage') {
                        return (
                            <MaterialCommunityIcons
                                name={focused ? 'file-key' : 'file-key-outline'}
                                options={{ tabBarBadge: 3 }}
                                color={focused ? Zest_Blue : Zest_Silver}
                                size={size}
                            />
                        );
                    } else if (route.name === 'Insights') {
                        return (
                            <MaterialIcons
                                name={focused ? 'insights' : 'insights'}
                                color={focused ? Zest_Blue : Zest_Silver}
                                size={size}
                            />
                        );
                    } 
                },
                tabBarInactiveTintColor: '#C0C',
                tabBarActiveTintColor: '#2196f3'
            })}
        >
            <BottomTab.Screen name="Manage" component={ManageScreen}/>
            <BottomTab.Screen name="Home" component={HomeScreen} />
            <BottomTab.Screen name="Insights" component={InsightsScreen} options={{ tabBarBadge: 3, tabBarBadgeStyle: {backgroundColor: '#EB0808'} }}/>
        </BottomTab.Navigator>
    );
};

export default TabNavigationRoutes;
