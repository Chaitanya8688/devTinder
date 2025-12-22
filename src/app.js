const express = require("express");
const app = express();

/*  Error-handling middleware (global) */
app.use("/", (err, req, res, next) => {
  if (err) {
    // log your error
    res.status(500).send("something went wrong");
  }
});

/* ✅ Route */
app.get("/getUserData", (req, res) => {
  // Logic of DB call and get user data

  throw new Error("dvbzjh"); // forcefully throwing error

  res.send("User Data Sent");
});

/* Error-handling middleware (must be after routes) */
app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Some Error contact support team");
  }
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
