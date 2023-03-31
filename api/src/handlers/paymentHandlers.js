const nodemailer = require("nodemailer");
const { EMAIL_USER, EMAIL_PASS } = process.env;
const { randomCode } = require("../controllers/paymentController");
// const logo = require("../../../client/src/Image/logo.png");
// const { logo } = require("../../../client/src/Image/logo.png");
// import logo from "../../../client/src/Image/logo.png";

const sendMailHandler = async (req, res) => {
  const { email } = req.body;

  try {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS,
        },
      });

      const code = randomCode();

      await transporter.sendMail({
        from: 'Henry Game Zone',
        to: email,
        subject: "Thank you for shopping at Henry Game Zone",
        attachments: [{
          filename: "logo.png",
          path: __dirname + "/logo.png",
          cid: "logo",
        }],
        html: `<div>
          <h1>Thank you for shopping at Henry Game Zone</h1>
          <h2>His game code is:</h2>
          <h3>${code}</h3>
          <img src="cid:logo" />
          <p>© 2023 Copyright: Henry-GameZone - All rights reserved.</p>        
        </div>`
      });

      return res.status(200).json({ message: "email sent successfully" });
  } catch (error) {
      return res.status(400).json({ message: error.message });
  };
};

module.exports = { 
  sendMailHandler 
};