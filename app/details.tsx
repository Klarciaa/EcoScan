import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function DetailsScreen() {
  const params = useLocalSearchParams();
  const product = params.product ? JSON.parse(params.product) : {};

  // Uniwersalne pobieranie kalorii z różnych możliwych pól
  const calories =
    product.nutriments?.energy_kcal ||
    product.nutriments?.energy ||
    product.nutriments?.['energy-kcal_100g'] ||
    product.nutriments?.['energy_100g'] ||
    'Brak';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>{product.product_name || 'Brak nazwy produktu'}</Text>
        <Image
          source={{ uri: product.image_url || 'https://static.openfoodfacts.org/images/icons/dist/nutrition.svg' }}
          style={styles.image}
        />
        <View style={styles.section}>
          <Text style={styles.label}>
            <Text style={styles.bold}>Marka:</Text> <Text style={styles.value}>{product.brands || 'Brak marki'}</Text>
          </Text>
          <Text style={styles.label}>
            <Text style={styles.bold}>Kraj pochodzenia:</Text> <Text style={styles.value}>{product.countries || 'Brak informacji'}</Text>
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.bold}>Składniki:</Text>
          <Text style={styles.value}>{product.ingredients_text || 'Brak informacji'}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.bold}>Wartości odżywcze:</Text>
          <Text style={styles.value}>
            Kalorie: {calories} kcal{'\n'}
            Białko: {product.nutriments?.proteins || 'Brak'} g{'\n'}
            Tłuszcz: {product.nutriments?.fat || 'Brak'} g{'\n'}
            Sól: {product.nutriments?.salt || 'Brak'} g{'\n'}
            Cukier: {product.nutriments?.sugars || 'Brak'} g
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.bold}>Typ opakowania:</Text>
          <Text style={styles.value}>{product.packaging || 'Brak informacji'}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    backgroundColor: '#f3f5f8',
    flexGrow: 1,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 22,
    marginVertical: 20,
    width: '94%',
    alignItems: 'center',
    shadowColor: '#222',
    shadowOpacity: 0.13,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#119c5e',
    textAlign: 'center',
    marginBottom: 14,
    marginTop: 4,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 20,
    marginBottom: 18,
    backgroundColor: '#eee',
    alignSelf: 'center',
  },
  section: {
    width: '100%',
    marginBottom: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 10,
  },
  label: {
    fontSize: 15,
    marginBottom: 4,
    color: '#222',
  },
  bold: {
    fontWeight: 'bold',
    color: '#119c5e',
    fontSize: 15.5,
  },
  value: {
    fontWeight: '400',
    color: '#222',
    fontSize: 15,
  },
});

