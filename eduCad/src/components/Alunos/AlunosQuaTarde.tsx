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


type AlunosQuaTarde = {
  id: string;
  nome: string;
};

const DATA: AlunosQuaTarde[] = [
  { id: '1', nome: 'Nenhum Cadastrado ' },

];











export default function app() {

 

  const renderItem = ({ item }: { item: AlunosQuaTarde }) => {

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