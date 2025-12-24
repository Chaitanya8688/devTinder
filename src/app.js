const express = require("express");
const app = express();

const connectdb =  require("./config/database");
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async(req, res)=> {
  try {
    console.log(req.body); // middleware output

    const user = new User(req.body);
    await user.save();

    res.status(201).send("User created successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
});



connectdb()
.then(()=> {
  console.log("Database connection established");

     app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
});
})

.catch((err) => {
  console.error("Database not be connection establishment");
});
