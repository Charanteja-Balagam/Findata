const express = require('express');
const router = express.Router();
const Investment = require('../models/investment');  // Import the Investment model

// POST request to create a new Investment record
router.post('/createInvestment', async (req, res) => {
    try {
        const {
            CustomerID,
            DematAccountNo,
            AccountType,
            Bank_FIN_TraderName,
            Stock_MF_Name,
            Units,
            StartDate,
            AvgNAV,
            CurrentNAV,
            InvestedAmt,
            CurrentAmt
        } = req.body;

        // Create a new investment record
        const newInvestment = await Investment.create({
            CustomerID,
            DematAccountNo,
            AccountType,
            Bank_FIN_TraderName,
            Stock_MF_Name,
            Units,
            StartDate,
            AvgNAV,
            CurrentNAV,
            InvestedAmt,
            CurrentAmt
        });

        return res.status(201).json({
            message: 'Investment record created successfully!',
            data: newInvestment
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error creating investment record',
            error: error.message
        });
    }
});

// Get request to fetch all investments (optional)
router.get('/getAllInvestments', async (req, res) => {
    try {
        const investments = await Investment.findAll();
        return res.status(200).json({
            message: 'Fetched all investment records successfully!',
            data: investments
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error fetching investment records',
            error: error.message
        });
    }
});

module.exports = router;
