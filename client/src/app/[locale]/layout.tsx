import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import Navigation from '../../components/Navigation';
import { locales } from '../../config';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['cyrillic-ext'] });

type Props = {
	children: ReactNode;
	params: { locale: string };
};

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Omit<Props, 'children'>) {
	const t = await getTranslations({ locale, namespace: 'LOCALE_LAYOUT' });

	return {
		title: t('TITLE')
	};
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale as any)) notFound();

	// Enable static rendering
	unstable_setRequestLocale(locale);

	return (
		<html className="" lang={locale}>
			<body className={clsx(inter.className)}>
				<Header />
				{children}
			</body>
		</html>
	);
}
