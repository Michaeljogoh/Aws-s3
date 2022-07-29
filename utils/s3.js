const s3 = require('aws-sdk/client/s3')

const bucketName  = process.env.AWS_BUCKET_NAME
const  region = process.env.AWS_BUCKET_REGIONS
const accessKeyId  = process.env.AWS_BUCKET_ACCESS_KEY
const  secretAccessKey = process.env.AWS_BUCKET_SECRET_ACCESS_KEY

const s3 = new s3({
    bucketName,
    region, 
    accessKeyId,
    secretAccessKey
});