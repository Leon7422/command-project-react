import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../src/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/*     <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter basename="/command-project-react">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
    {/*     </PersistGate> */}
  </Provider>
);
