import React from 'react';
import {
    View,
    // Text,
    StyleSheet,
} from 'react-native';
// import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

const StartScreen = ({ navigation }) => (
    <View style={styles.container}>
        {/* <Background > */}
        <Logo />
        <Header>News App</Header>
        <Paragraph>Read your favorite new here.</Paragraph>
        <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
            Login
    </Button>
        <Button
            mode="outlined"
            onPress={() => navigation.navigate('RegisterScreen')}>
            Sign Up
    </Button>
        {/* </Background> */}
    </View>
);

export default StartScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
