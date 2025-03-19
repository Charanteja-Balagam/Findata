const express = require('express');
const router = express.Router(); // Use express.Router()

const SavingAccount = require('../models/savings_account'); // Import your model

// GET request to fetch all saving accounts
router.get('/getaccount', async (req, res) => {
    try {
        const savingAccounts = await SavingAccount.findAll(); // Fetch all records from the saving_account table
        res.status(200).json(savingAccounts);  // Send the records as a JSON response
    } catch (error) {
        console.error('Error fetching saving accounts:', error);
        res.status(500).json({ message: 'Error fetching saving accounts', error });
    }
});

// POST route to add a Saving Account
router.post('/saving-account', async (req, res) => {
    try {
        const {
            CustomerID,
            SavingsAccountNo,
            AccountType,
            BankName,
            DebitCardNo,
            CurrentBal,
            AccountOpenDate,
        } = req.body;

        // Calculate Months_ACCT_Active based on AccountOpenDate and current date
        const accountOpenDate = new Date(AccountOpenDate);
        const currentDate = new Date();
        const monthsDifference = (currentDate.getFullYear() - accountOpenDate.getFullYear()) * 12 + currentDate.getMonth() - accountOpenDate.getMonth();
        const monthsACCTActive = monthsDifference < 0 ? 0 : monthsDifference;

        // Create a new saving account with the calculated Months_ACCT_Active
        const newAccount = await SavingAccount.create({
            CustomerID,
            SavingsAccountNo,
            AccountType,
            BankName,
            DebitCardNo,
            CurrentBal,
            AccountOpenDate,
            currentDate : currentDate,
            Months_ACCT_Active: monthsACCTActive,
        });

        res.status(201).json(newAccount);
    } catch (error) {
        console.error('Error creating saving account:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;  // Export the router instance
