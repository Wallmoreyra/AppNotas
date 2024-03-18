const mongoose = require('mongoose')

const { MONGODB_DATABASE, MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_HOST1} = process.env;


const MONGODB_URI = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOST1}/${MONGODB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;

//const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI)
    .then(db => console.log('Database is conected!!'))
    .catch(err => console.log(err));

    //useCreateIndex:true
