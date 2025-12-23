const express = require("express");
const app = express();

const connectdb =  require("./config/database");
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async(req, res)=> {
  const user = new User({
     firstName: "virat",
    lastName: "kohli",  
    EmailId: "viratkohli@123",   
    password: "kohli@123",

  });
  await user.save();
  res.send("user send successfullly");


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




