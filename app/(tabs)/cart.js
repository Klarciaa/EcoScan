import React from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';
import { useCart } from '../../context/CartContext';

export default function CartScreen() {
  const { cartItems, removeFromCart } = useCart();

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.image} />
      ) : (
        <View style={styles.placeholder} />
      )}
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name || 'Brak nazwy'}</Text>
        <Text style={styles.brand}>{item.brand || 'Brak producenta'}</Text>
      </View>
      <Button title="Usuń" onPress={() => removeFromCart(item.code)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Twój koszyk</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.code}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.empty}>Koszyk jest pusty.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  image: { width: 60, height: 60, borderRadius: 8, marginRight: 10 },
  placeholder: { width: 60, height: 60, backgroundColor: '#ccc', borderRadius: 8, marginRight: 10 },
  name: { fontSize: 16, fontWeight: 'bold' },
  brand: { fontSize: 14, color: '#666' },
  empty: { textAlign: 'center', marginTop: 20, fontSize: 16, color: '#999' },
});
