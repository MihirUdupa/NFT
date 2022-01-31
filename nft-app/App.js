import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Launch from './Components/Launch';

export default function App() {
  return (
    <View style={styles.container}>
      <Launch/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151F28',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
