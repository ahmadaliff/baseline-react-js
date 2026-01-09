import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider } from 'react-router-dom';

import routes from '@routes/index';
import Language from '@containers/Language/index';
import store, { persistor } from '@store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Language>
        <RouterProvider router={routes} />
      </Language>
    </PersistGate>
  </Provider>
);
