const nodemailer = require('nodemailer')

async function sendEmail(to, subject, body, callback)
{
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'keershardul@gmail.com',
            pass: 'pqwc ppsb lwxy dvvn'
        },
    })
    const result = await transport.sendMail({
        from: 'keershardul@gmail.com',
        to,
        subject,
        html: body
    })

    console.log(`result: `, result)

    callback()
}

module.exports = {
    sendEmail
}
