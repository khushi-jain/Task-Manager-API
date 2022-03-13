const sgMail=require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to: email,
        from:'2020jainkhushi@gmail.com',
        subject:'finall',
        text:`welcome to th eapp,${name}. let me know how ypu get along`,
      //  html:''
   
    })
}

const sendCancellationEmail=(email,name)=>{
    sgMail.send({
        to: email,
        from:'2020jainkhushi@gmail.com',
        subject:'sorry the req is cancelled',
        text:` hi your user account has been cancelled,${name}. let me know how ypu get along`,
      //  html:''
   
    })
}
module.exports={
    sendWelcomeEmail,
    sendCancellationEmail
}