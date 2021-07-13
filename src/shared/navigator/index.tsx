import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';

import MainStackNavigator from './main-stack-navigator';

const Navigator: FC = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
