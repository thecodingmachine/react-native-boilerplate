import 'intl-pluralrules';

import type { Language } from '@/types/schemas/language';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as en from './en';
import * as fr from './fr';

export const defaultNS = 'my-santevet';

export const resources = {
	'en-EN': en,
	'fr-FR': fr,
} as const satisfies Record<Language, unknown>;

i18n
	.use(initReactI18next)
	.init({
		defaultNS,
		fallbackLng: 'en-EN',
		lng: 'en-EN',
		resources,
	})
	.then(() => {
		// add capitalization formatter
		i18n.services.formatter?.add(
			'capitalize',
			(value: string) =>
				value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
		);
	});

export default i18n;
