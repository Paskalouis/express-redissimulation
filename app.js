// Import and Execute Express App
const express = require('express');
const app = express();

// Import and Execute Redis
const redis = require("redis");
const { promisify } = require('util');
const client = redis.createClient();

// Since Node Redis is Asynchronous, need to promify the client.get() hook
const getAsync = promisify(client.get).bind(client);

// Set the Express app to receive data from req.body
app.use(express.urlencoded({ extended: true }));

// Error handling if redis client encounters error
client.on("error", function (err) {
    console.log("Error " + err);
});
// Informing the log that client is now connected
client.on("connect", function () {
    console.log(`Initializing Redis Server on port : 6379`);
});

// Set the templating engine for Express. In this case use ejs
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// GET / handler : render index.html inside views/
app.get('/', (req, res) => res.render('index', { title: 'ejs' }));

// POST /redis handler
app.post('/redis', async (req, res) => {
    // Use the passed param 'test' into key string here
    let key = `anti-spam:${req.body.test}`;

    // Set value using async await function. Getting the key from redis client
    let value = await getAsync(key);

    console.log(`Value of the Key : ${value}`);
    // If the value is existing, then response error
    if (value) {
        return res.status(500).send("Value Exists, Please Wait");
    }

    // If there is no redis key value, set new key with 10 second expiration time
    console.log('Now setting the key to the redis client...');
    client.set(key, key, 'EX', 10, () => {
        return res.status(200).send("Status: OK");
    });

});

app.listen(3000, () => console.log('Redis test App started on port: 3000!'));