const express = require('express');
const app = express();
const multer = require('multer');
require('dotenv').config()
const PORT = process.env.PORT
const upload = multer({dest: "/uploads"})

app.get('/' , (req , res ) =>{
    res.send("Aws-s3 file upload")
});


app.post('/uploads' ,upload.single('avatar'), (req , res)=>{
    const file = req.file
    console.log(file)

})

app.listen(PORT , () =>{
    console.log(`Server Started at ${PORT}`)
})