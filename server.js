const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': (1),
            'image': 'https://placeimg.com/64/64/1',
            'name': 'bryan tan',
            'birthday': '961221',
            'gender': 'female',
            'job': 'student'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': 'Tang Ong',
            'birthday': '990111',
            'gender': 'male',
            'job': 'engineer'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': 'Shui Wen',
            'birthday': '981121',
            'gender': 'female',
            'job': 'doctor'
        }    
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));