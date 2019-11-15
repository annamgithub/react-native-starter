import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import RoundedButton from './RoundedButton';
import gql from 'graphql-tag';

// Queries
const PROMPT_QUERY = gql`
  query {
    prompt {
      id
      title
    }
  }
`;

export default function Prompt() {
	const [color, setColor] = useState('#161616');
  	const { loading, data, refetch } = useQuery(PROMPT_QUERY);

  	return (
  	   <View style={[styles.container, { backgroundColor: color }]}>
        {!loading && data && data.prompt && 
        	<Text style={styles.prompt}>{data.prompt.title}</Text>}
        <RoundedButton
          text="Next"
          textColor="#fff"
          onPress={() => {
            refetch()
            setColor(randomRgb())
          }}
        />
      </View>
  	)
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