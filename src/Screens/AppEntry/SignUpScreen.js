import * as React from 'react';
import { Button, Text, View } from 'react-native';

export default function SignUpScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress = {() => navigation.navigate('TabNavigationRoutes')}>SignUp!</Text>
        </View>
    );
}