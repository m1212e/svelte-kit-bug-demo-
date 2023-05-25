import type { Handle } from '@sveltejs/kit';
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';
import { setLocale } from './i18n/i18n-svelte';
import { detectLocale, isLocale } from './i18n/i18n-util';

export const handle: Handle = ({ event, resolve }) => {
	let locale = detectLocale(initAcceptLanguageHeaderDetector(event.request));

	let cookie = event.cookies.get('use_language');
	if (cookie && isLocale(cookie)) {
		locale = cookie;
	}

	event.locals.locale = locale;
	setLocale(locale);

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', locale)
	});
};
