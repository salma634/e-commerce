import { motion } from "framer-motion";
import { useState } from "react";
import { useCartStore } from "../stores/useCartStore";

const GiftCoupon = () => {
    const [userInputCode, setUserInputCode] = useState("");
    const { coupon, isCouponApplied } = useCartStore();

    const handleApplyCoupon = () => {
        console.log(userInputCode);
    };

    const handleRemoveCoupon = () => {
        console.log("remove coupon");
    };

    return (
        <motion.div 
            className="space-y-6 rounded-lg border p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="space-y-4">
                <div className="space-y-2">
                    <label 
                        htmlFor="voucher" 
                        className="block text-sm font-medium text-gray-300"
                    >
                        Do you have a voucher or gift card?
                    </label>

                    <input
                        type="text"
                        id="voucher"
                        className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-3 
                        text-sm text-white placeholder-gray-400 focus:border-[#C19A6B] focus:ring-1 focus:ring-[#C19A6B]"
                        placeholder="Enter code here"
                        value={userInputCode}
                        onChange={(e) => setUserInputCode(e.target.value)}
                        required
                    />
                </div>

                <motion.button
                    type="button"
                    className="flex w-full items-center justify-center rounded-lg bg-[#C19A6B] px-6 py-3 
                    text-sm font-medium text-[#3f2614] focus:outline-none focus:ring-4 focus:ring-[#C19A6B]/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleApplyCoupon}
                >
                    Apply Code
                </motion.button>
            </div>

            {isCouponApplied && coupon && (
                <div className="pt-4 mt-6 border-t border-gray-600 space-y-2">
                    <h3 className="text-lg font-semibold text-gray-300">Applied Coupon</h3>
                    <p className="text-sm text-gray-400">
                        {coupon.code} — {coupon.discountPercentage}% off
                    </p>

                    <motion.button
                        type="button"
                        className="mt-2 flex w-full items-center justify-center rounded-lg bg-red-600 px-6 py-3 
                        text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleRemoveCoupon}
                    >
                        Remove Coupon
                    </motion.button>
                </div>
            )}

            {coupon && (
                <div className="pt-4 mt-6 border-t border-gray-600 space-y-2">
                    <h3 className="text-lg font-semibold text-gray-300">Your Available Coupon:</h3>
                    <p className="text-sm text-gray-400">
                        {coupon.code} — {coupon.discountPercentage}% off
                    </p>
                </div>
            )}
        </motion.div>
    );
};

export default GiftCoupon;
