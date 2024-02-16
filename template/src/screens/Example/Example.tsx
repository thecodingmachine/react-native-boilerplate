import { useEffect, useState } from 'react';
import {
	View,
	ActivityIndicator,
	Text,
	TouchableOpacity,
	ScrollView,
	Alert,
} from 'react-native';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';

import { ImageVariant } from '@/components/atoms';
import { Brand } from '@/components/molecules';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { fetchOne } from '@/services/users';

import { isImageSourcePropType } from '@/types/guards/image';

import SendImage from '@/theme/assets/images/send.png';
import ColorsWatchImage from '@/theme/assets/images/colorswatch.png';
import TranslateImage from '@/theme/assets/images/translate.png';

function Example() {
	const { t } = useTranslation(['example', 'welcome']);

	const {
		colors,
		variant,
		changeTheme,
		layout,
		gutters,
		fonts,
		components,
		backgrounds,
	} = useTheme();

	const [currentId, setCurrentId] = useState(-1);

	const { isSuccess, data, isFetching } = useQuery({
		queryKey: ['example', currentId],
		queryFn: () => {
			return fetchOne(currentId);
		},
		enabled: currentId >= 0,
	});

	useEffect(() => {
		if (isSuccess) {
			Alert.alert(t('example:welcome', data.name));
		}
	}, [isSuccess, data]);

	const onChangeTheme = () => {
		changeTheme(variant === 'default' ? 'dark' : 'default');
	};

	const onChangeLanguage = (lang: 'fr' | 'en') => {
		void i18next.changeLanguage(lang);
	};

	if (
		!isImageSourcePropType(SendImage) ||
		!isImageSourcePropType(ColorsWatchImage) ||
		!isImageSourcePropType(TranslateImage)
	) {
		throw new Error('Image source is not valid');
	}

	return (
		<SafeScreen>
			<ScrollView>
				<View
					style={[
						layout.justifyCenter,
						layout.itemsCenter,
						gutters.marginTop_80,
					]}
				>
					<View
						style={[layout.relative, backgrounds.gray100, components.circle250]}
					/>

					<View style={[layout.absolute, gutters.paddingTop_80]}>
						<Brand height={300} width={300} />
					</View>
				</View>

				<View style={[gutters.paddingHorizontal_32, gutters.marginTop_40]}>
					<View style={[gutters.marginTop_40]}>
						<Text style={[fonts.size_40, fonts.gray800, fonts.bold]}>
							{t('welcome:title')}
						</Text>
						<Text
							style={[
								fonts.gray400,
								fonts.bold,
								fonts.size_24,
								gutters.marginBottom_32,
							]}
						>
							{t('welcome:subtitle')}
						</Text>
						<Text
							style={[fonts.size_16, fonts.gray200, gutters.marginBottom_40]}
						>
							{t('welcome:description')}
						</Text>
					</View>

					<View
						style={[
							layout.row,
							layout.justifyBetween,
							layout.fullWidth,
							gutters.marginTop_16,
						]}
					>
						<TouchableOpacity
							testID="fetch-user-button"
							style={[components.buttonCircle, gutters.marginBottom_16]}
							onPress={() => setCurrentId(Math.ceil(Math.random() * 10 + 1))}
						>
							{isFetching ? (
								<ActivityIndicator />
							) : (
								<ImageVariant
									source={SendImage}
									style={{ tintColor: colors.purple500 }}
								/>
							)}
						</TouchableOpacity>

						<TouchableOpacity
							testID="change-theme-button"
							style={[components.buttonCircle, gutters.marginBottom_16]}
							onPress={() => onChangeTheme()}
						>
							<ImageVariant
								source={ColorsWatchImage}
								style={{ tintColor: colors.purple500 }}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							testID="change-language-button"
							style={[components.buttonCircle, gutters.marginBottom_16]}
							onPress={() =>
								onChangeLanguage(i18next.language === 'fr' ? 'en' : 'fr')
							}
						>
							<ImageVariant
								source={TranslateImage}
								style={{ tintColor: colors.purple500 }}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeScreen>
	);
}

export default Example;
