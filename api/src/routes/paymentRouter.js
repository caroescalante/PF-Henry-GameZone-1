const express = require("express");
const router = express.Router();

const { PaymentController, sendEmailController } = require("../controllers/paymentController");
const PaymentService = require("../Services/paymentService");

const PaymentInstance = new PaymentController(new PaymentService());

// router.get("/", function (req, res, next) {
//   return res.json({
//     "/payment": "generates a payment link",
    
//   });
// });

router.post("/", function (req, res, next) {
  PaymentInstance.postPaymentLink(req, res);
});

router.post("/sendEmail", sendEmailController);

module.exports = router;