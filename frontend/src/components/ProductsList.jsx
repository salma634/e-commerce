import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";

const ProductsList = () => {
	const { deleteProduct, toggleFeaturedProduct, products } = useProductStore();

	console.log("products", products);

	return (
		<motion.div
			className=' border shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<table className='min-w-full divide-y '>
				<thead className='bg-[#a35b2798]'>
					<tr>
						<th className='px-6 py-3 text-left text-xs font-semibold text-[#f5f5f5] uppercase tracking-wider'>
							Product
						</th>
						<th className='px-6 py-3 text-left text-xs font-semibold text-[#fcfaf9] uppercase tracking-wider'>
							Price
						</th>
						<th className='px-6 py-3 text-left text-xs font-semibold text-[#ecebea] uppercase tracking-wider'>
							Category
						</th>
						<th className='px-6 py-3 text-left text-xs font-semibold text-[#f3f3f3] uppercase tracking-wider'>
							Featured
						</th>
						<th className='px-6 py-3 text-left text-xs font-semibold text-[#fdfdfd] uppercase tracking-wider'>
							Actions
						</th>
					</tr>
				</thead>

				<tbody className='bg-[#4b2e1800] divide-y divide-[#6F4E37]'>
					{products?.map((product) => (
						<tr key={product._id} >
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='flex items-center'>
									<div className='flex-shrink-0 h-10 w-10'>
										<img
											className='h-10 w-10 rounded-full object-cover border-2 border-[#D2B48C]'
											src={product.image}
											alt={product.name}
										/>
									</div>
									<div className='ml-4'>
										<div className='text-sm font-semibold text-[#FCEBD5]'>{product.name}</div>
									</div>
								</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='text-sm text-[#E6CBA8]'>${product.price.toFixed(2)}</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='text-sm text-[#E6CBA8]'>{product.category}</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap'>
								<button
									onClick={() => toggleFeaturedProduct(product._id)}
									className={`p-1 rounded-full ${
										product.isFeatured
											? "bg-yellow-400 text-gray-900"
											: "bg-[#8B5E3C] text-[#FCEBD5]"
									} hover:bg-yellow-500 transition-colors duration-200`}
								>
									<Star className='h-5 w-5' />
								</button>
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
								<button
									onClick={() => deleteProduct(product._id)}
									className='text-red-400 hover:text-red-300'
								>
									<Trash className='h-5 w-5' />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</motion.div>
	);
};

export default ProductsList;
