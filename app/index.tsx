import { View, ImageBackground,Text, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';
export default function LandingScreen() {
  const navigateToApp = () => {
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('https://unsplash.com/photos/a-painting-of-a-man-holding-a-palette-ypTyyuxhbzE.jpg')} style={styles.image} >
      <Text style={styles.title}>Landing</Text>
      <Button title="Start chatting" onPress={navigateToApp} />
      </ImageBackground>
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
  image: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    resizeMode:'cover',
  }
  
});
