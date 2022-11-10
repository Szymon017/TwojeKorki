import jwt from 'jsonwebtoken';


export const userAuth = (req, res, next) => {
    const token = req.header('auth-token');
    if(!token){
        res.status(401).json({
            message: "No token - authorization denied!"
        })
    }
    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        if(!verified){
            return res.status(401).json({
                message: "Cannot verify - authorization denied!"
            })
        }
        req.user = verified
        
        next();
    }catch(err){
        res.status(401).json({
            message: err
        })
    }
}