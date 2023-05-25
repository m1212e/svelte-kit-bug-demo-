import type { LayoutLoad } from './$types';
import { loadLocaleAsync } from 'src/i18n/i18n-util.async';
import type { Locales } from 'src/i18n/i18n-types';
import { browser } from '$app/environment';
import {
	detectLocale,
	documentCookieDetector,
	initDocumentCookieDetector,
	navigatorDetector
} from 'typesafe-i18n/detectors';
import { baseLocale, locales } from 'src/i18n/i18n-util';

export const prerender = true;

export const load: LayoutLoad<{ locale: Locales }> = async ({ data: { locale } }) => {
	// since this project might be used as static site, we need to re-detect the locale client side
	if (browser) {
		const navigatorLocale = detectLocale(baseLocale, locales, navigatorDetector);
		const documentCookieDetector = initDocumentCookieDetector('use_language');
		const cookieLocale = detectLocale(baseLocale, locales, documentCookieDetector);

		if (cookieLocale) {
			locale = cookieLocale;
		} else if (navigatorLocale) {
			locale = navigatorLocale;
		}
	}

	await loadLocaleAsync(locale);

	// pass locale to rendering context
	return { locale };
};
