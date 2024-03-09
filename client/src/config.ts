import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'de'] as const;

export const pathnames = {
	'/': '/',
	'/login': {
		en: '/login',
		de: '/anmelden'
	},
	'/register': {
		en: '/register',
		de: '/registrieren'
	}
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
