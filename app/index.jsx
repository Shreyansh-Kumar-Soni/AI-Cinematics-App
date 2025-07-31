import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View className="flex-1 bg-white items-center justify-center">
            <Text>Cinematics</Text>
            <StatusBar style="auto" />
            <Link href="/home" className="text-blue-500">Go to Home</Link>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
