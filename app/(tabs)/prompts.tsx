import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabThreeScreen() {
 return (
<ParallaxScrollView  
headerBackgroundColor={{light: '#D0D0D0', dark: '#353636' }}    
headerImage={<IconSymbol
              size={300}
              color="#e9eceffe"
             name="chevron.left.forwardslash.chevron.right"
             style={styles.headerImage}
/>
}>
<ThemedView  style={styles.titleContainer}>
    <ThemedText type='title'> Calorie Tracker</ThemedText>
</ThemedView>
<Collapsible title="File based routing" >
<ThemedText> 
     This app has 3 screens:{' '}
   <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
   <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText> and{''}
   <ThemedText type="defaultSemiBold">app/(tabs)/prompt.tsx</ThemedText>
</ThemedText>
 <ExternalLink href="https://apple.com" >
    <ThemedText type="link">click apple</ThemedText>
    </ExternalLink>
</Collapsible>
</ParallaxScrollView>

 )
}

const styles = StyleSheet.create({
   headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
})