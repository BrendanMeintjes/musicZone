import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productsReducers'
import { cartReducer } from './reducers/cartReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
} from './reducers/userReducers'

const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
}

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const preloadedState = {
  cart: {
    cartItems: cartItemsFromStorage,
    userLogin: { userInfo: userInfoFromStorage },
  },
}

const store = configureStore({
  reducer,
  preloadedState,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
