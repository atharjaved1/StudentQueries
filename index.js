var express = require('express');
var mongoose = require('mongoose')
var cors = require('cors')
var express_session =require('express-session')
var bodyParser = require('body-parser')
var path = require('path')

var routes = require('./routes/route')
// var cookieParser = require('cookie-parser')
// var morgan = require('morgan')
// var routes = require('./routes/reservationRoutes')
//port number

var app = express();

const port= 5000



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

// app.use(cookieParser());
// app.use(express_session({secret:"fasdgasdgasdg",resave:false,saveUninitialized:true}))


//login
// app.use(morgan('dev'));

mongoose.connection.openUri('mongodb://localhost:27017/student',{useNewUrlParser:true});
mongoose.connection.on('connected',() => {
    console.log("connected to db")
})
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log(`Conenction failed ${err}`)
    }
})

app.use('/api',routes)
// app.use('/use',(req,res)=>{
//     res.send("hello again")
// })
//session 

//listen port
app.listen(process.env.PORT||port,()=>{
    console.log(`Port ${port}`)
})