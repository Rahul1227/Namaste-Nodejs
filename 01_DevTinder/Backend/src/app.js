import express, { urlencoded } from "express";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    res.send('Hy!! Welcome to my website');

})

app.get('/users', (req, res)=>{
    console.log('the path of the request is: ', req.url);
    // res.status(200).send({"firstName" : "rahul yadav", "lastName": 'Yadav'});

})

app.post('/users', (req, res)=>{
    console.log('the data received is', req.body);
    res.status(201).send({
        message:'Data stored successfully',
        data : req.body
    })
})


// extracting the data from the query params
app.get('/test', (req, res)=>{
    if(req.query){
        console.log(req.query);
        
    }
    res.send(req.query)
})


//dynamic routing
app.get('/user/:userId', (req, res)=>{
    console.log(req.params);
    res.send(req.params)
})

// dynamic routing with multiple parameters
app.get('/user/:userId/:userName',(req, res)=>{
    res.status(200).send(req.params)
})

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
