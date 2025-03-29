import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ProductScreen() {
  const { name, eco } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      {eco === 'true' && <Text style={styles.eco}>🌿 Produkt ekologiczny</Text>}

      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />

      <Text style={styles.section}>Opis produktu</Text>
      <Text style={styles.text}>
        To przykładowy opis produktu. Można tutaj dodać skład, wartości odżywcze, producenta itd.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  eco: {
    fontSize: 16,
    color: 'green',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 24,
  },
  section: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    color: '#444',
  },
});
