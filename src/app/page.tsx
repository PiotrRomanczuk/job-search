import { prisma } from '@/lib/prisma';

import { SearchBar } from '@/components/SearchBar';
import { ProductList } from '../components/ProductList';

export default async function Home() {
	const user = await prisma.user.findFirst({
		where: {
			email: 'test@test.com',
		},
	});

	console.log(user);

	return (
		<main className='flex min-h-screen flex-col items-center p-12 gap-10'>
			{/* Hello World! */}
			<SearchBar />
			<div className='flex flex-col items-center'>
				<h2 className='text-2xl font-semibold'>Popular Products</h2>
				<p>Hello, {user?.name}</p>
				<ProductList />
			</div>
		</main>
	);
}
