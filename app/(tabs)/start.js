import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>EcoScan</Text>

      {/* 3 przyciski */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="heart-outline" size={28} color="#4CAF50" />
          <Text style={styles.buttonText}>Ulubione</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="stats-chart-outline" size={28} color="#4CAF50" />
          <Text style={styles.buttonText}>Statystyki</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="location-outline" size={28} color="#4CAF50" />
          <Text style={styles.buttonText}>Sklepy</Text>
        </TouchableOpacity>
      </View>

      {/* Ostatnio oglądane */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ostatnio oglądane</Text>
        <Text style={styles.placeholder}>Brak produktów</Text>
      </View>

      {/* Polecane */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Polecane</Text>
        <Text style={styles.placeholder}>Ładowanie...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30 },
  iconButton: { alignItems: 'center' },
  buttonText: { marginTop: 5, fontSize: 12 },
  section: { marginBottom: 30 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  placeholder: { color: '#999' },
});
