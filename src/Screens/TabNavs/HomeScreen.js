import React, {useState, useEffect, useContext} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native';

import GradientText from '../Components/GradientText'
import Fontisto from 'react-native-vector-icons/Fontisto';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';
import HomeTabNav from '../Navs/HomeMidTabNavigator';
import RNSpeedometer from '../Components/Z-Indicator/Z-Indicator';
// import FormButton from '../components/FormButton';
//import {AuthContext} from '../navigation/AuthProvider';

// import firestore from '@react-native-firebase/firestore';
// import PostCard from '../components/PostCard';

const HomeScreen = ({navigation}) => {
    //const {user, logout} = useContext(AuthContext);
    const zScore = 700;

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#2196f3'}}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={{justifyContent: 'flex-start', alignItems: 'flex-start'}}
                showsVerticalScrollIndicator={false}
            >
                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Image
                        style={styles.userImg}
                        source={require('../../assets/Image/a_queen_i_stan.jpg')}
                    />
                    <View style={{marginLeft: 15, alignContent: 'flex-start'}}>
                        <Text style={styles.userName}>Stan A. Queen</Text>
                        <Text style={styles.aboutUser}>Aspire | Track</Text>
                    </View>
                    <TouchableOpacity style = {{flexDirection: 'row', alignItems: 'flex-end', marginLeft: 120}}>
                        <Fontisto
                            name = 'heartbeat-alt'
                            color = 'green'
                            size = {18}
                        />
                        <Text style={{marginHorizontal: 5}}>{zScore}</Text>
                        <MCI
                            name = 'home-heart'
                            color = 'green'
                            size = {20}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, margin: 30, alignItems: 'center'}}>
                    <RNSpeedometer value={zScore} size={300} />
                </View>
                <View style={{marginTop: '30%'}}>
                    <View style={styles.searchBtnStyle}>
                        <FA5 name = 'search-location' size = {25} style={{marginLeft: 10}}/>
                        <TextInput style={styles.inputStyle} placeholder = "Explore Cities"/>
                    </View>
                    <View style={styles.sloganTxt}>
                        <GradientText>
                            Your Dreams, a Budget, Your Reality.
                        </GradientText>
                    </View>
                </View>
                <View style={styles.homeTabNav}>
                    <HomeTabNav />
                </View> 
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6495ed',
        padding: 15,
    },
    userImg: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    userName: {
        fontSize: 18,
        color: 'white',
        fontWeight: '400',
    },
    aboutUser: {
        fontSize: 12,
        fontWeight: '300',
        color: 'white',
    },
    userBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
    },
    userBtn: {
        borderColor: '#2e64e5',
        borderWidth: 2,
        borderRadius: 3,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
    },
    userBtnTxt: {
        color: '#2e64e5',
    },
    userInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
    },
    userInfoItem: {
        justifyContent: 'center',
    },
    userInfoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    userInfoSubTitle: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
    sloganTxt: {
        marginHorizontal: "18%",
        alignItems: 'center',
        alignSelf: 'auto',
        justifyContent: 'center',
        fontStyle: 'italic'
    },
    searchBtnStyle: {
        backgroundColor: '#F0EEEE',
        height: 40,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        marginHorizontal: 10,
        color: '#46606A',
        fontSize: 18,
        flex: 1
    },
    homeTabNav: {
        flex: 1,
        marginTop: 10,
        backgroundColor: "#F0EEEE",
        flexDirection: "column"
    }
});

export default HomeScreen;
