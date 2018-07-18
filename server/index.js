const express = require("express");
const { Nuxt, Builder } = require("nuxt");
const app = express();
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;
const axios = require("axios");
let response = [];

app.set("port", port);
// console.log("loading server...");

// (async function() {
//   response = await axios.get("https://yoga-api.now.sh/api/poses");
//   response = response.data.splice(0, 2);
// })();
// app.use((req, res, next) => {
//   console.log(response);
// });
// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }
  // app.get("/get-yoga", (req, res) => {
  //   res.status(200).send(response);
  // });
  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  console.log("Server listening on http://" + host + ":" + port); // eslint-disable-line no-console
}
start();
