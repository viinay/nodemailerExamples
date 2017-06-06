 var nodemailer = require('nodemailer'); //version 0.7.1

 var transporter = nodemailer.createTransport('direct', {
     debug: false,
 })

 console.log(path.resolve(__dirname, '../public/report_pdf/'+attachment+'.pdf'))
 var mailOptions = {
     from:fromEmail,  
     to: toEmail,  
     subject: 'test',  
     text: 'test-text',  
     html: '<b>hello</b>',  
     attachments: [
         {
             filename: "report.pdf",
             filePath: path.resolve(__dirname, '../public/report_pdf/'+attachment+'.pdf'),
             contents: ''
         }
     ]
 }

 transporter.sendMail(mailOptions, function (error, info) {
     if(error){
         console.log('mailer error',error)
         callback(error,null)
     }else{
         console.log('mailer success',info.message)
         callback(null,info.message)
     }
 })
