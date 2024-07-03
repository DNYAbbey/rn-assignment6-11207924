# Shopping App

This is a simple Shopping App built with React Native and Expo. The app allows users to add, view, and remove items from a shopping list. The data is stored locally on the device using AsyncStorage.

## Functionality
- Add items to the cart
- View all items in the cart
- Remove items from the cart

## Design Choices
 - The user interface is designed to be simple and intuitive, with a focus on usability. 
 - The main screen displays the list of available items icluding images, a descrription and price of the item with an option to add items to cart. From this screen the user can navigate to the checkout page using the shopping bag icon.
 - The checkout page displays the items added to the cart with an option to remove the item from the cart. It also shows the estimated cost of all items in cart.

 ## Data Storage
 - To store the shopping list data locally on the device, the app makes use of AsyncStorage.
 - AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage system that is global to the app.
 - Three functions were used to implement the functionalities regarding the storage; addToCart, fetchCart and removeFromCart, which do as their names suggest.


 ## Screenshots of Application
 ![Home screen](App/images/rn-6%20shot%201.PNG)
 ![Home screen](App/images/rn-6%20shot%202.PNG)
 ![CheckOut screen](App/images/rn-6%20shot%203.PNG)
 ![CheckOut screen](App/images/rn-6%20shot%204.PNG)