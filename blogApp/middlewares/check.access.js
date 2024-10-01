
const checkAccess=(requiredRole)=>{
    return (req,res,next)=>{
        if(req.user.role!==requiredRole){
            console.log(req.user.role);
            console.log(requiredRole)
            console.log(req.body)
            return res.status(403).send("Acess Denied")
        }
        next()
    }


}

module.exports=checkAccess;