import 'react-native';
import React from 'react';
import App from './App';

// Note: test renderer must be required after react-native.
import { Provider } from 'react-redux';
import { store } from './store';
import { render } from '@testing-library/react-native';

it('App renders correctly', () => {
  const component = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  render(component);

  expect(component).toBeDefined();
});
