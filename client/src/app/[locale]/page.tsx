import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import PageLayout from '../../components/PageLayout';
import { locales } from '../../config';
import BannerSection from '@/components/BannerSection';
import ImperialHealthWeightLoss from '@/components/ImperialHealthWeightLoss';
import ConnectWithWeightLoss from '@/components/ConnectWithWeightLoss';
import OurServices from '@/components/OurServices';
import ImperialHealthMedications from '@/components/ImperialHealthMedications';

type Props = {
	params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
	// Validate that the incoming `locale` parameter is valid
	const isValidLocale = locales.some((cur) => cur === locale);
	if (!isValidLocale) notFound();

	// Enable static rendering
	unstable_setRequestLocale(locale);

	const t = useTranslations('INDEX_PAGE');

	return (
		<>
			<BannerSection />
			<ImperialHealthWeightLoss />
			<ConnectWithWeightLoss/>
			<OurServices/>
			<ImperialHealthMedications/>
		</>
	);
}
