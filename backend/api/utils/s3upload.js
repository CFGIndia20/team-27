const logger = require('../../config/winston');


const aws = require('aws-sdk');
const s3 = aws.S3({})
const BucketName = process.env.BUCKET_NAME;

/***
* @desc Create an upload stream to S3
*/
let uploadStream = (Bucket, Key) => {
  const pass = new stream.PassThrough();
  return {
    writeStream: pass,
    promise: s3.upload({ Bucket, Key, Body: pass }).promise(),
  };
}

module.exports = async (title, fileName) => {
	try {
        let readStream = fs.createReadStream(process.cwd() + `/temp/${fileName}`);	
        let uploadName = title.split(" ").join("-") + dateIdentifier + "." + fileName.split(".").pop();
        let { writeStream, promise } = uploadStream(BucketName,`$${uploadName}`);

        readStream.pipe(writeStream);
        
        let uploaded = await promise;
        if (!uploaded) {
            return false;
        }
        return true;
    } catch (err) {
        logger.error({error: err, message: "An error occured"});
        return false;
    }
}