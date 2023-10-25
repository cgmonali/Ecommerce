import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// REACT BOOTSTRAP configuration
import 'react-bootstrap/dist/react-bootstrap'; // Correct path to React Bootstrap JS
import 'bootstrap/dist/css/bootstrap.css'; // Correct path to Bootstrap CSS
import CartProvider from './store/CartProvider';
import { AuthContextProvider } from './store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <CartProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ CartProvider>
  </AuthContextProvider>
);



