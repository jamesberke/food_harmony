//DELETE BEFORE PASSING THROUGH, JUST IN CASE.


// WATCH OUT FOR THIS ONE

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