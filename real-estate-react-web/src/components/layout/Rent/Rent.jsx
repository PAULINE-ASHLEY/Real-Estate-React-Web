import { React } from 'react';
import { Link } from 'react-router-dom';
import RentData from 'database/RentData';

const Rent = () => {
	const currentPage = 1;
	const postsPerPage = 10;

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = RentData.slice(indexOfFirstPost, indexOfLastPost);

	return (
		<>
			{currentPosts.map((rent, id) => (
				<div key={id} className='pt-8 text-justify'>
					<div>
						<img src={rent.image} alt={rent.title} className='w-full rounded' />
					</div>
					<div className='pt-2'>
						<h2 className='font-400 text-red text-2xl'>{rent.title}</h2>
						<p className='pt-2 text-black text-xl'>{rent.price}</p>
						<div className='flex gap-x-6 items-center'>
							<p className='text-black text-xl'>
								<b>{rent.bed}</b> bed
							</p>
							<p className='text-black text-xl'>
								<b>{rent.bath}</b> bath
							</p>
							<p className='text-black text-xl'>
								<b>{rent.sqf}</b> sqft
							</p>
						</div>
						<div className='flex justify-between'>
							<div>
								<button className='px-4 py-2 text-lg bg-black rounded-full text-white mt-4'>
									<Link to={`/Detail/${rent.title}`}>View Details</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Rent;