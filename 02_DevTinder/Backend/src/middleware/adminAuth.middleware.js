
export const AdminAuth = (req, res, next)=>{
    console.log("Admin auth middleware is getting checked");
    let receivedToken;
    if(!req.body.token){
        res.send('!!!Validation token missing....')
    }else{
        receivedToken = req.body.token;
    }
    const isAuthenticated = receivedToken ==='xyz';
    if(!isAuthenticated){
        res.status(401).send('Unauthorized');
    }else{
        next();
    }
}