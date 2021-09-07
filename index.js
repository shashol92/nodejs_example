const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/api', (req, res) => {
    res.send('Hello......')
});

app.get('/first_template', (req, res) => {
    res.render('first_template');
})

app.listen(5000, ()=> {
    console.log(`server running on port number 5000`)
});

