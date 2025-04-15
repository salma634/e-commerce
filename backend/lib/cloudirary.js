import { v2 as cloudirary } from "cloudinary";
import dotenv from "dotenv";


dotenv.config();


cloudirary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudirary;