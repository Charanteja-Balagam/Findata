const express = require('express');
const router = express.Router();
const Loan  = require('../models/loan');  

// POST: Create a new Loan
router.post('/createLoan', async (req, res) => {
    try {
        const {
            CustomerID,
            LoanAccountNo,
            AccountType,
            Bank_FIN_Name,
            PrincipleLoanTaken,
            Tenure,
            EMI_Interest,
            LoanTakenDate,
            ROI,
            OutstandingPrinciple,
            EMIPaid
        } = req.body;

        const newLoan = await Loan.create({
            CustomerID,
            LoanAccountNo,
            AccountType,
            Bank_FIN_Name,
            PrincipleLoanTaken,
            Tenure,
            EMI_Interest,
            LoanTakenDate,
            ROI,
            OutstandingPrinciple,
            EMIPaid
        });

        res.status(201).json(newLoan);  // Respond with the newly created loan record
    } catch (error) {
        console.error('Error creating loan:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET: Fetch all loans
router.get('/getLoanAccounts', async (req, res) => {
    try {
        const loans = await Loan.findAll();  // Get all loan records
        res.status(200).json(loans);  // Respond with the list of loans
    } catch (error) {
        console.error('Error fetching loans:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET: Fetch loan by LoanAccountNo
router.get('/:LoanAccountNo', async (req, res) => {
    try {
        const loan = await Loan.findOne({
            where: { LoanAccountNo: req.params.LoanAccountNo }
        });

        if (loan) {
            res.status(200).json(loan);  // Respond with the found loan
        } else {
            res.status(404).json({ message: 'Loan not found' });
        }
    } catch (error) {
        console.error('Error fetching loan:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT: Update a Loan by LoanAccountNo
router.put('/:LoanAccountNo', async (req, res) => {
    try {
        const { LoanAccountNo } = req.params;
        const {
            CustomerID,
            AccountType,
            Bank_FIN_Name,
            PrincipleLoanTaken,
            Tenure,
            EMI_Interest,
            LoanTakenDate,
            ROI,
            OutstandingPrinciple,
            EMIPaid
        } = req.body;

        const loan = await Loan.findOne({
            where: { LoanAccountNo }
        });

        if (loan) {
            await loan.update({
                CustomerID,
                AccountType,
                Bank_FIN_Name,
                PrincipleLoanTaken,
                Tenure,
                EMI_Interest,
                LoanTakenDate,
                ROI,
                OutstandingPrinciple,
                EMIPaid
            });

            res.status(200).json(loan);  // Respond with the updated loan
        } else {
            res.status(404).json({ message: 'Loan not found' });
        }
    } catch (error) {
        console.error('Error updating loan:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE: Delete loan by LoanAccountNo
router.delete('/:LoanAccountNo', async (req, res) => {
    try {
        const loan = await Loan.findOne({
            where: { LoanAccountNo: req.params.LoanAccountNo }
        });

        if (loan) {
            await loan.destroy();  // Delete the loan
            res.status(204).send();  // Respond with no content
        } else {
            res.status(404).json({ message: 'Loan not found' });
        }
    } catch (error) {
        console.error('Error deleting loan:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
