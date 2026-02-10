import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';
import SignUp from './src/pages/signUp';
import Dashboard from './src/pages/dashboard';
import AlunoListComponent from './src/components/AlunoListComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
