import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';

import { login } from '../store/actions';

const LoginScreen = (props) => {
    const { navigation, loginFunc, user, isLoading, isLoggedIn, isError, errorMsg } = props;
    const [email, setEmail] = useState({ value: 'kumarraja1989@gmail.com', error: '' });
    const [password, setPassword] = useState({ value: 'test@123$', error: '' });

    const onLoginPressed = () => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);
        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }
        loginFunc({ email, password });
        // if (isLoggedIn) {
        //     navigation.reset({
        //         index: 0,
        //         routes: [{ name: 'Dashboard' }],
        //     })
        // }
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
            <Header>Welcome back.</Header>
            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={text => setEmail({ value: text, error: '' })}
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
                onChangeText={text => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ResetPasswordScreen')}>
                    <Text style={styles.forgot}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
            <Button mode="contained" onPress={onLoginPressed}>
                Login
      </Button>
            <View style={styles.row}>
                <Text>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
};

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        isLoggedIn: state.auth.isLoggedIn,
        isLoading: state.auth.isLoading,
        isError: state.auth.isError,
        errorMsg: state.auth.errorMsg,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginFunc: (data) => dispatch(login(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);


const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
});
