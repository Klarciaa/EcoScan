import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const searchProducts = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setProducts([]);
    try {
      const response = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=20`
      );
      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      alert('Błąd pobierania danych!');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="Wpisz nazwę produktu"
        placeholderTextColor="#555"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Szukaj" onPress={searchProducts} />
      {loading && <ActivityIndicator size="large" color="#119c5e" style={{marginTop: 10}} />}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id || item.code}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => router.push({ pathname: '/details', params: { product: JSON.stringify(item) } })}
          >
            <Image
              source={{ uri: item.image_small_url || 'https://static.openfoodfacts.org/images/icons/dist/nutrition.svg' }}
              style={styles.image}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.product_name || 'Brak nazwy'}</Text>
              <Text style={styles.brand}>{item.brands || 'Brak marki'}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#119c5e', textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 8, paddingHorizontal: 10, height: 40 },
  item: { flexDirection: 'row', alignItems: 'center', padding: 8, borderBottomWidth: 1, borderBottomColor: '#eee' },
  image: { width: 48, height: 48, borderRadius: 8, marginRight: 12, backgroundColor: '#eee' },
  title: { fontSize: 16, fontWeight: 'bold' },
  brand: { fontSize: 14, color: '#777' },
});

// Ukrycie napisu na pasku u góry (pasek zostaje, ale nie ma tytułu)
export const options = {
  headerTitle: '',
};
