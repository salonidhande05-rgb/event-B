let express = require("express");
let cors = require("cors");

let bookingRoutes = require("./routes/bookingRoutes");
require("dotenv").config();
let app = express();
app.use(cors());
app.use(express.json());
app.use("/",bookingRoutes);

let PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log("server running on port " + PORT);
});    
