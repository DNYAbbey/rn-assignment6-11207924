import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      let cart = await AsyncStorage.getItem('cart');
      setCart(cart ? JSON.parse(cart) : []);
    };
    fetchCart();
  }, []);

  const removeFromCart = async (productId) => {
    let updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.logoView}>
                <Image style={styles.logo} source={require('./assets/Logo.png')}/>
            </View>
            <Image style={styles.searchIcon} source={require('./assets/Search.png')}/>
        </View>
        <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <View style={styles.product}>
                <Text>{item.name}</Text>
                <Button title="Remove" onPress={() => removeFromCart(item.id)} />
            </View>
            )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CartScreen;
