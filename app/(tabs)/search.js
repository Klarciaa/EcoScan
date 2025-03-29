import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';

const dummyData = [
  { id: '1', name: 'Mleko Bio', eco: true },
  { id: '2', name: 'Mleko 2%', eco: false },
  { id: '3', name: 'Jogurt Naturalny', eco: true },
  { id: '4', name: 'Masło', eco: false },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyEco, setOnlyEco] = useState(false);
  const router = useRouter();

  const filteredData = dummyData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesEco = onlyEco ? item.eco : true;
    return matchesSearch && matchesEco;
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Wpisz nazwę produktu"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.switchContainer}>
        <Text>Pokaż tylko eko</Text>
        <Switch value={onlyEco} onValueChange={setOnlyEco} />
      </View>

      {filteredData.length === 0 ? (
        <Text style={styles.noResults}>Brak wyników</Text>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => router.push(`/product?name=${item.name}&eco=${item.eco}`)}
            >
              <Text>{item.name}</Text>
              {item.eco && <Text style={styles.eco}>🌿</Text>}
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eco: {
    color: 'green',
  },
  noResults: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
});
