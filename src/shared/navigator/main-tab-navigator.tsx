import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import DashboardScreen from 'screens/dashboard';
import { Screens } from 'shared/constants/screens';
import { useTabScreenOptions } from 'shared/hooks';
import { useTheme } from 'styled-components/native';

const MainTab = createBottomTabNavigator();

const MainTabNavigator: FC = () => {
  const theme = useTheme();
  const dashboardOptions = useTabScreenOptions({ icon: 'home' });
  const categoriesOptions = useTabScreenOptions({ icon: 'apps' });

  return (
    <MainTab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: theme.PRIMARY_COLOR,
        inactiveTintColor: theme.BORDER_COLOR,
      }}
    >
      <MainTab.Screen name={Screens.DASHBOARD_TAB} component={DashboardScreen} options={dashboardOptions} />
      <MainTab.Screen name={Screens.CATEGORIES_TAB} component={DashboardScreen} options={categoriesOptions} />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
