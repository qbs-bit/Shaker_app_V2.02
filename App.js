// Note: Main App component...!

import React from 'react';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store/store";
import Navigation from './src/components/navigation/navigation';

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </React.Fragment>
  )
};


export default App;