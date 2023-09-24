import {
	buy,
	buy1,
	buy2,
	buy3,
	buy4,
	buy5,
	buy6,
	buy7,
	buy8,
	buy9,
} from 'assets/images';
const BuyData = [
	{
		id: 1,
		image: buy,
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
		image: buy1,
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
		image: buy2,
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
		image: buy3,
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
		image: buy4,
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
		image: buy5,
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
		image: buy6,
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
		image: buy7,
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
		image: buy8,
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
		image: buy9,
		title: 'Karen Estate',
		price: 'Ksh.25 Million',
		bed: '4',
		bath: '4',
		sqf: '1,200',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
	},
];

export default BuyData;
