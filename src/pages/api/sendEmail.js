import nodemailer from 'nodemailer';

export default async function sendEmail(req, res) {
    
        const { type, gmail ,date,time} = req.body;
        console.log(type,gmail,date,time);
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'yahiapigaro12345@gmail.com',
                pass: 'kkcr hpsk kmda jcdy' // Ensure this is secure. Do not commit this to a public repository.
            },
            secure : false,
        });

        // Define the email options
        let mailOptions = {
            from: 'yahia.slimani@univ-constantine2.dz',
            to: gmail, // the recipient email from the request
            subject: `Your Appointment is ${type === 'cancel' ? 'cancelled' : 'confirmed'}`, 
            text: `hello , we tell you that your appointment in ${date} at ${time} is ${type === 'cancel' ? 'cancelled' : 'confirmed'}` // Example text
        };

        try {
            // Send the email
            let info = await transporter.sendMail(mailOptions);
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email: ', error);
            res.status(500).json({ message: 'Error sending email', error: error.message });
        }
   
}
