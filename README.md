# yoruha
A simple [Express.js](https://expressjs.com/) app to facilitate receiving shell commands over HTTP.

# Installation
```bash
git clone https://github.com/elfry2/yoruha
cd yoruha
npm install
```

# Usage
Before anything else, configure the access tokens in ```tokens.js```. DO NOT USE THE DEFAULT!

To start the server, execute
```bash
npm start
```

Once the server is started, you can start receiving command requests sent by HTTP clients such as [httpie](https://httpie.io) or [Postman](https://www.postman.com). Assuming you haven't yet configured the tokens, a request to run the command ```neofetch``` on a server hosted in ```127.0.0.1``` on port ```3000``` with httpie would look like
```bash
http post http://127.0.0.1:3000/ token='REPLACE_WITH_YOUR_TOKEN_NOW!!!' command='neofetch'
```
Yes, you'd want to use single quotes.
