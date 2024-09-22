// const express = require('express');
// const app = express(); 
// const cookieParser = require('cookie-parser');
// const path = require('path');

// const ownersRouter = require('./routes/ownersRouter');
// const productsRouter = require('./routes/productsRouter');
// const usersRouter = require('./routes/usersRouter');
// const router= require('./routes/index');

// const db = require("./config/mongoose-connection");

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
// app.set("view engine", "ejs");

// app.use("/owners", ownersRouter);   
// app.use("/users", usersRouter);   
// app.use("/products", productsRouter);   

// // app.get("/", function (req, res) {
// //     res.render("index");
// // });


// app.get("/", function (req, res) {
//     let error = req.flash('error'); // assuming you are using connect-flash middleware
//     res.render("index", { error: error });
// });

// app.listen(3000);

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');

const ownersRouter = require('./routes/ownersRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const indexrouter = require('./routes/index');

require("dotenv").config();

const db = require("./config/mongoose-connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

app.use(flash());

app.use("/", indexrouter)
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// app.get("/", function (req, res) {
//   let error = req.flash('error');
//   res.render("index", { error: error });
// });


app.listen(3000);