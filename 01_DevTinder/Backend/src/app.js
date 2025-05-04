import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => res.end("Hello World!"));
app.get('/users', (req, res)=>{
    res.end('there are no other users except you')
})
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
