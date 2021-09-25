import React, {useState, createRef} from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    StyleSheet, TextInput, View, Text, 
    ScrollView, Image, Keyboard, Button,
    TouchableOpacity, KeyboardAvoidingView, TouchableOpacityBase,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FBLogin from '../Components/FacebookLogin'

import Loader from '../Components/Loader';

const SignInScreen = ({props}) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPhoneNumber, setUserPhoneNumber] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');

    const passwordInputRef = createRef();

    const handleSubmitPress = () => {

    }
    const navigation = useNavigation();

    return (
        <View style={styles.mainBody}>
            <Loader loading = {loading}/>
            <ScrollView
                keyboardShouldPersistTaps = "handled"
                contentContainerStyle = {{flex: 1, justifyContent: 'center', alignContent: 'center'}}
            >
                <View>
                    <KeyboardAvoidingView enabled>
                        <View style = {{alignItems: 'center'}}>
                            <Image style = {styles.appLogo} source = {require('../../assets/Image/appName.png')} />
                        </View>
                        <Text style = {styles.welcome}>Welcome</Text>
                        <Text style = {styles.pageName}>Sign In</Text>
                    </KeyboardAvoidingView>
                </View>
                <View style={styles.sectionStyle}>
                    <Image 
                        source = {{uri: "https://img.icons8.com/ios/50/000000/user--v2.png"}}
                        style = {styles.imageIconStyle}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                        placeholder="Email Address | Phone Number" //dummy@abc.com
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        returnKeyType="next"
                        onSubmitEditing={() =>
                            passwordInputRef.current &&
                            passwordInputRef.current.focus()
                        }
                        underlineColorAndroid="#f000"
                        blurOnSubmit={false}
                    />
                </View>
                <View style={styles.sectionStyle}>
                    <Image 
                        source = {require('../../assets/Image/passwordKey.png')}
                        style = {styles.imageIconStyle}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(UserPassword) =>
                            setUserPassword(UserPassword)
                        }
                        placeholder="Enter Password" //12345
                        placeholderTextColor="#8b9cb5"
                        keyboardType="default"
                        ref={passwordInputRef}
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                        secureTextEntry={true}
                        underlineColorAndroid="#f000"
                        returnKeyType="next"
                    />
                </View>
                {errortext != '' 
                        ? ( <Text style={styles.errorTextStyle}> {errortext} </Text>) 
                        : null
                }
                <View style ={styles.onSubmitStyle}>
                    <Text 
                        style = {{alignItems: 'center', color: '#2C2C2B', flex: 1, fontStyle: 'italic', fontFamily: 'sans-serif-light'}}
                        onPress = {() => navigation.navigate('TabNavigationRoutes') }//TODO
                    > Forgot Password? 
                    </Text>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress = {handleSubmitPress}
                    >
                        <Text style={styles.buttonTextStyle}>CONNECT</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 50}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    <View>
                        <Text style={{width: 100, textAlign: 'center', fontStyle: 'italic'}}>or Login via</Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        alignContent: 'center',
        paddingHorizontal: 35
    },
    appLogo: {
        width: '50%',
        height: 100,
        margin: 30,
        resizeMode: 'contain',
    },
    imageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    welcome: {
        fontFamily: 'notoserif',
        fontSize: 18,
        color: '#757575'
    },
    pageName: {
        fontFamily: 'serif',
        fontSize: 40,
        color: "#000000"
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#000',
        height: 35,
        marginTop: 20
    },
    onSubmitStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#000',
        height: 35,
        paddingTop: 20
    },
    buttonStyle: {
        flex: 1,
        backgroundColor: '#437aea',
        borderWidth: 1,
        color: '#FFFFFF',
        borderColor: '#000000',
        height: 35,
        width: 50,
        borderRadius: 16,
        alignSelf: 'auto',
        justifyContent: 'flex-end',
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingHorizontal: 5,
        paddingVertical: 5   
    },
    inputStyle: {
        flex: 1,
        color: '#000000',
        paddingLeft: 35,
        paddingRight: 15,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#3746c7',
        justifyContent: 'flex-start'
    },
    registerTextStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'}
});

export default SignInScreen;

