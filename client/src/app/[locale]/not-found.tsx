import { useTranslations } from 'next-intl';
import PageLayout from '../../components/PageLayout';

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
	const t = useTranslations('NOT_FOUND_PAGE');

	return (
		<PageLayout title={t('TITLE')}>
			<p className="max-w-[460px]">{t('DESCRIPTION')}</p>
		</PageLayout>
	);
}
