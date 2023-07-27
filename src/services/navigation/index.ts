import {CommonActions, NavigationContainerRef} from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (routeName: string, params?: any) => {
  navigationRef?.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeName,
          params,
        },
      ],
    }),
  );
};

export const navigateToScreen = (routeName: string, params?: any) => {
  navigationRef?.current?.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
};

export const goBack = () => {
  navigationRef?.current?.dispatch(CommonActions.goBack());
};

export const canGoBack = () => {
  return navigationRef?.current?.canGoBack();
};
