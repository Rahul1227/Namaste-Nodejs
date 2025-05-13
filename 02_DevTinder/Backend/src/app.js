import express from "express";
import { connectDB } from "./config/connectDB.js";
import { User } from "./model/user.model.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connecting to the database
await connectDB();

// making post request to the database
app.post("/signup", async (req, res) => {
  try {
    const data = req.body;
    const user = new User(data);
    // user.save() will return a promise to using await keyword
    await user.save();
    res.status(201).send({
      message: "User saved successfully",
      data: req.body,
    });
  } catch (err) {
    res.status(400).send({
      message: "Something went wrong",
      error: err,
    });
  }
});

// api to get user with the emailID
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  if (!userEmail) {
    res.status(400).send("Email is required");
  } else {
    try {
      const users = await User.find({ emailId: userEmail });
      if (users.length === 0) {
        res.status(404).send("User not found. Try again");
      } else {
        res.status(200).send(users);
      }
    } catch (err) {
      res.status(400).send({
        message: "Something went wrong",
        error: err,
      });
    }
  }
});

// making feedroute to get all the users
app.get('/feed', async (req, res)=>{
    try{
        const users = await User.find({});
        if(users.length === 0){
            res.status(404).send('Database is empty');
        }else{
            res.status(200).send(users);
        }

    }catch(err){
        res.status(400).send({
            message : "something wend wrong",
            error : err
        })
    }
})

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
