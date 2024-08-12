import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  CharacterList: { status: string };
  // Other screens can be added here
};

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const buttons = [
    { title: 'All Characters', status: 'all' },
    { title: 'Alive Characters', status: 'alive' },
    { title: 'Dead Characters', status: 'dead' },
    { title: 'Unknown Status Characters', status: 'unknown' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rick and Morty Explorer</Text>
      {buttons.map((button) => (
        <TouchableOpacity
          key={button.status}
          style={styles.button}
          onPress={() => navigation.navigate('CharacterList', { status: button.status })}
        >
          <Text style={styles.buttonText}>{button.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c', // Dark background for contrast
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    width: width * 0.8,
    backgroundColor: '#4CAF50', // Green color for buttons
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600',
  },
});

export default HomeScreen;
