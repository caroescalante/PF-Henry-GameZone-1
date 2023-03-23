const axios = require("axios");
const { name } = require("../app");
const { gameByIdHandler } = require("../handlers/videogamesHandlers");

class PaymentService {
  async createPayment(datos) {
    const url = "https://api.mercadopago.com/checkout/preferences";
    console.log(datos)
    const body = {
      payer_email: "test_user_36100631@testuser.com",
      items: datos.items,
      back_urls: {
        failure: "http://localhost:5173/failure",
        pending: "/pending",
        success: "http://localhost:5173/"
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