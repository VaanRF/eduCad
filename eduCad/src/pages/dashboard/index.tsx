import React from "react";
import { View, Text, ScrollView  } from "react-native";
import { styles } from "./styles"
import { Image } from "react-native";
import Logo from '../../assets/logo.png';
import { EvilIcons } from "@react-native-vector-icons/evil-icons";
import AlunoListComponent from "../../components/AlunoListComponent";



export default function Dashboard ()   {
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.userContainer}>
                <EvilIcons name="user" color="#43b3db" size={70} />
                <Text style={styles.title}>...varUser</Text>
                </View>
                <View style={styles.logoContainer}>
                <Image style={styles.logo} source={Logo} />
                <Text style={styles.title}>eduCad</Text>
                </View>
            </View>
            <AlunoListComponent />
        </View>
        </ScrollView>
    );
}