import jwt  from "jsonwebtoken"

export const authentication = (req,res,next)=>{
    const AuthorizationToken = req.headers["authorization"]
    if(!AuthorizationToken) res.status(401)

    jwt.verify(AuthorizationToken,'SecretKey',(err,user)=>{
        if(err){
            res.send("Access denied, token incorrect or expired");
        }else{
            next() 
        }
    })
    
}


export const generateAccessToken = (user)=>{
    return jwt.sign(user, "SecretKey") 
}