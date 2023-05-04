import {
	NAIROBI,
	KISUMU,
	MOMBASA,
	NAKURU,
	NAIVASHA,
	KILIFI,
} from 'navigation/constants';
export const links = [
	{
		name: 'BUY',
		submenu: true,
		sublinks: [
			{
				sublink: [
					{ name: 'Nairobi', link: NAIROBI },
					{ name: 'Mombasa', link: MOMBASA },
					{ name: 'Kisumu', link: KISUMU },
				],
			},
		],
	},
	{
		name: 'RENT',
		submenu: true,
		sublinks: [
			{
				sublink: [
					{ name: 'Kilifi', link: KILIFI },
					{ name: 'Nakuru', link: NAKURU },
					{ name: 'Naivasha', link: NAIVASHA },
				],
			},
		],
	},
];
