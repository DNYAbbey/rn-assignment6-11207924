import { View, Text, StyleSheet, Image, ScrollView, } from 'react-native';
import { Item } from './components/product';

export function Home() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
            <Image style={styles.menuIcon} source={require('./assets/Menu.png')}/>
            <Image style={styles.logo} source={require('./assets/Logo.png')}/>
            <View style={styles.headerRight}>
                <Image style={styles.menuIcon} source={require('./assets/Search.png')}/>
                <Image style={styles.menuIcon} source={require('./assets/shoppingBag.png')}/>
            </View>
        </View>
        <View style={styles.header}>
            <Text style={styles.heading}>OUR STORY</Text>
            <View style={styles.subheaderRight}>
                <View style={styles.IconView}>
                    <Image style={styles.listIcon} source={require('./assets/Listview.png')}/>
                </View>
                <View style={styles.IconView}>
                    <Image style={styles.filterIcon} source={require('./assets/Filter.png')}/>
                </View>
            </View>
            
        </View>
        <View style={styles.product} >
            <Item
            ImageSrc={require('./assets/dress1.png')}
            name={'Office Wear'}
            description={'reversible angora cardigan'}
            price={'$120'}/>
            <Item
            ImageSrc={require('./assets/dress2.png')}
            name={'Black'}
            description={'reversible angora cardigan'}
            price={'$120'}/>
            <Item
            ImageSrc={require('./assets/dress3.png')}
            name={'Church Wear'}
            description={'reversible angora cardigan'}
            price={'$120'}/>
            <Item
            ImageSrc={require('./assets/dress4.png')}
            name={'Lamerei'}
            description={'reversible angora cardigan'}
            price={'$120'}/>
            <Item
            ImageSrc={require('./assets/dress5.png')}
            name={'21WN'}
            description={'reversible angora cardigan'}
            price={'$120'}/>
            <Item
            ImageSrc={require('./assets/dress6.png')}
            name={'Lopo'}
            description={'reversible angora cardigan'}
            price={'$120'}/>
            <Item
            ImageSrc={require('./assets/dress7.png')}
            name={'21WN'}
            description={'reversible angora cardigan'}
            price={'$120'}/>
            <Item
            ImageSrc={require('./assets/dress3.png')}
            name={'Lame'}
            description={'reversible angora cardigan'}
            price={'$120'}/>
            
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
        flex: '0.4'
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