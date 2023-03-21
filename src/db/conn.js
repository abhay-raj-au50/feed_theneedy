const mongoose = require("mongoose");

//creating a database
mongoose.connect("mongodb+srv://abhay-123:abhay-123@cluster0.tcbmx01.mongodb.net/feedthe_needy?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection successful")
}).catch((error) => {
    console.log(error);
});
