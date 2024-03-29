import PopularData from 'database/PopularData';
import { React } from 'react';
import { Link } from 'react-router-dom';

const Recent = () => {
	const currentPage = 1;
	const postsPerPage = 6;

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = PopularData.slice(indexOfFirstPost, indexOfLastPost);

	return (
		<>
			{currentPosts.map((recent, id) => (
				<div key={id} className='pt-4 flex flex-row gap-x-4 items-center'>
					<div>
						<img
							src={recent.image}
							alt={recent.title}
							className='rounded'
							width={180}
						/>
					</div>
					<div className='items-center'>
						<h2 className='font-400 text-red text-lg'>{recent.title}</h2>
						<p className='pt-2 text-lg font-400'>{recent.price}</p>
						<div className='flex justify-between'>
							<div>
								<button className='px-4 h-10 text-sm bg-black rounded-full text-white mt-2 font-semibold'>
									<Link to={`/popular-detail/${recent.title}`}>
										View Details
									</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Recent;
