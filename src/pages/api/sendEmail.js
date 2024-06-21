import nodemailer from 'nodemailer';

export default async function sendEmail(req, res) {
    
        const { type, gmail ,date,time,name} = req.body;
        console.log(type,gmail,date,time);
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'yahiapigaro12345@gmail.com',
                pass: 'kkcr hpsk kmda jcdy' // Ensure this is secure. Do not commit this to a public repository.
            },
            secure : false,
        });

        const emailContent = `
        <h1>Appointment Informations</h1>
        <p>
            Hello ${name},<br />
            We are informing you that your appointment on <b>${date}</b> at <b>${time}</b> is 
            <b style="color: ${type === 'cancel' ? 'red' : 'green'};">
                ${type === 'cancel' ? 'cancelled' : 'confirmed'}
            </b>.
            <br/>
            cordialement,
        </p>
    `;

    let mailOptions = {
        from: 'yahia.slimani@univ-constantine2.dz',
        to: gmail, 
        subject: 'Appointment Status', // This is the subject line
        html: emailContent // Use the constructed HTML content
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
