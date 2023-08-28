import BuyData from 'database/BuyData';
import { React } from 'react';
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
	const { title } = useParams();
	return (
		<>
			{BuyData.filter((desc) => desc.title === title).map((desc, id) => (
				<div key={id} className='grid grid-cols-2 gap-x-6 pt-8 text-justify'>
					<div>
						<img src={desc.image} alt={desc.title} className='w-full rounded' />
					</div>
					<div className='pt-2'>
						<h2 className='font-semibold text-red text-3xl'>{desc.title}</h2>
						<h2 className='font-semibold text-black text-2xl pt-4'>Price:</h2>
						<p className='pt-2 text-xl font-400'>{desc.price}</p>
						<h2 className='font-semibold text-black text-2xl pt-4'>
							Description:
						</h2>
						<p className='py-4 text-xl'>{desc.description}</p>
						<h2 className='font-semibold text-black text-2xl'>Amenities:</h2>
						<div className='flex gap-x-6 items-center'>
							<p className='text-black text-xl'>
								<b>{desc.bed}</b> bed
							</p>
							<p className='text-black text-xl'>
								<b>{desc.bath}</b> bath
							</p>
							<p className='text-black text-xl'>
								<b>{desc.sqf}</b> sqft
							</p>
						</div>
						<div className='flex justify-between'>
							<div>
								<button className='px-4 py-2 text-lg bg-black rounded-full text-white mt-4'>
									<Link to='/'>Book Now</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Detail;
