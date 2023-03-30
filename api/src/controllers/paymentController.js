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

const randomCode = () => {
  const longitud = 20;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let random = "";
  for (let i = 0; i < longitud; i++) {
    random += characters.charAt(Math.floor(Math.random() * characters.length));
  };
  return random;
};

//fnchklxlyvvpjjex
module.exports = {
  PaymentController,
  randomCode,
};