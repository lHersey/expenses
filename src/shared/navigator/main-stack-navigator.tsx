import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Screens } from 'shared/constants/screens';

import MainTabNavigator from './main-tab-navigator';

const MainStack = createStackNavigator();

const MainStackNavigator: FC = () => {
  return (
    <MainStack.Navigator initialRouteName={Screens.DASHBOARD_TAB} headerMode="none">
      <MainStack.Screen name={Screens.HOME} component={MainTabNavigator} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
