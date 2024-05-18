const express = require('express')
const mongoose = require('mongoose');
const Serie = require('./models/serie.models.js');
const SerieRoute = require('./routes/serie.route.js');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: ['https://cpe499-front-end.vercel.app', 'http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/series", SerieRoute);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

mongoose.connect('mongodb+srv://mongo:1234@cluster0.l33htiv.mongodb.net/node-crud?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => {
        console.log("Connection Filed!");
    });
