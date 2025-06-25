import { View, Text, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function LandingScreen() {
  const navigateToApp = () => {
    // Replace the current screen so the user cannot go back to it
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Landing</Text>
      <Button title="Start chatting" onPress={navigateToApp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});
