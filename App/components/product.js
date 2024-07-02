import { View, Text, StyleSheet, Image, ScrollView, } from 'react-native';

export function Item ({ImageSrc, name, price, description}) {
    return (
        <View style={styles.ItemContainer}>
            <Image style={styles.itemImage} source={ImageSrc}/>
            <Image style={styles.add} source={require('../assets/add_circle.png')}/>
            <Text style={styles.itemName}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    ItemContainer: {
        width: '48%',
        marginBottom: 10,
        height: 340,

    },
    itemImage: {
        width: '100%',
        height: '75%',
        marginBottom: 10,
    },
    add: {

    },
    itemName: {
        fontWeight: 500,
        fontSize: '18px',
    },
    description: {
        fontWeight: 500,
        fontSize: '15.5px',
        color: 'lightgrey',
        lineHeight: '18px',
        marginBottom: 5,
    },
    price: {
        fontWeight: 500,
        fontSize: '18px',
        color: 'brown'
    },
})