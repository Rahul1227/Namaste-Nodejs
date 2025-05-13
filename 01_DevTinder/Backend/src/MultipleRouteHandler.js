import express from 'express'

const app = express();

app.use(
    '/route-handler',
    (req, res, next)=>{
        console.log('First route handler');
        next();
    },
    (req, res)=>{
        res.send({"name":"rahul"});
    }
);

app.listen(4500,(err)=>{
    if(!err){
        console.log('server started successfully on port', 4500)
    }
    else
        console.error("Error while starting the server", err);
})