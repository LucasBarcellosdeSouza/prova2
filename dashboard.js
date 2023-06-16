import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const items = [
  {
    id: 1,
    name: 'Espada Pesada lendaria',
      image: 'image.png',
      description: 'Uma espada lendária com grande poder de ataque porem lenta.'
  },
  {
    id: 2,
   name: 'Escudo Ultra',
      image: 'image.png',
      description: 'Um escudo ultra poderoso com defesa quase maxima.'
  },
  {
    id: 3,
    name: 'Poção de Cura',
      image: 'image.png',
      description: 'Uma poção mágica que recupera 50 pontos de vida.'
  },
 
const Card = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
      <TouchableOpacity style={styles.cardButton}>
        <Text style={styles.cardButtonText}>Propor Troca</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center'
  },
  cardImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    // marginVertical: 
