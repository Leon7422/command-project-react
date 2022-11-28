import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../src/redux/store';
import { DateProvider } from './components/dataContext/dataContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DateProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/command-project-react">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </DateProvider>
  </React.StrictMode>
);
