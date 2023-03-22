const express = require('express');
const cheerio = require('cheerio');
const archiver = require('archiver');

const startJSON = (req, res) => {
    // We fetch the webpage and convert the HTML code to text
    fetch(...).then(response => {
        response.text().then(text => {
            // We parse the HTML text using cheerio
            const $ = cheerio.load(text);
            // We iterate each <a/> tag
            $('a').each(function() {
                // We process the <a/> tag
                ...
            });
        });
    });
};

const startZIP = (req, res) => {
    // We fetch the webpage and convert the HTML code to text
    fetch(...).then(response => {
        response.text().then(text => {
            // We parse the HTML text using cheerio
            const $ = cheerio.load(text);
            // We iterate each <a/> tag
            $('a').each(function() {
                // We process the <a/> tag
                ...
                fetch(...)
                .then(result => result.arrayBuffer())
                .then(arrayBuffer => {
                    // We convert the array buffer to a Buffer object
                    const buffer = Buffer.from(arrayBuffer);
                    // We put append the buffer into the zip
                    zip.append(Buffer.from(buffer), { name: 'a' });
                });
            });
        });
    });
};

const app = express();
const port = 3000;

app.get('/json', function(req, res){
    startJSON(req, res);
});

app.get('/zip', function(req, res){
    startZIP(req, res);
});

app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
