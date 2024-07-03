import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { Item } from '../components/product';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

  
export function Home() {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);

    const handleNavigate = () => {
        navigation.navigate('checkout');
      };
    

    useEffect(() => {
    setProducts([
        { id: '1', name: 'Office Wear', price: '$120', description: 'reversible angora cardigan', ImageSrc: require('../assets/dress1.png') },
        { id: '2', name: 'Black', price: '$120', description: 'reversible angora cardigan', ImageSrc: require('../assets/dress2.png') },
        { id: '3', name: 'Church Wear', price: '$120', description: 'reversible angora cardigan', ImageSrc: require('../assets/dress3.png') },
        { id: '4', name: 'Lamerei', price: '$120', description: 'reversible angora cardigan', ImageSrc: require('../assets/dress4.png') },
        { id: '5', name: '21WN', price: '$120', description: 'reversible angora cardigan', ImageSrc: require('../assets/dress5.png') },
        { id: '6', name: 'Lopo', price: '$120', description: 'reversible angora cardigan', ImageSrc: require('../assets/dress6.png') },
        { id: '7', name: '21WN', price: '$120', description: 'reversible angora cardigan', ImageSrc: require('../assets/dress7.png') },
        { id: '8', name: 'Lame', price: '$120', description: 'reversible angora cardigan', ImageSrc: require('../assets/dress3.png') },
    ]);
    }, []);


    const addToCart = async (product) => {
        try {
            let cart = await AsyncStorage.getItem('cart');
            cart = cart ? JSON.parse(cart) : [];
            const productExists = cart.some(item => item.id === product.id);
            
            if (!productExists) {
                // Add the new product to the cart
                cart.push(product);
                
                // Save the updated cart back to AsyncStorage
                await AsyncStorage.setItem('cart', JSON.stringify(cart));
                
                console.log('Product added to cart:', product);
                Alert.alert('Product added to cart');
            } else {
                Alert.alert('Notice', 'Product is already in the cart');
            }
            } catch (error) {
            console.error('Error adding product to cart:', error);
            }
      };
    
    

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
            <Image style={styles.menuIcon} source={require('../assets/Menu.png')}/>
            <Image style={styles.logo} source={require('../assets/Logo.png')}/>
            <View style={styles.headerRight}>
                <Image style={styles.menuIcon} source={require('../assets/Search.png')}/>
                <TouchableOpacity onPress={handleNavigate}>
                    <Image style={styles.menuIcon} source={require('../assets/shoppingBag.png')}/>
                </TouchableOpacity>
                
            </View>
        </View>
        <View style={styles.header}>
            <Text style={styles.heading}>OUR STORY</Text>
            <View style={styles.subheaderRight}>
                <View style={styles.IconView}>
                    <Image style={styles.listIcon} source={require('../assets/Listview.png')}/>
                </View>
                <View style={styles.IconView}>
                    <Image style={styles.filterIcon} source={require('../assets/Filter.png')}/>
                </View>
            </View>
            
        </View>
        <View style={styles.product} >
        {products.map((product) => (
          <Item
            key={product.id}
            ImageSrc={product.ImageSrc}
            name={product.name}
            price={product.price}
            description={product.description}
            addToCart={addToCart}
            id={product.id}
          />
        ))}
        </View>
        
    </ScrollView>
  )}

  const styles = StyleSheet.create({
    container: {
        padding: '20px'
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '50px',
        alignItems: 'center'
    },
    menuIcon:{
        width: '35px',
        height: '35px',
    },
    logo: {
        width: '95px',
        height: '38px'
    },
    headerRight: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: '0.35'
    },
    heading: {
        fontSize: '27px',
        fontWeight: 'bold',
        letterSpacing: 3,
    },
    subheaderRight: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: '0.7'
    },
    IconView: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    listIcon: {
        width: '30px',
        height: '30px',
    },
    filterIcon:{
        width: '30px',
        height: '30px',
    },
    product: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },

  })

 