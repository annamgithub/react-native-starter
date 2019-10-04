import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RoundedButton from '@components/RoundedButton';

export default function App() {
  const [color, setColor] = useState('#161616');
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.prompt}>Hello World! Welcome to my app.</Text>
      <RoundedButton
        text="Next"
        textColor="#161616"
        onPress={() => {
          setColor(randomRgb())
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