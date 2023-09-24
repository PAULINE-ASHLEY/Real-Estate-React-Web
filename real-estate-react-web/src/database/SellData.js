import {
	sell,
	sell1,
	sell2,
	sell3,
	sell4,
	sell5,
	sell6,
	sell7,
	sell8,
	sell9,
} from 'assets/images';
const SellData = [
	{
		id: 1,
		image: sell,
		title: 'Runda Paradise Estate',
		price: 'Ksh.25 Million',
		bed: '4',
		bath: '4',
		sqf: '1,200',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
	},
	{
		id: 2,
		image: sell1,
		title: 'Kencom Estate',
		price: 'Ksh.25 Million',
		bed: '4',
		bath: '4',
		sqf: '1,200',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
	},
	{
		id: 3,
		image: sell2,
		title: 'Fourways Estate',
		price: 'Ksh.25 Million',
		bed: '4',
		bath: '4',
		sqf: '1,200',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
	},
	{
		id: 4,
		image: sell3,
		title: 'Runda Gardens Estate',
		price: 'Ksh.25 Million',
		bed: '4',
		bath: '4',
		sqf: '1,200',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
	},
	{
		id: 5,
		image: sell4,
		title: 'Ridgeways Estate',
		price: 'Ksh.25 Million',
		bed: '4',
		bath: '4',
		sqf: '1,200',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
	},
	{
		id: 6,
		image: sell5,
		title: 'Muthithi Estate',
		price: 'Ksh.25 Million',
		bed: '4',
		bath: '4',
		sqf: '1,200',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
	},
	{
		id: 7,
		image: sell6,
		title: 'Kitusuru Estate',
		price: 'Ksh.25 Million',
		bed: '4',
		bath: '4',
		sqf: '1,200',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
	},
	{
		id: 8,
		image: sell7,
		title: 'Lavington Estate',
		price: 'Ksh.25 Million',
		bed: '4',
		bath: '4',
		sqf: '1,200',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
	},
	{
		id: 9,
		image: sell8,
		title: 'Westlands Estate',
		price: 'Ksh.25 Million',
		bed: '4',
		bath: '4',
		sqf: '1,200',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
	},
	{
		id: 10,
		image: sell9,
		title: 'Karen Estate',
		price: 'Ksh.25 Million',
		bed: '4',
		bath: '4',
		sqf: '1,200',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
	},
];

export default SellData;
