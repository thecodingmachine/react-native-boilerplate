import type { RootScreenProps } from '@/services/navigation/types';

import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Text, View } from 'react-native';

import { useTheme } from '@/hooks';

import { AssetByVariant } from '@/components/atoms';
import { SafeScreen } from '@/components/templates';

import { Paths } from '@/services/navigation/paths';

function Startup({
  isError = false,
}: { isError?: boolean } & RootScreenProps<Paths.Startup>) {
  const { fonts, gutters, layout } = useTheme();
  const { t } = useTranslation();

  return (
    <SafeScreen>
      <View
        style={[
          layout.flex_1,
          layout.col,
          layout.itemsCenter,
          layout.justifyCenter,
        ]}
      >
        <AssetByVariant
          path="tom"
          resizeMode="contain"
          style={{ height: 300, width: 300 }}
        />
        {isError ? (
          <Text style={[fonts.size_16, fonts.red500]}>{t('common_error')}</Text>
        ) : (
          <ActivityIndicator size="large" style={[gutters.marginVertical_24]} />
        )}
      </View>
    </SafeScreen>
  );
}

export default Startup;
