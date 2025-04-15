import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
	return (
		<div className='relative overflow-hidden h-96 w-full rounded-lg group shadow-lg'>
			<Link to={"/category" + category.href}>
				<div className='w-full h-full cursor-pointer'>
					{/* Overlay */}
					<div className='absolute inset-0 bg-gradient-to-b from-transparent to-[#5C4033] opacity-60 z-10 transition duration-300 group-hover:opacity-70' />
					
					{/* Image */}
					<img
						src={category.imageUrl}
						alt={category.name}
						className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110'
						loading='lazy'
					/>

					{/* Text content */}
					<div className='absolute bottom-0 left-0 right-0 p-4 z-20'>
						<h3 className='text-[#FFF4E6] text-2xl font-bold mb-2'>{category.name}</h3>
						<p className='text-[#EED9C4] text-sm'>Explore {category.name}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CategoryItem;
