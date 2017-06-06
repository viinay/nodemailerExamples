var nodemailer = require('nodemailer');
var smtpTransport1 = require("nodemailer-smtp-transport");

var smtpTransport = nodemailer.createTransport(smtpTransport1({
    service: "native",
    host: "securedmail.io", //hostname differs
    secure: false,
    requireTLS: true,
    port: 587,
    auth: {
          user: 'userEmailId',
          pass:  'password'
      },
    disableFileAccess: true,
    disableUrlAccess: false,
}));

console.log(smtpTransport)
// Message object
var mailOptions = {
    from:'sendersEmailId',
    cc:'ccEmailId',
    to: 'receiversEmailID',
    subject: 'emailSubject', //
    attachments: [
        {
            filename: "report.pdf",
            path:'/path/to/pdf',
            contentType: 'application/pdf' // optional, would be detected from the filename
        }
    ]
};

console.log('SMTP Configured');
smtpTransport.sendMail(mailOptions, function (err, info) {
    if (err) {
        console.log('error :',err)
    } else {
        // console.log("success from data send : ",response);
        console.log('response :',info)
        //smtpTransport.close();
    }
});
