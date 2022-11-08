import jwt from 'jsonwebtoken';

const userAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token) {
        jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
            if (err) {
                console.log(err);
                res.redirect('/login');
            } else {
                console.log(decodedToken);
                next();
            }
        })
    } else {
        res.redirect('/login')
    }
    next();
}

export {
    userAuth
}