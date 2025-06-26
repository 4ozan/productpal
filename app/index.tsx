import { useRouter } from "expo-router";
import React from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";


const LandingScreen: React.FC = () => {
  const router = useRouter();

  const navigateToApp = ()  => {
    router.push("/(tabs)")
  }

  return (
    <ImageBackground
      source={{ uri: "https://i.pinimg.com/736x/71/c2/b0/71c2b0ff585bbd8ae8419327c0255df1.jpg"}}
        resizeMode="stretch"
        style={styles.image}
      >
    <View style={styles.container}>
      
      <Text style={styles.title}>Mentorship with SAM ALTMAN</Text>
      <Button title="Start chatting" onPress={navigateToApp} />
   
    </View>
    </ImageBackground>
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
    fontFamily:'sans-serif-thin',
    fontWeight:'bold',
    color:'white'
  },
  image: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    resizeMode:'cover',
  }
  
});
