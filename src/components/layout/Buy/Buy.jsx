import BuyData from 'database/BuyData';
import { React } from 'react';
import { Link } from 'react-router-dom';

const Buy = () => {
	const currentPage = 1;
	const postsPerPage = 10;

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = BuyData.slice(indexOfFirstPost, indexOfLastPost);

	return (
		<>
			{currentPosts.map((buy, id) => (
				<div key={id} className='pt-8 text-justify'>
					<div>
						<img src={buy.image} alt={buy.title} className='w-full rounded' />
					</div>
					<div className='pt-2'>
						<h2 className='font-400 text-red text-lg'>{buy.title}</h2>
						<p className='pt-2 text-lg font-400'>{buy.price}</p>
						<div className='flex gap-x-6 items-center'>
							<p className='text-black text-lg'>
								<b>{buy.bed}</b> bed
							</p>
							<p className='text-black text-lg'>
								<b>{buy.bath}</b> bath
							</p>
							<p className='text-black text-lg'>
								<b>{buy.sqf}</b> sqft
							</p>
						</div>
						<div className='flex justify-between'>
							<div>
								<button className='px-4 h-10 text-sm bg-black rounded-full text-white mt-4 font-semibold'>
									<Link to={`/buy-detail/${buy.title}`}>View Details</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Buy;
