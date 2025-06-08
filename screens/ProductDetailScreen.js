import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>{product.product_name || 'Brak nazwy produktu'}</Text>
      <Image
        source={{ uri: product.image_url || 'https://static.openfoodfacts.org/images/icons/dist/nutrition.svg' }}
        style={styles.image}
      />
      <Text style={styles.label}>Marka: <Text style={styles.value}>{product.brands || 'Brak marki'}</Text></Text>
      <Text style={styles.label}>Kraj pochodzenia: <Text style={styles.value}>{product.countries || 'Brak informacji'}</Text></Text>
      <Text style={styles.label}>Składniki: <Text style={styles.value}>{product.ingredients_text || 'Brak informacji'}</Text></Text>
      <Text style={styles.label}>Wartości odżywcze:</Text>
      <Text style={styles.value}>
        Kalorie: {product.nutriments?.energy_kcal || 'Brak'} kcal{'\n'}
        Białko: {product.nutriments?.proteins || 'Brak'} g{'\n'}
        Tłuszcz: {product.nutriments?.fat || 'Brak'} g{'\n'}
        Sól: {product.nutriments?.salt || 'Brak'} g{'\n'}
        Cukier: {product.nutriments?.sugars || 'Brak'} g
      </Text>
      <Text style={styles.label}>Typ opakowania: <Text style={styles.value}>{product.packaging || 'Brak informacji'}</Text></Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff', flexGrow: 1 },
  header: { fontSize: 22, fontWeight: 'bold', color: '#119c5e', marginBottom: 12, textAlign: 'center' },
  image: { width: 160, height: 160, borderRadius: 16, alignSelf: 'center', marginBottom: 16, backgroundColor: '#eee' },
  label: { fontWeight: 'bold', marginTop: 8 },
  value: { fontWeight: 'normal' },
});
