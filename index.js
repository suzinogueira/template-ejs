const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

let users = [
    {
    id: 0,
    name: "Suzi",
    phone: "(11)123412345"
    },
    {
    id: 1,
    name: "José",
    phone: "(11)123412345"
    },
    {
    id: 2,
    name: "Maria",
    phone: "(11)123412345"
    }
            

]

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");


app.get("/", (req,res) =>{

    res.render('user', {users:users});

})

app.get("/about", (req, res) =>{
    res.render('about');
})

app.listen(3000, ()=>{
    console.log('Server running on 3000');
})
