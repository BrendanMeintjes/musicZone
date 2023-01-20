import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension'
import { productListReducer } from './reducers/productsReducers.js'

const reducer = {
  productList: productListReducer,
}

const store = configureStore({
  reducer,
  preloadedState: {},
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
