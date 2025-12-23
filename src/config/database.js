const mongoose = require("mongoose");

const connectdb =  async () =>
await mongoose.connect( 
"mongodb+srv://namastedev:HFmVa2ypwcfBVEgZ@namsthenode.thyzepv.mongodb.net/devTinder"
);

module.exports = connectdb;

