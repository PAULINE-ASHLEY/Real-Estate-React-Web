import { useState, React } from 'react';
// import { circle } from 'assets/images';
import { ThumbButton } from 'components/widgets/Buttons';
//This is the comment section under the program page
const LikeButton = () => {
	const [numbers] = useState([
		{
			id: 1,
			likes: '6.7k Likes',
		},
	]);

	return (
		<>
			{numbers.map((number) => (
				<div key={number.id}>
					{/* The button and likes section */}
					<div className='flex flex-row mt-2'>
						<div>
							<button
								type='submit'
								className='flex flex-row px-2 py-2 text-xl bg-purple rounded text-white mt-4'
							>
								<ThumbButton />
								Button
							</button>
						</div>
						<div>
							<p className='text-lg mt-6 ml-4 font-medium'>{number.likes}</p>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default LikeButton;
