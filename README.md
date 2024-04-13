# express-hcaptcha-mod

### Validate your hCaptcha token using a expressjs middleware
First register/login on https://www.hcaptcha.com/ and create ```site-key``` and ```secret-key```

## Usage

```
git clone https://github.com/TonyStark/express-hcaptcha-example
```
```
cd express-hcaptcha-example
npm i
```

```js
// Open app.js and replace secret-key
const SECRET = process.env.HCAPTCHA_SECRET_KEY;
```

```js
// Open views/index.ejs replace site-key
<div class="h-captcha" data-sitekey="YOUR-SITE-KEY" name="token"></div>
```
```
npm start
```
