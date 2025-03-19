const express = require('express');
const router = express.Router();
const DepositAccount = require('../models/Deposit_account'); // DepositAccount model

// POST route to create a new deposit account
router.post('/depositAccount', async (req, res) => {
    try {
        const { customer_id, deposit_account_no, account_type, bank_name, current_balance, deposit_amount, deposit_interest, account_open_date } = req.body;
        
        // Calculate months_acct_active
        const accountOpenDate = new Date(account_open_date);
        const currentDate = new Date();
        const monthsDifference = (currentDate.getFullYear() - accountOpenDate.getFullYear()) * 12 + currentDate.getMonth() - accountOpenDate.getMonth();
        const months_acct_active = monthsDifference < 0 ? 0 : monthsDifference;

        // Create a new deposit account
        const newDepositAccount = await DepositAccount.create({
            customer_id,
            deposit_account_no,
            account_type,
            bank_name,
            current_balance,
            deposit_amount,
            deposit_interest,
            account_open_date,
            current_date: currentDate, // Current date will be system generated
            months_acct_active
        });

        res.status(201).json(newDepositAccount); // Return the created deposit account
    } catch (error) {
        console.error('Error creating deposit account:', error);
        res.status(500).json({ message: 'Error creating deposit account', error });
    }
});

// GET route to fetch all deposit accounts
router.get('/depositAccountslist', async (req, res) => {
    try {
        const depositAccounts = await DepositAccount.findAll();
        res.status(200).json(depositAccounts); // Return all deposit accounts
    } catch (error) {
        console.error('Error fetching deposit accounts:', error);
        res.status(500).json({ message: 'Error fetching deposit accounts', error });
    }
});

// GET route to fetch a deposit account by ID or deposit_account_no
router.get('/:deposit_account_no', async (req, res) => {
    try {
        const { deposit_account_no } = req.params;
        const depositAccount = await DepositAccount.findOne({ where: { deposit_account_no } });

        if (!depositAccount) {
            return res.status(404).json({ message: 'Deposit account not found' });
        }

        res.status(200).json(depositAccount); // Return the found deposit account
    } catch (error) {
        console.error('Error fetching deposit account:', error);
        res.status(500).json({ message: 'Error fetching deposit account', error });
    }
});

// PUT route to update a deposit account
router.put('/:deposit_account_no', async (req, res) => {
    try {
        const { deposit_account_no } = req.params;
        const { customer_id, account_type, bank_name, current_balance, deposit_amount, deposit_interest, account_open_date } = req.body;

        const depositAccount = await DepositAccount.findOne({ where: { deposit_account_no } });
        
        if (!depositAccount) {
            return res.status(404).json({ message: 'Deposit account not found' });
        }

        // Update the deposit account with new data
        await depositAccount.update({
            customer_id,
            account_type,
            bank_name,
            current_balance,
            deposit_amount,
            deposit_interest,
            account_open_date,
        });

        res.status(200).json(depositAccount); // Return the updated deposit account
    } catch (error) {
        console.error('Error updating deposit account:', error);
        res.status(500).json({ message: 'Error updating deposit account', error });
    }
});

// DELETE route to delete a deposit account
router.delete('/:deposit_account_no', async (req, res) => {
    try {
        const { deposit_account_no } = req.params;
        const depositAccount = await DepositAccount.findOne({ where: { deposit_account_no } });

        if (!depositAccount) {
            return res.status(404).json({ message: 'Deposit account not found' });
        }

        // Delete the deposit account
        await depositAccount.destroy();

        res.status(200).json({ message: 'Deposit account deleted successfully' });
    } catch (error) {
        console.error('Error deleting deposit account:', error);
        res.status(500).json({ message: 'Error deleting deposit account', error });
    }
});

module.exports = router;
