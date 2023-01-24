import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productsReducers.js'
import { cartReducer } from './reducers/cartReducers.js'

const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
}

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const preloadedState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
}

const store = configureStore({
  reducer,
  preloadedState,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
