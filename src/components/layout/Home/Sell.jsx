import { React } from 'react';
import { Link } from 'react-router-dom';
import SellData from 'database/SellData';

const Sell = () => {
	const currentPage = 1;
	const postsPerPage = 9;

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = SellData.slice(indexOfFirstPost, indexOfLastPost);

	return (
		<>
			{currentPosts.map((sell, id) => (
				<div key={id} className='pt-8 text-justify'>
					<div>
						<img src={sell.image} alt={sell.title} className='w-full rounded' />
					</div>
					<div className='pt-2'>
						<h2 className='font-400 text-red text-lg'>{sell.title}</h2>
						<p className='pt-2 text-black text-lg'>{sell.price}</p>
						<div className='flex gap-x-6 items-center'>
							<p className='text-black text-lg'>
								<b>{sell.bed}</b> bed
							</p>
							<p className='text-black text-lg'>
								<b>{sell.bath}</b> bath
							</p>
							<p className='text-black text-lg'>
								<b>{sell.sqf}</b> sqft
							</p>
						</div>
						<div className='flex justify-between'>
							<div>
								<button className='px-4 h-10 text-sm bg-black rounded-full text-white mt-4 font-semibold'>
									<Link to={`/sell-detail/${sell.title}`}>View Details</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Sell;
