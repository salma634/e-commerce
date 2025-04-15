import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// ✅ Middleware pour protéger les routes
export const protectRoute = async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken;

        if (!accessToken) {
            return res.status(401).json({ message: "Unauthorized - No access token provided" });
        }

        // ✅ Vérifie et décode le token
     
       try {
        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

        // ✅ Récupère l'utilisateur sans le mot de passe
        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        // ✅ Ajoute l'utilisateur à la requête
        req.user = user;

        // ✅ Continue vers la route suivante
        next();
       } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ massage: "unauthorized - Access token expired"})
        }
        throw error;
       }

    } catch (error) {
        console.log("Error in protectRoute middleware:", error.message);
        return res.status(401).json({ message: "Unauthorized - Invalid access token" });
    }
};

export const adminRoute = (req, res, next) =>{
    if(req.user && req.user.role === "admin"){
        next()
    } else {
        return res.status(403).json({ message: "Access denied - Admin only" });
    }
};
