import { BASE_URL } from '@/config/config';
import React from 'react';
import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View 
} from 'react-native';
 
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen () {
  const [text, setText] = React.useState('');
  const [responseText, setResponseText] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const fetchData = async () => {
    if (!text.trim()) {
      setResponseText('Prompt is empty');
      return;
    }

    setLoading(true);
    const url = `${BASE_URL}/sama`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({ prompt: text }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        const errText = await response.text();
        setResponseText(`HTTP ${response.status} (${response.statusText}):\n${errText}`);
        return;
      }

      let data;
      try {
        data = await response.json();
      } catch(error) {
        const rawText = await response.text();
        setResponseText(`Received non-JSON response:\n${rawText}`);
        console.log(error)
        return;
      }

  setResponseText(data.answers && data.answers.length > 0 ? data.answers[0] : JSON.stringify(data, null, 2));
    } catch (error: any) {
      if (error.name === 'AbortError') {
        setResponseText('Request timed out. Please try again.');
      } else {
        setResponseText(`An error occurred: ${error?.message || error?.toString()}\nURL: ${BASE_URL}/sama`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Text 
        style={{
            display:'flex', justifyContent:'center', fontFamily:'sans-serif', fontSize:20

        }}>Get effortless Advice</Text>
        <View style={styles.contentAreaWrapper}>{loading ? (
          <Text style={styles.loading}>Loading...</Text>
        ) : (
          <ScrollView style={styles.responseContainer}>
            <Text style={styles.responseText}>{responseText}</Text>
          </ScrollView>
        )}</View>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="just ask ..."
          multiline
        />
        <Button title="request" onPress={fetchData} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 16,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6
  },
  contentAreaWrapper: {
  marginTop: 20,
  minHeight: 300, 
  backgroundColor: '#e9e9e9',
  borderRadius: 8,
  padding: 10,
  borderWidth: 1,
  borderColor: '#ddd',
  justifyContent: 'center',
  alignItems: 'center',
},
  loading: {
    marginTop: 16,
    fontSize: 16,
    color: 'gray'
  },
  responseContainer: {
    marginTop: 20,
    maxHeight: 300
  },
  responseText: {
    fontSize: 16,
    color: 'black'
  }
});


