const { response } = require('express');
const jwt = require('jsonwebtoken');
global.authorize = (req,res,next)=>{
    const authHeader =req.headers.authorization;
    if(typeof authHeader !== 'undefined'){
        jwt.verify(authHeader,process.env.ACCESS_TOKEN_SECRET,(error,decoded)=>{
            if (error) {
                return res.status(401).json({ error: 'Token invalid or expired' });}
            else{
                next();
            }
        });
    }else{
        return res.status(401).json({ error: 'Token not provided' });
    }
};
module.exports = {
    authorize: global.authorize
};
