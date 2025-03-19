const express = require('express');
const router = express.Router();
const Insurance = require('../models/insurance');  // Import the Insurance model

// POST request to create a new Insurance record
router.post('/addInsuranceRecord', async (req, res) => {
    try {
        const {
            CustomerID,
            AccountType,
            InsuranceAccountNo,
            InsurerName,
            TypeOfInsurance,
            InsuranceCoverage,
            MonthlyPayment,
            YearlyPayment
        } = req.body;

        // Create a new insurance record
        const newInsurance = await Insurance.create({
            CustomerID,
            AccountType,
            InsuranceAccountNo,
            InsurerName,
            TypeOfInsurance,
            InsuranceCoverage,
            MonthlyPayment,
            YearlyPayment
        });

        return res.status(201).json({
            message: 'Insurance record created successfully!',
            data: newInsurance
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error creating insurance record',
            error: error.message
        });
    }
});

// GET request to fetch all Insurance records (optional)
router.get('/getAllRecords', async (req, res) => {
    try {
        const insuranceRecords = await Insurance.findAll();
        return res.status(200).json({
            message: 'Fetched all insurance records successfully!',
            data: insuranceRecords
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error fetching insurance records',
            error: error.message
        });
    }
});

module.exports = router;
