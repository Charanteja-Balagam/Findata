const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); 

const Loan = sequelize.define('Loan', {
    CustomerID: { 
        type: DataTypes.STRING,  
        allowNull: false,
        comment: 'Unique identifier for the customer'
    },
    LoanAccountNo: { 
        type: DataTypes.STRING,  
        allowNull: false,
        unique: true,
        comment: 'Unique Loan Account Number'
    },
    AccountType: { 
        type: DataTypes.STRING,  
        allowNull: false,
        comment: 'Type of loan account'
    },
    Bank_FIN_Name: { 
        type: DataTypes.STRING,  
        allowNull: false,
        comment: 'Bank or Financial Institution name'
    },
    PrincipleLoanTaken: { 
        type: DataTypes.DECIMAL(15,2),  
        allowNull: false,
        comment: 'Total loan amount taken'
    },
    Tenure: { 
        type: DataTypes.INTEGER,  
        allowNull: false,
        comment: 'Loan tenure in months'
    },
    EMI_Interest: { 
        type: DataTypes.DECIMAL(10,2),  
        allowNull: false,
        comment: 'Monthly EMI or Interest Rate'
    },
    LoanTakenDate: { 
        type: DataTypes.DATE,  
        allowNull: false,
        comment: 'Date when the loan was taken'
    },
    ROI: { 
        type: DataTypes.FLOAT,  
        allowNull: false,
        comment: 'Rate of Interest'
    },
    OutstandingPrinciple: { 
        type: DataTypes.DECIMAL(15,2),  
        allowNull: false,
        comment: 'Remaining Loan Amount to be paid'
    },
    CurrentDate: { 
        type: DataTypes.DATE,  
        allowNull: false,
        defaultValue: Sequelize.NOW,
        comment: 'Current system date'
    },
    EMIPaid: { 
        type: DataTypes.DECIMAL(10,2),  
        allowNull: false,
        comment: 'Total EMI paid so far'
    }
}, {
    tableName: 'loan', 
    timestamps: false,  
    comment: 'Stores loan details for customers'
});

module.exports = Loan;
