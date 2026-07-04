require("dotenv").config();

const nodemailer = require("nodemailer");

const cors = require("cors");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// IMPORTANT: lets backend read form data (JSON)
app.use(cors({
    origin: [
        "https://extraerror.github.io",
        "https://extraerror.github.io/The-Kanlungan-Website"
    ]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test route
app.get("/", (req, res) => {
    res.send("Backend is working 🚀");
});

// THIS is where contact form data will go
app.post("/contact", async (req, res) => {

    const { firstname, lastname, email, phone, countryCode, message } = req.body;

    if (!firstname || !lastname || !email || !phone || !message) {
        return res.status(400).send("All fields are required.");
    }

    try {

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Contact Form Submission",

text: `
First Name: ${firstname}
Last Name: ${lastname}
Email: ${email}
Phone: ${phone}
Message:
${message}
`
        });

        res.status(200).send("Email sent successfully!");

    } catch (error) {

        console.error(error);
        res.status(500).send("Failed to send email.");

    }
});

// This is where booking service data will go

app.post("/bookservice", async (req, res) => {


    const { service, firstname, lastname, street, city, province, zipcode, email, phone, countryCode, message } = req.body;

    if (!service || !firstname || !lastname || !street || !city || !province || !zipcode || !email || !phone || !countryCode ||  !message) {
        return res.status(400).send("All fields are required.");
    }

    try {

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Contact Form Submission",

text: `
Service: ${service}
First Name: ${firstname}
Last Name: ${lastname}
Street: ${street}
City: ${city}
Province: ${province}
Zip Code: ${zipcode}
Email: ${email}
Country Code: ${countryCode}
Phone Number: ${phone}
Message:
${message}
    `
        });

        res.status(200).send("Email sent successfully!");

    } catch (error) {

        console.error(error);
        res.status(500).send("Failed to send email.");

    }
    
});


// google mail transporter

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

