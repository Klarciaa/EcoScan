import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView, Button } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${id}.json`);
        setProduct(res.data.product);
      } catch (err) {
        console.log('Błąd:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  if (!product) return <Text style={styles.center}>Brak danych o produkcie</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image_front || 'https://via.placeholder.com/200' }} style={styles.image} />
      <Text style={styles.title}>{product.product_name || 'Brak nazwy'}</Text>
      <Text style={styles.brand}>{product.brands || 'Brak marki'}</Text>
      <Text style={styles.detail}>NutriScore: {product.nutriscore_grade?.toUpperCase() || 'Brak'}</Text>
      <Text style={styles.detail}>Eko: {product.labels_tags?.includes('organic') ? 'Tak 🌱' : 'Nie'}</Text>
      <Text style={styles.subtitle}>Składniki:</Text>
      <Text style={styles.text}>{product.ingredients_text || 'Brak danych'}</Text>
      <Text style={styles.subtitle}>Opakowanie:</Text>
      <Text style={styles.text}>{product.packaging || 'Brak info'}</Text>

      <View style={styles.buttons}>
        <Button title="Dodaj do koszyka" onPress={() => {}} />
        <Button title="Dodaj do ulubionych" onPress={() => {}} color="orange" />
        <Button title="Dodaj do porównania" onPress={() => {}} color="purple" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  image: { width: '100%', height: 200, resizeMode: 'contain', marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold' },
  brand: { fontSize: 16, color: '#666', marginBottom: 10 },
  detail: { fontSize: 16, marginBottom: 5 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20 },
  text: { fontSize: 15, color: '#444', marginTop: 5 },
  buttons: { marginTop: 30, gap: 10 },
  center: { textAlign: 'center', marginTop: 50 },
});
