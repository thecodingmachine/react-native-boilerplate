import { z } from 'zod';

export enum SupportedLanguages {
  EN_EN = 'en-EN',
  FR_FR = 'fr-FR',
}

export const languageSchema = z.nativeEnum(SupportedLanguages);

export type Language = z.infer<typeof languageSchema>;
