const express = require('express'),
      app = express();

let port = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log('My first middleware.');
  next();
  console.log('My first middleware end.');
});

app.use(express.static('publc'));

app.use((req, res, next) => {
  console.log('My second middleware.');
  next();
  console.log('My second middleware end.');
});

app.get('/', (req, res) => {
  console.log('This is the index route.');
  res.send('hi');
});

app.listen(port, () => {
  console.log(`Your app is running on PORT ${ port }.`);
});
