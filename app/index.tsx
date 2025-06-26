import React from "react";
import { View, ImageBackground, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
const LandingScreen: React.FC = () => {
  const router = useRouter();

  const navigateToApp = () => {
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1535909339361-9fef1f0ef41f?auto=format&fit=crop&w=800&q=80",
        }}
        style={styles.image}
      >
      <Text style={styles.title}>Landing</Text>
      <Button title="Start chatting" onPress={navigateToApp} />
      </ImageBackground>
    </View>
  );
};

export default LandingScreen;

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
  image: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    resizeMode:'cover',
  }
  
});
