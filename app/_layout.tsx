import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: 'EcoScan',        
        headerTitleAlign: 'center',    
        headerTintColor: '#119c5e',    
        headerStyle: { backgroundColor: '#fff' }, 
      }}
    />
  );
}
