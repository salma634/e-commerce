import { useEffect, useState } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const FeaturedProducts = ({ featuredProducts }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(4);
    
	const { addToCart } = useCartStore();

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) setItemsPerPage(1);
			else if (window.innerWidth < 1024) setItemsPerPage(2);
			else if (window.innerWidth < 1280) setItemsPerPage(3);
			else setItemsPerPage(4);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
	};

	const isStartDisabled = currentIndex === 0;
	const isEndDisabled = currentIndex >= featuredProducts.length - itemsPerPage;

	return (
		<div className="py-12">
			<div className="container mx-auto px-4">
				<h2 className="text-center text-5xl sm:text-6xl font-bold text-[#c98f63] mb-4">Featured</h2>
				<div className="relative">
					<div className="overflow-hidden">
						<div
							className="flex transition-transform duration-300 ease-in-out"
							style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
						>
							{featuredProducts?.map((product) => (
								<div
									key={product._id}
									className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 px-2"
								>
									<div className=" bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl border  border-gray-700 ">
										<div className="overflow-hidden">
											<img
												src={product.image}
												alt={product.name}
												className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
											/>
										</div>
										<div className="p-4">
											<h3 className="text-lg font-semibold mb-2 text-white">{product.name}</h3>
											<p className='text-3xl font-bold text-[#b88968] mb-8'>
												${product.price.toFixed(2)}
											</p>
											<button
												onClick={() => addToCart(product)}
												className='flex items-center justify-center rounded-lg bg-[#A97458] px-5 py-2.5 text-center text-sm font-medium
                      text-[#F5F5DC] hover:bg-[#8B5E3C] focus:outline-none focus:ring-4 focus:ring-[#D2B48C]'
											>
												<ShoppingCart className="w-5 h-5 mr-2" />
												Add to Cart
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Navigation buttons */}
					<div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
						<button
							onClick={prevSlide}
							disabled={isStartDisabled}
							className={`p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition ${
								isStartDisabled ? "opacity-50 cursor-not-allowed" : ""
							}`}
						>
							<ChevronLeft />
						</button>
					</div>
					<div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
						<button
							onClick={nextSlide}
							disabled={isEndDisabled}
							className={`p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition ${
								isEndDisabled ? "opacity-50 cursor-not-allowed" : ""
							}`}
						>
							<ChevronRight />
						</button>
					</div>
				</div>
          
			</div>
		</div>
	);
};

export default FeaturedProducts;
