import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RoundedButton from '@components/RoundedButton';
import axios from 'axios';

export default function App() {
  const [color, setColor] = useState('#161616');
  const [prompt, setPrompt] = useState('Hello!');

  useEffect(async () => {
    const newPrompt = await randomPrompt();
    if (newPrompt) {
      setPrompt(newPrompt.title);
    }
  }, '');

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.prompt}>{prompt}</Text>
      <RoundedButton
        text="Next"
        textColor="#161616"
        onPress={async () => {
          const newPrompt = await randomPrompt();
          if (newPrompt) {
            setPrompt(newPrompt.title);
            setColor(randomRgb());
          }
        }}
      />
    </View>
  );
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const randomPrompt = async () => {
  try {
    const response = await axios.get('http://localhost:3000/random');
    const prompt = response.data;
    return prompt;
  } catch(err) {
    console.log(err);
    return false;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  prompt: {
    color: 'white',
    fontSize: 22,
    padding: 20,
    textAlign: 'center'
  }
});