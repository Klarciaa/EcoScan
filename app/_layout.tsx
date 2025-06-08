import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: 'EcoScan',        // Napis na pasku
        headerTitleAlign: 'center',    // Wyśrodkowany napis
        headerTintColor: '#119c5e',    // Kolor elementów paska (np. strzałki)
        headerStyle: { backgroundColor: '#fff' }, // Pasek biały
      }}
    />
  );
}
