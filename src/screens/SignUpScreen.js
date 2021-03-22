import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { connect } from 'react-redux';
// components
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
//fuctions
import { theme } from '../theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import { nameValidator } from '../helpers/nameValidator';
import { signUp } from '../store/actions';

const SignUpScreen = (props) => {

    const { navigation, signUpFunc,
        // isLoading, isError, errorMsg,
        isLoggedIn } = props;
    const [name, setName] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const onSignUpPressed = () => {
        const nameError = nameValidator(name.value);
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);
        if (emailError || passwordError || nameError) {
            setName({ ...name, error: nameError });
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }
        // console.log('onSignUpPressed', { navigation, signUpFunc, isLoading, isError, errorMsg, isLoggedIn, name, email, password });
        signUpFunc({
            name, email, password,
        });


    };

    useEffect(() => {
        if (isLoggedIn) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Dashboard' }],
            });
        }
    }, [navigation, isLoggedIn]);

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>Create New Account</Header>
            <TextInput
                label="Name"
                returnKeyType="next"
                value={name.value}
                onChangeText={(text) => setName({ value: text, error: '' })}
                error={!!name.error}
                errorText={name.error}
            />
            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            <Button
                mode="contained"
                onPress={onSignUpPressed}
                style={styles.signupBtn}
            >
                Sign Up
          </Button>
            <View style={styles.row}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
                    <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading,
        isLoggedIn: state.auth.isLoggedIn,
        isError: state.auth.isError,
        errorMsg: state.auth.errorMsg,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signUpFunc: (data) => dispatch(signUp(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
    signupBtn: {
        marginTop: 24,
    },
});
