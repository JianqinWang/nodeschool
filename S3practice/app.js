var aws = require ('aws-sdk');
var ACCESS_KEY = process.env.ACCESS_KEY;
var SECRET_KEY = process.env.SECRET_KEY;
var ENDPOINT = process.env.ENDPOINT;
var BUCKET = process.env.BUCKET;

aws.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY
});

var s3 = new aws.S3({
  endpoint: ENDPOINT,
  s3ForcePathStyle: true,
});

function upload() {
  params = {
    Bucket: BUCKET,
    Key: process.argv[2],
    Body: process.argv[3]
  };

  s3.putObject(params, function(err, data) {
    if (err) {
      console.log('Error uploading data: ', err);
    } else {
      console.log('Successfully uploaded data: ' + BUCKET);
    }
  });
}

if (ACCESS_KEY && SECRET_KEY && ENDPOINT && BUCKET && process.argv[2] && process.argv[3]) {
  console.log('Creating File: ' + process.argv[2] + ' with the following contents:\n\n' + process.argv[3] + '\n\n');
  upload();
} else {
  console.log('\n[Error: Missing S3 credentials or arguments!]\n');
}
