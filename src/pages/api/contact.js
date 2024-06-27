import nodemailer from 'nodemailer';


export default async function handler(req, res) {
    if (req.method === "POST"){
        const data = req.body;
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'yahiapigaro12345@gmail.com',
                pass: 'kkcr hpsk kmda jcdy' 
            },
            secure : false,
        });

        const emailContent = `
        <h2 style="color:green"> You Have A New Contact Message from :</h1>
        <h4> ${data.email} </h4>
        <h4> Named ${data.name} </h4>
        <p>
            ${data.message}
        </p>
        <br/>
        <hr/>
        <p>
        This Message Was Generated Automatically
        </p>
    `;
    let mailOptions = {
        from: data.email,
        to: 'mamouni0309@gmail.com', 
        subject: data.subject, // This is the subject line
        html: emailContent // Use the constructed HTML content
    };
    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email: ', error.message);
        res.status(500).json({ message: 'Error sending email', error: error.message });
    }
    }
    else{
        return res.status(400).json({message:"Bad Request"})
    }
  }
  