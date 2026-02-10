import React from 'react';
import { View, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import { Image } from 'react-native';
import Logo from '../../assets/logo.png';
import { styles } from './styles';
import { EvilIcons } from '@react-native-vector-icons/evil-icons';

export default function SignUp() {
return(
    <View style={styles.container}>

        <View style={styles.headerContainer}>
            <Image style={styles.logo} source={Logo} />
            <Text style={styles.textLogo}>eduCad</Text>
        </View>
        
        <KeyboardAvoidingView contentContainerStyle={styles.box} behavior="position" enabled>
                    <Text style={styles.boxTitle}>NOME</Text>
        <View style={styles.placeholderContainer}>
            <TextInput style={styles.inputContainer} placeholder='' />
            <EvilIcons name="user" color="#43b3db" size={25} />
        </View>
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
                <Text style={styles.signInButtonText}>CADASTRAR</Text>
                <EvilIcons name="check" color="#2964ac" size={25} />
                </View>
        
                <Text style={styles.signUpText}>Já possui uma conta?</Text>
                <Text style={styles.signUpButton}>ENTRE AQUI</Text>
    </View>
);
}
