import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type RootStackParamList = {
  CharacterDetail: { character: Character };
};

type CharacterDetailScreenRouteProp = RouteProp<RootStackParamList, 'CharacterDetail'>;

interface Character {
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: { name: string };
  image: string;
  episode: string[];
}

const { width } = Dimensions.get('window');

const CharacterDetailScreen = () => {
  const route = useRoute<CharacterDetailScreenRouteProp>();
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.detailText}>Status: <Text style={styles.detailValue}>{character.status}</Text></Text>
      <Text style={styles.detailText}>Species: <Text style={styles.detailValue}>{character.species}</Text></Text>
      <Text style={styles.detailText}>Gender: <Text style={styles.detailValue}>{character.gender}</Text></Text>
      <Text style={styles.detailText}>Origin: <Text style={styles.detailValue}>{character.origin.name}</Text></Text>
      <Text style={styles.detailText}>Episodes: <Text style={styles.detailValue}>{character.episode.length}</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#E0F7FA', // Light cyan background
    padding: 20, 
    alignItems: 'center'
  },
  image: { 
    width: width * 0.7, // Slightly smaller image size
    height: width * 0.7, 
    borderRadius: (width * 0.7) / 2, 
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#004D40', // Teal border color
  },
  name: { 
    fontSize: 46, 
    fontWeight: 'bold', 
    marginBottom: 15, 
    color: '#00796B' // Teal color
  },
  detailText: { 
    fontSize: 26, 
    color: '#004D40', // Teal color for details
    marginVertical: 3
  },
  detailValue: { 
    fontWeight: 'bold',
    fontSize:26,
    color: '#00796B' // Teal color for values
  },
});

export default CharacterDetailScreen;
