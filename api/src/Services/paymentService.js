const axios = require("axios");
const { gameByIdHandler } = require("../handlers/videogamesHandlers");
const {name} = require ("../controllers/paymentController")


class PaymentService {
  async createPayment(datos) {
    const url = "https://api.mercadopago.com/checkout/preferences";
    console.log(datos)
    const body = {
      payer_email: "TEST_USER_132757737",
      items: datos.items,
      back_urls: {
        failure: "https://pf-henry-game-zone-1.vercel.app/paymentfailure",
        pending: "https://pf-henry-game-zone-1.vercel.app/pending",
        success: "https://pf-henry-game-zone-1.vercel.app/paymentsuccess"
      }
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    return payment.data;
  }
}
  module.exports = PaymentService;
