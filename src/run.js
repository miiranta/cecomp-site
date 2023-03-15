const fs                    = require('fs');
const https                 = require('https');
const path                  = require('path');
const express               = require('express');
const helmet                = require('helmet')
const redirectToHTTPS       = require('express-http-to-https').redirectToHTTPS
const routerEndpoints       = require("./routers/routerEndpoints")

//Dirs
const frontEndDirectory = path.join(__dirname, "../static")
const sslDirectory = process.env.SSLDIR || path.join(__dirname, "../ssl");

//Certbot stuff (HTTPS)
const httpsOptions = {
  key: fs.readFileSync(sslDirectory + '/privkey.pem'),
  cert: fs.readFileSync(sslDirectory + '/cert.pem'),
};

//Setup express
const httpsport = process.env.PORT_HTTPS;
const httpport  = process.env.PORT_HTTP;
const exp = express();
const server = https.createServer(httpsOptions, exp)

//middleware
exp.use(redirectToHTTPS([], [], 301));
exp.use(helmet({contentSecurityPolicy: false}))

//Load Angular Project
exp.use(express.static(frontEndDirectory));

//Routers
exp.use(routerEndpoints)

//Redirects to main page
exp.get('/*', (req, res) => res.sendFile(frontEndDirectory + '/index.html'));

//Listen to http and redirect to https
exp.listen(httpport);

//Listen to https
server.listen(httpsport, () => {
    console.log("Server is up!")
});
