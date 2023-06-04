const express = require("express");
const mongoose =require('mongoose');
const bodyParser = require("body-parser");
const _=require("lodash");
const cors = require('cors');

const app = express();
const corsOptions = {
    origin: ['http://localhost:3000']
  };
  
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
mongoose.connect("mongodb://127.0.0.1:27017/bookDB",{ useNewUrlParser:true });
const bookSchema=new mongoose.Schema({
    title: String,
    author: String
});
const Book= mongoose.model("Book",bookSchema);
app.route("/").get((req,res)=>{
    res.sendFile("index.html");
});
app.route("/home").get((req,res)=>{
    Book.find().exec()
    .then(result=>{
        res.send(result);
    }).catch(err=>{console.log(err);})
}).post((req,res)=>{
    console.log(req.body);
    const title=req.body.title;
    const author=req.body.author;
    const newBook= new Book({
        title:title,
        author:author
    });
    newBook.save()
    .then(()=>{
        //console.log("Successfully Added Entry");
        res.send("Successfully Added Entry");
    })
    .catch(err=>{console.log(err);});
});

app.route("/books/:query").get((req,res)=>{
    const query=_.startCase(req.params.query);
    //console.log(query);
    Book.find({$or:[{title:query},{author:query}]}).exec().then(result=>{
        if(result){
            res.send(result);
        }else{
            res.send("No Resut Found")
        }
    }).catch(err=>{console.log(err);});
})
.delete((req,res)=>{
    const id=req.params.query;
    Book.deleteOne({_id:id}).exec()
    .then(()=>{res.send("Record Deleted")})
    .catch(err=>{
        console.log(err);
    });
})


app.listen(5000, ()=> {
    console.log("Server started on port 5000");
  });