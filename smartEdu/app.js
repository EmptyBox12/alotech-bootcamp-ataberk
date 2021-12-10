const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoute");

const app = express();
const PORT = "3000";
//%

//connect to db
mongoose
  .connect("mongodb://localhost/smartedu-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log(e));
//Template Engine
app.set("view engine", "ejs");
//Global Variables
global.userIN = null;

//Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "keyboard_cat",
    resave: false,
    saveUninitialized: true,
  })
);
//Routes
app.use("*", (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/category", categoryRoute);
app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
