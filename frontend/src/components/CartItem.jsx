import { Minus, Plus, Trash } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const CartItem = ({ item }) => {
	const { removeFromCart, updateQuantity } = useCartStore();

	return (
		<div className='rounded-lg border p-4 shadow-sm border-[#f1f1f1] md:p-6'>
			<div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>

				{/* Product Image */}
				<div className='shrink-0 md:order-1'>
					<img className='h-20 md:h-32 rounded object-cover' src={item.image} alt={item.name} />
				</div>

				{/* Product Info */}
				<div className='w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md'>
					<p className='text-base font-medium text-white hover:text-gray-400 hover:underline'>
						{item.name}
					</p>
					<p className='text-sm text-[#c58a5c]'>{item.description}</p>

					<div className='flex items-center gap-4'>
						<button
							className='inline-flex items-center text-sm font-medium text-red-400 hover:text-red-300 hover:underline'
							onClick={() => removeFromCart(item._id)}
						>
							<Trash />
						</button>
					</div>
				</div>

				{/* Quantity Selector */}
				<div className='flex items-center gap-2 md:order-3 md:justify-end'>
					<button
						className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border 
						border-[#8B5E3C] bg-[#A97458] hover:bg-[#8B5E3C] focus:outline-none focus:ring-2 
						focus:ring-[#D2B48C]'
						onClick={() => updateQuantity(item._id, item.quantity - 1)}
					>
						<Minus className='text-[#F5F5DC]' />
					</button>
					<p className='text-[#F5F5DC]'>{item.quantity}</p>
					<button
						className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border 
						border-[#8B5E3C] bg-[#A97458] hover:bg-[#8B5E3C] focus:outline-none focus:ring-2 
						focus:ring-[#D2B48C]'
						onClick={() => updateQuantity(item._id, item.quantity + 1)}
					>
						<Plus className='text-[#F5F5DC]' />
					</button>
				</div>

				{/* Price */}
				<div className='text-end md:order-4 md:w-32'>
					<p className='text-base font-bold text-[#F5F5DC]'>${item.price}</p>
				</div>

			</div>
		</div>
	);
};


export default CartItem;
