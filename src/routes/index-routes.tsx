import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationService} from '../services/';
import {RootNavigation} from './root';

const App = () => <RootNavigation />;

export const Routes: React.FC = React.memo(() => {
  return (
    <NavigationContainer ref={navigationService.navigationRef}>
      <App />
    </NavigationContainer>
  );
});
