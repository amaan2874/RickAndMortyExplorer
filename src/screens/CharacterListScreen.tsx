import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  CharacterDetail: { character: Character };
  CharacterList: { status: string };
};

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: { name: string };
  image: string;
  episode: string[];
};

const CharacterListScreen = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute();
  const { status } = route.params as { status: string };

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character', {
          params: { status: status === 'all' ? '' : status },
        });
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Failed to load characters', error);
      }
    };

    fetchCharacters();
  }, [status]);

  const renderItem = ({ item }: { item: Character }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('CharacterDetail', { character: item })} 
      style={styles.card}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: { 
    padding: 10, 
    backgroundColor: '#E0F7FA' // Light teal background
  },
  card: { 
    flexDirection: 'row', 
    marginBottom: 12, 
    backgroundColor: '#FFFFFF', // White background for cards
    padding: 12, 
    borderRadius: 10, 
    shadowColor: '#000000', // Adding shadow for depth
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4
  },
  image: { 
    width: 60, 
    height: 60, 
    marginRight: 12, 
    borderRadius: 30 
  },
  infoContainer: { 
    justifyContent: 'center' 
  },
  name: { 
    fontWeight: 'bold', 
    fontSize: 16, 
    color: '#00796B' // Dark teal for the name
  },
  species: { 
    fontSize: 14, 
    color: '#004D40' // Darker teal for the species
  },
});

export default CharacterListScreen;
