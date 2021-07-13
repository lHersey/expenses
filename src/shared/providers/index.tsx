import React, { FC } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'shared/store';
import { ThemeProvider } from 'styled-components/native';

import { THEME } from '../../styles/theme';

const Providers: FC = props => {
  const { children } = props;

  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={THEME}>{children}</ThemeProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default Providers;
