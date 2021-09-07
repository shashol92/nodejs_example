const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
// app.set('view engine', 'html');
app.set('views', './views');

app.get('/api', (req, res) => {
    res.send('Hello......')
});

app.get('/first_template', (req, res) => {
    res.render('first_template');
});

app.get('/html', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/index.html'))
})

app.listen(5000, ()=> {
    console.log(`server running on port number 5000`)
});

