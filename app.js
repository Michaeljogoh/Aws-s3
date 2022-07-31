const { ManagedUpload } = require('aws-sdk/clients/s3');
const express = require('express');
const app = express();
const multer = require('multer');
require('dotenv').config()
const PORT = process.env.PORT
const upload = multer({dest: "/public/uploads"});
const {uploadFile , getStreamFile} = require('./utils/s3')

app.get('/' , (req , res ) =>{
    res.send('Aws-s3   File Upload')
});

app.get('/image/:key' , (req , res ) =>{
    const key = req.params.key
    const readStream = getStreamFile(key)
    readStream.pipe(res)
});


app.post('/uploads' , upload.single('avatar'), async(req , res)=>{
    const file = req.file
    console.log(file)
    const result = await uploadFile(file)
    console.log(result)
    res.status(200).json({result})

})

app.listen(PORT , () =>{
    console.log(`Server Started at ${PORT}`)
})