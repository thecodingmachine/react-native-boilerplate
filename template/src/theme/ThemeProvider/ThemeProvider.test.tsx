import { fireEvent, render, screen } from '@testing-library/react-native';
import { Button, Text, View } from 'react-native';
import { MMKV } from 'react-native-mmkv';

import { ThemeProvider, useTheme } from '@/theme';

function TestChildComponent() {
  const { changeTheme, variant } = useTheme();
  return (
    <View>
      <Text testID="theme-variant">{variant}</Text>
      <Button
        onPress={() => {
          changeTheme('dark');
        }}
        testID="change-btn"
        title="button"
      />
    </View>
  );
}

describe('ThemeProvider', () => {
  let storage: MMKV;

  beforeEach(() => {
    storage = new MMKV();
  });

  it('initializes with the default theme when no theme is defined in storage', () => {
    render(
      <ThemeProvider storage={storage}>
        <TestChildComponent />
      </ThemeProvider>,
    );
    // Assert that the theme context is initialized with 'default'
    expect(screen.getByText('default')).toBeTruthy();
  });

  it('loads the theme from storage if defined', () => {
    storage.set('theme', 'dark');

    render(
      <ThemeProvider storage={storage}>
        <TestChildComponent />
      </ThemeProvider>,
    );

    // Assert that the theme context is initialized with 'dark'
    expect(screen.getByText('dark')).toBeTruthy();
  });

  it('changes the theme when calling changeTheme', () => {
    render(
      <ThemeProvider storage={storage}>
        <TestChildComponent />
      </ThemeProvider>,
    );

    // Assert that the theme context is initialized with 'default'
    expect(screen.getByText('default')).toBeTruthy();
    fireEvent.press(screen.getByTestId('change-btn'));

    // Assert that the theme has changed to 'light'
    expect(screen.getByText('dark')).toBeTruthy();
  });
});
