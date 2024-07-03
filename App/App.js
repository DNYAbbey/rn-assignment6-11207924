import 'react-native-gesture-handler';
import { StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './screens/homeScreen';
import { CheckOut } from './screens/checkoutScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName="home">
    <Stack.Screen name="home" component={Home} options={{ headerShown: false }}/>
    <Stack.Screen name="checkout" component={CheckOut} options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
});
