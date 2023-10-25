import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledTextInput from '../../atoms/StyledTextInput/StyledTextInput.jsx';
import Button from '../../atoms/button/button.jsx';
import ImageAtom from '../../atoms/Image/Image.jsx';

import expo from '../../../../assets/expo.png';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 12,
    },
    inputContainer: {
        marginBottom: 20,
        marginTop: 10,
    },
    image: {
        width: 150, 
        height: 150,
        alignSelf: 'center',
    },
});

const LoginForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <ImageAtom source={expo} style={styles.image} />
            <View style={styles.inputContainer}>
                <StyledTextInput
                    name="email"
                    placeholder="E-mail"
                />
                <StyledTextInput
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                />
            </View>
            <Button onPress={onSubmit} title="Log In" />
        </View>
    );
};

export default LoginForm;
