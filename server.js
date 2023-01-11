import express from 'express';
import next from 'next';

const app = express();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {

  // Message Sending
  app.get("/custom-route", (req, res) => {
    res.send("Custom Route!!")
  })

  app.get("*", nextHandler)
  app.post('*', nextHandler)

  app.listen(port, err => {
    if (err) throw err
    console.log(`Listening on port ${port}`)
  })
})
