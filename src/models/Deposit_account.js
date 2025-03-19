const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); 

const DepositAccount = sequelize.define('DepositAccount', {
    customer_id: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        primaryKey: true,
        comment: 'Unique identifier for the customer' 
    },
    deposit_account_no: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true, 
        comment: 'Unique deposit account number' 
    },
    account_type: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        comment: 'Type of the deposit account (e.g., Fixed, Recurring, Savings)' 
    },
    bank_name: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        comment: 'Name of the bank where the deposit is held' 
    },
    current_balance: { 
        type: DataTypes.DECIMAL(15,2), 
        allowNull: false, 
        comment: 'Current balance in the deposit account' 
    },
    deposit_amount: { 
        type: DataTypes.DECIMAL(15,2), 
        allowNull: false, 
        comment: 'Total deposited amount in the account' 
    },
    deposit_interest: { 
        type: DataTypes.FLOAT, 
        allowNull: false, 
        comment: 'Interest rate applied to the deposit' 
    },
    account_open_date: { 
        type: DataTypes.DATE, 
        allowNull: false, 
        comment: 'Date when the deposit account was opened' 
    },
    current_date: { 
        type: DataTypes.DATE, 
        allowNull: false, 
        defaultValue: Sequelize.NOW,
        comment: 'System-generated current date' 
    },
    months_acct_active: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        comment: 'Number of months the account has been active',
       
    }
}, {
    tableName: 'deposit_accounts',  
    timestamps: true,               
    comment: 'Table storing deposit account details'
});

module.exports = DepositAccount;
