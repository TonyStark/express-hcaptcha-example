const cors = require('cors'); //npm i cors
const express = require('express'); //npm i express
const hCaptcha = require('express-hcaptcha-mod');

// your hcaptcha secret key
const SECRET = process.env.HCAPTCHA_SECRET_KEY;
const PORT = process.env.PORT || 5500;

const app = express();
app.set('view engine', 'ejs'); //npm i ejs
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());
// render index page
app.get('/', (req, res) => {
    res.render('index');
});
// validate the token and proceed to the route when token is valid
// the middleware also sets the req.hcaptcha to what ever the verify call returns
app.post('/verify', hCaptcha.middleware.validate(SECRET), (req, res) => {
    console.log(req.hcaptcha)
    res.json(req.hcaptcha);

});

app.listen(PORT, () => {
  console.log(`listening on http://0.0.0.0:${PORT}`);
});




// const express = require('express');
// const hCaptcha = require('express-hcaptcha');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5500;

// app.set('view engine', 'ejs');
// app.use(cors());
// // app.use(multipart()); // Parse multipart form data
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json())
// // app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
// app.get('/', (req, res) => {
//     res.render('index');
// });

// app.post('/verify', hCaptcha.middleware.validate('ES_7c79db34efb9474faf7972d1321876ac'), (req, res) => {
//         // console.log(req.hcaptcha.success)
//       if(req.hcaptcha.success==true){
//         res.json({ success: true });
//       }else{
//         res.json({ success: false });
//       }

// });
// // app.post('/verify', (req, res) => {

// //       // console.log(req)
// //     console.log(req.body)

// // });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
