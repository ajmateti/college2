const express = require('express');

const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost/oucedb')
    .then(() => console.log('connected to mongodb'))
    .catch(() => console.log('error occured'));

const Schema = mongoose.Schema;
var deptContent;
var deptSchema = new Schema({
    dept: String,
    content: String
}, { collection: 'depts' });
var deptData = mongoose.model('dept', deptSchema);

var homeContent;
var homeSchema = new Schema({
    content: String
}, { collection: 'home' });
var homeData = mongoose.model('home', homeSchema);



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.get('/', (req, res, next) => {

    console.log('got a request');
    homeData.find().then((doc) => {
        homeContent = doc[0].content;
        res.status(200).json({
            homeContent: homeContent
        })
    }).catch((err) => console.log(err));
});

app.get('/about/:id', (req, res, next) => {
    var deptName = req.params.id;

    console.log('request for /about/' + deptName);


    deptData.find({ dept: deptName }).then((doc) => {
        deptContent = doc[0].content;
        console.log(deptContent);
        res.status(200).json({
            deptContent: deptContent
        })
    }).catch((err) => console.log(err));
});


module.exports = app;