// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require('nodemailer');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);


app.post('/', function(req, res) {
  nodemailer.createTestAccount((err, account) => {

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: 'mari.vlz13@gmail.com',
            pass: 'megustamayores'
          },
          port:PORT,
          secure: false
        });

      // setup email data with unicode symbols
      let mailOptions = {
          from: req.body.email,// sender address
          to: 'mari.vlz13@gmail.com', // list of receivers
          subject: 'Message from Form', // Subject line
          text: req.body.message // plain text body
      };
    });
  });

// =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
