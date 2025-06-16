import "../global.css"
import { BlurView } from 'expo-blur';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BlurView
        intensity={5}
        tint="light"
        style={{
          width: 200,
          height: 200,
          borderRadius: 16,
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#000' }}>Promteli App</Text>
      </BlurView>
    </View>
  );
}




   

