import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();

	return (
		<header className='fixed top-0 left-0 w-full bg-[#D2B48C] bg-opacity-95 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-[#A67B5B]'>
			<div className='container mx-auto px-4 py-3'>
				<div className='flex flex-wrap justify-between items-center'>
					<Link to='/' className='text-2xl font-bold text-[#5C4033] items-center space-x-2 flex'>
					Globistore
					</Link>

					<nav className='flex flex-wrap items-center gap-4'>
						<Link
							to={"/"}
							className='text-[#4B3621] hover:text-[#8B5E3C] transition duration-300 ease-in-out'
						>
							Home
						</Link>

						{user && (
							<Link
								to={"/cart"}
								className='text-[#4B3621] hover:text-[#8B5E3C] transition duration-300 ease-in-out flex items-center'
							>
								<ShoppingCart className='mr-1' size={20} />
								<span className='hidden sm:inline'>Cart</span>
								{cart.length > 0 && (
									<span>{cart.length}</span>
								)}
								
							</Link>
						)}

						{isAdmin && (
							<Link
								to={"/secret-dashboard"}
								className='bg-[#8B5E3C] hover:bg-[#A0522D] text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center'
							
							>
								<Lock className='inline-block mr-1' size={18} />
								<span className='hidden sm:inline'>Dashboard</span>
							</Link>
						)}

						{user ? (
							<button
								className='bg-[#5C4033] hover:bg-[#3E2C1C] text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
								onClick={logout}
							>
								<LogOut size={18} />
								<span className='hidden sm:inline ml-2'>Log Out</span>
							</button>
						) : (
							<>
								<Link
									to={"/signup"}
									className='bg-[#A67B5B] hover:bg-[#8B5E3C] text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
								>
									<UserPlus className='mr-2' size={18} />
									Sign Up
								</Link>
								<Link
									to={"/login"}
									className='bg-[#5C4033] hover:bg-[#3E2C1C] text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
								>
									<LogIn className='mr-2' size={18} />
									Login
								</Link>
							</>
						)}
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
