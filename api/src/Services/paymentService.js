const axios = require("axios");
const { name } = require("../app");
const { gameByIdHandler } = require("../handlers/videogamesHandlers");

class PaymentService {
  async createPayment() {
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email: "test_user_36100631@testuser.com",
      items: [
        {
          title: game.name,
        //   description: "Dummy description",
        //   picture_url: "http://www.myapp.com/myimage.jpg",
        //   category_id: "category123",
          quantity: 1,
          unit_price: price
        }
      ],
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "/success"
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