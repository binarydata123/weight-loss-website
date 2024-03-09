import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
	const t = useTranslations('LOCALE_SWITCHER');
	const locale = useLocale();

	return (
		<LocaleSwitcherSelect defaultValue={locale} label={t('LABEL')}>
			{['en', 'de'].map((cur) => (
				<option key={cur} value={cur}>
					{t('LOCALE', { locale: cur })}
				</option>
			))}
		</LocaleSwitcherSelect>
	);
}
