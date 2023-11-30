import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import LoginButton from './login';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Auth0Provider
    domain="dev-ruajdlwtnuw587py.us.auth0.com"
    clientId="NcubH6j3cuLOg4AU7zkP6NYZnZgfZ6mI"
    authorizationParams={{
      redirect_uri: 'http://localhost:3000/'
        }}
  >
    <App />
    
  </Auth0Provider>
  
);

ReactDOM.render(<React.StrictMode>
  <LoginButton />
</React.StrictMode>,);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
