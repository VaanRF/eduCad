import React from 'react';
import { EvilIcons } from '@react-native-vector-icons/evil-icons';

import { View, Text, Image, TextInput, KeyboardAvoidingView, } from 'react-native';
import { styles } from './styles';
import Logo from '../../assets/logo.png';

export default function Login() {
  return (
    <View style={styles.container}>

        <View style={styles.headerContainer}>
            <Image style={styles.logo} source={Logo} />
            <Text style={styles.textLogo}>eduCad</Text>
        </View>

        
        <KeyboardAvoidingView contentContainerStyle={styles.box} behavior="position" enabled>
        <Text style={styles.boxTitle}>E-MAIL</Text>
        <View style={styles.placeholderContainer}>
            <TextInput style={styles.inputContainer} placeholder='' />
            <EvilIcons name="envelope" color="#43b3db" size={25} />
        </View>


        


    
        <Text style={styles.boxTitle}>SENHA</Text>
        <View style={styles.placeholderContainer}>
        <TextInput style={styles.inputContainer} placeholder='' />
        <EvilIcons name="unlock" color="#43b3db" size={25} />
        </View>

    </KeyboardAvoidingView>
        

        <View style={styles.signInButton}>
        <Text style={styles.signInButtonText}>ENTRAR</Text>
        <EvilIcons name="arrow-right" color="#2964ac" size={25} />
        </View>

        <Text style={styles.signUpText}>Ainda não tem uma conta?</Text>
        <Text style={styles.signUpButton}>CADASTRE-SE</Text>

    </View>
    ); 
}
