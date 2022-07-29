require('dotenv').config()
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs')


const bucketName  = process.env.AWS_BUCKET_NAME
const  region = process.env.AWS_BUCKET_REGIONS
const accessKeyId  = process.env.AWS_BUCKET_ACCESS_KEY
const  secretAccessKey = process.env.AWS_BUCKET_SECRET_ACCESS_KEY

const s3 = new S3({
    region, 
    accessKeyId,
    secretAccessKey
});


// upload file
function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path)
    const uploadParams ={
        Bucket: bucketName,
        Body:fileStream,
        Key: file.filename

    }
    return s3.upload(uploadParams).promise()


}

exports.uploadFile = uploadFile