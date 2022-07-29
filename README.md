# Amazon S3 Uploader

S3 provides a simple way for uploading files to the Amazon S3 service with a progress bar. This is useful for uploading images and files that you want accesible to the public. S3 is built on Knox and AWS-SDK. Both modules are made available on the server after installing this package.



$ Get Credentials
$ Upload to Bucket
$ Download from Bucket
$ List Bucket Files


# Upload Data o Bucket Endpoints
localhost:4000/

localhost:4000/uploads

# Download Data From Bucket Endpoints

localhost:4000/image/:key


Upload data to a specific folder in the bucket:
 <bucket_name> upload --data <path/to/local/file_or_folder> --folder <bucket_folder>
If you want to make the data public on S3:
 <bucket_name> upload --data <path/to/local/file_or_folder> --public
 
 
# How to use

3 Step 1
Define your Amazon S3 credentials. SERVER SIDE.



S3.config = {
  bucket: 'bucketName',
	key: 'amazonKey',
	secret: 'amazonSecret',
	region: 'eu-west-1' // Only needed if not "us-east-1" or "us-standard"
};




Step 2
Create a function to upload the files and a helper to see the uploads progress. CLIENT SIDE.


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
const uploadFile = (file)  =>{
    const fileStream = fs.createReadStream(file.path)
    const uploadParams ={
        Bucket: bucketName,
        Body:fileStream,
        Key: file.filename

    }
    return s3.upload(uploadParams).promise()


}

# how to get Files


const getStreamFile = (filekey) =>{
    const getParams = {
        Key:filekey,
        Bucket: bucketName
    }
    return s3.getObject(getParams).createReadStream()
}



# Create your Amazon S3
For all of this to work you need to create an aws account.

$ Create an S3 bucket in your preferred region.
$ Access Key Id and Secret Key
$ Navigate to your bucket
$ On the top right side you'll see your account name. Click it and go to Security Credentials.
$ Create a new access key under the Access Keys (Access Key ID and Secret Access Key) tab.
$ Enter this information into your app as defined in "How to Use" "Step 1".
$ Your region can be found under "Properties" button and "Static Website Hosting" tab.
$ bucketName.s3-website-eu-west-1.amazonaws.com.
$ If your region is "us-east-1" or "us-standard" then you don't need to specify this in the config.
