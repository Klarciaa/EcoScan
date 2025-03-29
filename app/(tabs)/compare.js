import { View, Text, StyleSheet } from 'react-native';

export default function CompareScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Porównywarka</Text>
      <Text style={styles.text}>Brak produktów do porównania</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  text: { color: '#888', marginTop: 20 },
});
