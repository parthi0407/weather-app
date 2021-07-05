const express = require('express');
const app = express();
const path = require("path"); //path
const hbs = require("hbs"); //handlebar
const geocast = require('./Utility/geocast'); // calling the geocast file
const forecast = require('./Utility/forecast'); //calling the forecast file

// Define Path for express config
const publicDirPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates/views');
const partialPath = path.join(__dirname,'../templates/partials' );

// setup static directory to serve
app.use(express.static(publicDirPath));
app.set('view engine', 'hbs');
app.set('views', viewPath);

hbs.registerPartials(partialPath);

// Navigate from one page to another page
// parameters are, 1. page link, 2. values given for home page
app.get('/',function(req,res){
    res.render('home',{
        
        title: "Home page",
        createdBy: "Parthi"
    });
})
app.get('/login',function(req,res){
    res.render('login',{
        
        title: "Login page",
        createdBy: "Parthi"
    });
})
// parameters are, 1. page link, 2. values given for home page
app.get('/about',function(req,res){
    
    res.render('about',{
        title: "About page",
        createdBy: "Parthi"
    });
})
app.get('/help',function(req,res){
    res.render('help',{
        title: "Help page",
        createdBy: "Parthi"
    });
})
app.get('/api/weather', (req,res)=>{
// getting the value from query (url)
    geocast(req.query.location,function(err,data){
        if(err){
            res.status(500).send("Internal server error");
            return;
        }
        forecast(data,function(err,result){
            if(err){
                res.status(500).send("Internal server error");
                return;
            }
            res.status(200).send({
                message:"Success",
                forecast: result
            });
        })
    });
    
})
app.get('*',(req,res)=> {
    res.render('404')
});
app.listen(4793,function(){
    console.log("The project is running in port 4793")
})