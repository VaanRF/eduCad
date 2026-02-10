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
import AlunosSegManha from './Alunos/AlunosSegManha';
import AlunosSegTarde from './Alunos/AlunosSegTarde';


if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}


type ListItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

const DATA: ListItem[] = [
  { id: '1', title: 'Segunda - Manhã', content: <AlunosSegManha /> },
  { id: '2', title: 'Segunda - Tarde', content: <AlunosSegTarde /> },
  { id: '3', title: 'Terça - Manhã', content: 'Lista de alunos...' },
  { id: '4', title: 'Terça - Tarde', content: 'Lista de alunos...' },
  { id: '5', title: 'Quarta - Manhã', content: 'Lista de alunos...' },
  { id: '6', title: 'Quarta - Tarde', content: 'Lista de alunos...' },
  { id: '7', title: 'Quinta - Manhã', content: 'Lista de alunos...' },
  { id: '8', title: 'Quinta - Tarde', content: 'Lista de alunos...' },
  { id: '9', title: 'Sexta - Manhã', content: 'Lista de alunos...' },
  { id: '10', title: 'Sexta - Tarde', content: 'Lista de alunos...' },
];

export default function app() {

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const renderItem = ({ item }: { item: ListItem }) => {
    const isExpanded = expandedId === item.id;

    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => toggleItem(item.id)}
          activeOpacity={0.7}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.icon}>{isExpanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {isExpanded && (
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>{item.content}</Text>
          </View>
        )}
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