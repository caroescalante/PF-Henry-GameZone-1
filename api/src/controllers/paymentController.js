const nodemailer = require("nodemailer");
const { EMAIL_USER, EMAIL_PASS } = process.env;

class PaymentController {
  constructor(subscriptionService) {
    this.subscriptionService = subscriptionService;
  }

  async postPaymentLink(req, res) {
    try {
      const payment = await this.subscriptionService.createPayment(req.body);

      return res.json(payment);
    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .json({ error: true, msg: "Failed to create payment" });
    }
  }

}

const sendEmailController = async () => {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: 'Thank you for shopping at Henry Game Zone',
      to: "bar@example.com, baz@example.com",
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    });
};


//fnchklxlyvvpjjex
module.exports = {
  PaymentController,
  sendEmailController,
};