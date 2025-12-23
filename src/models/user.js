const mongoose = require("mongoose");

const userSchema =  new mongoose.Schema({
  firstName: {
    type :String
  },
  lastName :{
    type: String
  }, 

  EmailId : {
    type: String
  },
  password : {
    type: String
  }, 
  age : {
    type : Number
  },
  gender : {
    type : String

  }


});

// Now we can create a mongoose model
module.exports = mongoose.model("User", userSchema);
