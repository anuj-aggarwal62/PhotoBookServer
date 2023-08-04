import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';


// initializes express instance to use various functionalities
const app = express();



// to parse income data from requests we use body-parser
app.use(bodyParser.json({limit : "30mb" , extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb" , extended : true}));

app.use(cors());

// to give a URL /posts to postRoutes
app.use('/posts',postRoutes);

// https://www.mongodb.com/clous/atlas

const CONNECTION_URL  = 'mongodb+srv://aggarwalanuj62:jBgrp52aiEbXFn7L@cluster0.iz2h5qr.mongodb.net/?retryWrites=true&w=majority';

// enviornment variable global for the whole project
const PORT = process.env.PORT || 5000;

// .then to access the data if connection successfull
// .catch is to access the error thrown by mongoDB if connection is unsuccessfull
mongoose.connect(CONNECTION_URL,
        {
            useNewUrlParser : true ,
            useUnifiedTopology : true
        }
    )
    .then(() => app.listen(PORT, () => console.log(`Server running on port : {PORT}`)))
    .catch((error) => console.log(error.message) );

// to avoid any errors as it a depricated function
// mongoose.set('useFindAndModify',false);



