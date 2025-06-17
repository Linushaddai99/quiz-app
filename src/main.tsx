import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { Provider } from 'react-redux';
import store from './redux/configStore.js';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
} else {
  throw new Error("Root element with id 'root' not found");
}
