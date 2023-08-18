import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'; 
import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { getTotal } from './Redux/cartSlice.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const store = configureStore({
  reducer:{
    cart:cartReducer
  }
});
store.dispatch(getTotal())
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer closeButton={true} position="bottom-right" />
      <App /> 
    </Provider>
  </React.StrictMode>,
)
