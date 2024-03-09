import { Layout, Row } from 'antd';
import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
	title: ReactNode;
};

export default function PageLayout({ children, title }: Props) {
	return (
		<div className="relative flex grow flex-col py-20">
			<div className="container relative flex grow flex-col px-4">
				<h1 className="text-3xl font-semibold leading-tight tracking-tight text-gray-600 md:text-5xl">
					{title}
				</h1>
				<div className="mt-6 text-gray-400 md:text-lg">{children}</div>
			</div>
		</div>
	);
}
