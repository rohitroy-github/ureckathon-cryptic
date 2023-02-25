const express = require("express");
const Stripe = require("stripe");

require("dotenv").config(); 
const stripe = Stripe(process.env.STRIPE_KEY)
const router = express.Router(); 
 
router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: req.body.type,
            },
            unit_amount: req.body.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/payment-successful`,
      cancel_url: `${process.env.CLIENT_URL}/membership`,
    });
  
    res.send({ url: session.url});
  });

  module.exports = router; 