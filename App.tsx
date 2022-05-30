import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  let weather = "fuckin weather ey";

  return (
    <View style={styles.container}>
      <Text>{weather}</Text>
      <StatusBar backgroundColor='red' />
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
