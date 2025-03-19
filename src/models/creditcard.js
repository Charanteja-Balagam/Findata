const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); 

const CreditCard = sequelize.define('CreditCard', {
    CustomerID: { 
        type: DataTypes.STRING,  
        allowNull: false,
        comment: 'Unique identifier for the customer'
    },
    CreditAccountNo: { 
        type: DataTypes.STRING,  
        allowNull: false,
        unique: true,
        comment: 'Unique Credit Account Number'
    },
    CreditCardNo: { 
        type: DataTypes.STRING,  
        allowNull: false,
        unique: true,
        comment: 'Credit Card Number'
    },
    AccountType: { 
        type: DataTypes.STRING,  
        allowNull: false,
        comment: 'Type of Credit Card Account'
    },
    IssuingBankName: { 
        type: DataTypes.STRING,  
        allowNull: false,
        comment: 'Bank that issued the credit card'
    },
    TotalCreditLimit: { 
        type: DataTypes.DECIMAL(10,2),  
        allowNull: false,
        comment: 'Total credit limit available on the card'
    },
    TotalOutstanding: { 
        type: DataTypes.DECIMAL(10,2),  
        allowNull: false,
        comment: 'Total outstanding amount on the card'
    }
}, {
    tableName: 'credit_cards', 
    timestamps: false,  
    comment: 'Stores customer credit card details'
});

module.exports = CreditCard;
