const express = require('express');
const router = express.Router();
const CreditCard = require('../models/creditcard');  // Import the CreditCard model

// POST request to create a new CreditCard record
router.post('/addCreditcard', async (req, res) => {
    try {
        const {
            CustomerID,
            CreditAccountNo,
            CreditCardNo,
            AccountType,
            IssuingBankName,
            TotalCreditLimit,
            TotalOutstanding
        } = req.body;

        // Create a new credit card record
        const newCreditCard = await CreditCard.create({
            CustomerID,
            CreditAccountNo,
            CreditCardNo,
            AccountType,
            IssuingBankName,
            TotalCreditLimit,
            TotalOutstanding
        });

        return res.status(201).json({
            message: 'Credit card record created successfully!',
            data: newCreditCard
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error creating credit card record',
            error: error.message
        });
    }
});

// GET request to fetch all CreditCard records (optional)
router.get('/allCreditCards', async (req, res) => {
    try {
        const creditCards = await CreditCard.findAll();
        return res.status(200).json({
            message: 'Fetched all credit card records successfully!',
            data: creditCards
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error fetching credit card records',
            error: error.message
        });
    }
});

module.exports = router;
