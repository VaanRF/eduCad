import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';


if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}


type AlunosSegTarde = {
  id: string;
  nome: string;
};

const DATA: AlunosSegTarde[] = [
  { id: '1', nome: 'Heitor Rodrigues ' },
  { id: '2', nome: 'Cristiano Cadigune Severo ' },
  { id: '3', nome: 'STHEFFANY LUYSA BORGES ESPINDOLA '},
  { id: '4', nome: 'LEONARDO DA SILVEIRA MEDEIROS' },
  { id: '5', nome: 'GUSTAVO HENRYQUE SILVA GONÇALVES' },
  { id: '6', nome: 'JOÃO PAULO SANTOS DE OLIVEIRA'},
  { id: '7', nome: 'Jhosepher Israel Rodrigues Fonseca' },
  { id: '8', nome: 'Miguel Victor Terra da Silva' },
  { id: '9', nome: 'Cauã Eduardo Ramos do Canto'},
  { id: '10', nome: 'MARCO ANTONIO LEAL PEREIRA'},
  { id: '11', nome: 'Antônio da Silva Escouto de Souza ' },
  { id: '12', nome: 'Lucas Gabriel Melo de Oliveira' },
  { id: '13', nome: 'Derick Santos Saraiva ' },
  { id: '14', nome: 'Giovana Silva de Souza' },
  { id: '15', nome: 'Marcelly Lanes Ferreira' },
  { id: '16', nome: 'Mayara Ciotti de Oliveira' },
  { id: '17', nome: 'Everson Fursel da Rosa ' },
  { id: '18', nome: 'Nicolas Rafael Souza dos Santos' },
  { id: '19', nome: 'Anthony Ezequiel Ramirez Rodrigues' },
  { id: '20', nome: 'Miguel dos Reis Silva' },
];











export default function app() {

 

  const renderItem = ({ item }: { item: AlunosSegTarde }) => {

    return (
      <View style={styles.itemContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>{item.nome}</Text>
          </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    width: '90%',
  },
  itemContainer: {
    backgroundColor: '#43b3db',
    marginBottom: 10,
    borderRadius: 12,
    overflow: 'hidden', // Importante para a animação da borda
    elevation: 3, // Sombra Android
    shadowColor: '#707070', // Sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    width: '100%',
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#43b3db',
  },
  title: {
    fontSize: 16,
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#2964ac',
  },
  icon: {
    fontSize: 16,
    marginRight: 10,
    color: '#2964ac',
  },
  contentContainer: {
    padding: 15,
    backgroundColor: '#b1dae9',
  },
  contentText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});