const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors");
// const morgan = require('morgan');



// All Routes
const serviceRoutes = require('./routes/services');
const catalogueRoutes = require('./routes/catalogues');
const catalogueDocRoutes = require('./routes/catalogueDocs');
const postRoutes = require('./routes/post');

const app = express();
app.use(cookieParser());
app.use('/images', express.static('images'))
// dotenv.config({ path: '../config.env' });

require('./config/db');
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// All Routes Middlewares
app.use(serviceRoutes);
app.use(catalogueRoutes);
app.use(catalogueDocRoutes);
app.use(postRoutes);

app.get('/',(req, res) => {
    res.send(`hello server world`);
})

// const PORT = process.env.PORT;

app.listen(8050, () => {
    console.log(`server is running on 8050`);
})