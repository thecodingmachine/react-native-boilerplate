import { fireEvent, render } from '@testing-library/react-native';
import { Button, Text, View } from 'react-native';
import { MMKV } from 'react-native-mmkv';

import { ThemeProvider, useTheme } from '@/theme';

function TestChildComponent() {
  const { variant, changeTheme } = useTheme();
  return (
    <View>
      <Text testID="theme-variant">{variant}</Text>
      <Button
        onPress={() => changeTheme('dark')}
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
    const { getByTestId } = render(
      <ThemeProvider storage={storage}>
        <TestChildComponent />
      </ThemeProvider>,
    );
    const themeContext = getByTestId('theme-variant');

    // Assert that the theme context is initialized with 'default'
    expect(themeContext.children[0]).toBe('default');
  });

  it('loads the theme from storage if defined', () => {
    storage.set('theme', 'dark');

    const { getByTestId } = render(
      <ThemeProvider storage={storage}>
        <TestChildComponent />
      </ThemeProvider>,
    );
    const themeContext = getByTestId('theme-variant');

    // Assert that the theme context is initialized with 'dark'
    expect(themeContext.children[0]).toBe('dark');
  });

  it('changes the theme when calling changeTheme', () => {
    const { getByTestId } = render(
      <ThemeProvider storage={storage}>
        <TestChildComponent />
      </ThemeProvider>,
    );
    const themeContext = getByTestId('theme-variant');

    expect(themeContext.children[0]).toBe('default');

    // Change the theme to 'light'
    fireEvent.press(getByTestId('change-btn'));

    // Assert that the theme has changed to 'light'
    expect(themeContext.children[0]).toBe('dark');
  });
});
