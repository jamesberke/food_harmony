// 0tdC3dGrMcMx2Ydg
// mongodb+srv://dev:0tdC3dGrMcMx2Ydg@cluster0-ehf6v.mongodb.net/test?retryWrites=true&w=majority


// diaCMSlSTfxD6sTI
// nkk.cheung@gmail.com


module.exports = {
    mongoURI:
        "mongodb+srv://dev:diaCMSlSTfxD6sTI@cluster0-edxqb.mongodb.net/test?retryWrites=true&w=majority",
    secretOrKey: "secret",
    AWS_ACCESS_KEY_ID: "AKIARNH3D2GTQAOSSQTA",
    AWS_SECRET_KEY_ID: "NRY+rmK+GiZZeVz7yU6HWL9nqf/1jlSuICkb/hZz",
    AWS_BUCKET_NAME: "supertrampapp-ori",
    AWS_REGION: "us-east-1",
    AWS_Uploaded_file_URL_LINK:
        "https://supertrampapp-ori.s3-us-west-1.amazonaws.com/"
};




// email cowfish813@gmail.com
// Appacademy2020


// old bucket policy
// {
//   "Version": "2012-10-17",
//     "Statement": [
//       {
//         "Sid": "Stmt1420751757000",
//             "Effect": "Allow",
//         "Principal": {
//           "AWS": "arn:aws:iam::097163399591:user/supertrampapp-master"
//         },
//         "Action": "s3:*",
//         "Resource": [
//           "arn:aws:s3:::supertrampapp-ori",
//           "arn:aws:s3:::supertrampapp-ori/*"
//         ]
//       }
//     ]
// }

// new bucket
// {
//   "Version": "2008-10-17",
//     "Id": "Policy1397632521960",
//       "Statement": [
//         {
//           "Sid": "Stmt1397633323327",
//           "Effect": "Allow",
//           "Principal": {
//             "AWS": "*"
//           },
//           "Action": "s3:GetObject",
//           "Resource": "arn:aws:s3:::supertrampapp-ori/*"
//         }
//       ]
// }