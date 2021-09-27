import React, { useState } from 'react';
import { Button, Platform, Text, View, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';

import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import MI from 'react-native-vector-icons/MaterialIcons'
import I from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage';
//import CheckBox from '@react-native-community/checkbox';

export default function SetUp({navigation}) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    //const [wantPersonalized, setWantPersonalized] = useState(false)

    return (
        <View style={styles.container}>
            <Text style = {styles.h1}>Let's set you up for success</Text>
            <Text style = {styles.label}>Account Type</Text>
            <Text style = {styles.h4}>Aspiring towards a Dream house or tracking Rent pay? </Text>
            <View style = {styles.typesCapsule}>
                <TouchableOpacity 
                    style={styles.buttonStyleL}
                    activeOpacity={0.5}
                >
                    <MCI 
                        name = 'home-analytics'
                        size = {30}
                        color = 'blue'
                    />
                    <Text style={styles.buttonTextStyle}>Build a Dream</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonStyleR}
                    activeOpacity={0.5}
                >
                    <MI 
                        name = 'payments'
                        size = {30}
                        color = 'blue'
                    />
                    <Text style={styles.buttonTextStyle}>Personal Rent</Text>
                </TouchableOpacity>
            </View>
            <View style = {{flexDirection: 'row', marginVertical: 30, alignItems: 'center', alignContent: 'flex-start'}}> 
                <I
                    name = 'checkbox'
                    size = {15}
                /> 
                <Text style = {{marginLeft: 10, marginRight: 6}}>I want a personalized experience</Text>
                <I name = 'ios-information-circle-outline' size = {12}/>
            </View>
            <Text style = {{color: '#818589'}}>
                This will help personalize your recommendations and make your experience fitted to
                achieve your goals faster. This setting can be chenged in your managed tab.
            </Text>
            <TouchableOpacity 
            onPress = {() => navigation.navigate('TabNavigationRoutes') } 
            style={styles.nextButton}
            > 
                <Text style = {{fontWeight: 'bold', color: 'white', fontSize: 18, alignSelf: 'center', alignContent: 'center'}}>NEXT</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 35,
        flex: 1,
        paddingTop: 100,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#f8f8ff'
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        color: 'black',
        fontWeight: 'bold',
    },
    h1: {
        // flex: 1, 
        fontSize: 20,
        alignSelf: "center",
        paddingBottom: 50,
        ...Platform.select({
            ios: {
                fontFamily: 'Copperplate' 
            },
            android: {
                fontFamily: 'notoserif'
            },
            default: {
                fontFamily: 'sans-serif-medium'
            }
        })
    },
    h4: {
        marginTop: 12,
        fontSize: 12,
        color: '#C0C0C0',
        fontWeight: '600'
    },
    typesCapsule: {
        flexDirection: 'row',
    },
    buttonStyleL: {
        marginTop: 12,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        color: '#FFFFFF',
        borderColor: '#C0C0C0',
        height: 35,
        width: 150,
        borderBottomLeftRadius: 7,
        borderTopLeftRadius: 7,
        alignSelf: 'auto',
        justifyContent: 'flex-end',
    },
    buttonStyleR: {
        marginTop: 12,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        color: '#FFFFFF',
        borderColor: '#C0C0C0',
        height: 35,
        width: 150,
        borderBottomRightRadius: 7,
        borderTopRightRadius: 7,
        alignSelf: 'auto',
        justifyContent: 'flex-end',
    },
    buttonTextStyle: {
        color: 'black',
        fontSize: 16,
        alignSelf: 'auto',
        paddingHorizontal: 5,
        paddingVertical: 5   
    },
    nextButton: {
        marginVertical: 30,
        width: 100,
        height: 40,
        borderRadius: 10,
        paddingVertical: 10,
        alignSelf: 'auto',
        backgroundColor: 'blue',
        alignContent: 'flex-start'
    }
});