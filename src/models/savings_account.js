const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');  // Import sequelize instance

const SavingAccount = sequelize.define('SavingAccount', {
   
    CustomerID: { 
        type: DataTypes.STRING,  
        unique: true, 
        allowNull: false,
        
        metadata: {
            description: 'Unique identifier for the customer',
            dataType: 'STRING',
            dataLength: 'Variable length',
            sampleValue: 'CUST12345',
            derived: false, 
            keys: 'Primary Key'
        }
    },
    
    
    SavingsAccountNo: {
        type: DataTypes.STRING(20), 
        allowNull: false,
        unique: true,
       
        metadata: {
            description: 'Unique savings account number',
            dataType: 'STRING(20)',
            dataLength: '20 characters',
            sampleValue: 'SA1234567890',
            derived: false, 
            keys: 'Primary Key'
        }
    },
    
    
    AccountType: {
        type: DataTypes.STRING(50), 
        allowNull: false,
       
        metadata: {
            description: 'Type of account (e.g., Savings, Checking)',
            dataType: 'STRING(50)',
            dataLength: '50 characters',
            sampleValue: 'Savings',
            derived: false, 
            keys: 'None'
        }
    },
    
    
    BankName: {
        type: DataTypes.STRING(100),  
        allowNull: false,
        
        metadata: {
            description: 'The bank where the account is held',
            dataType: 'STRING(100)',
            dataLength: '100 characters',
            sampleValue: 'ABC Bank',
            derived: false, 
            keys: 'None'
        }
    },
    
    DebitCardNo: {
        type: DataTypes.STRING(16),  
        allowNull: false,
        
        metadata: {
            description: 'Debit card number associated with the account',
            dataType: 'STRING(16)',
            dataLength: '16 characters',
            sampleValue: '1234567890123456',
            derived: false, 
            keys: 'None'
        }
    },
    
    CurrentBal: {
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: false,
        
        metadata: {
            description: 'Current balance in the savings account',
            dataType: 'DECIMAL(10, 2)',
            dataLength: '10 digits total, 2 decimals',
            sampleValue: '1000.50',
            derived: false, 
            keys: 'None'
        }
    },
    
    AccountOpenDate: {
        type: DataTypes.DATE, 
        allowNull: false,
       
        metadata: {
            description: 'The date when the account was opened',
            dataType: 'DATE',
            dataLength: 'YYYY-MM-DD format',
            sampleValue: '2020-01-01',
            derived: false, 
            keys: 'None'
        }
    },
    
    CurrentDate: {
        type: DataTypes.DATE,  
        allowNull: true,
        defaultValue: Sequelize.NOW,  
        metadata: {
            description: 'Current date used for derived calculations',
            dataType: 'DATE',
            dataLength: 'YYYY-MM-DD format',
            sampleValue: '2025-03-18',
            derived: false, 
            keys: 'None'
        }
    },
    
    Months_ACCT_Active: {
        type: DataTypes.INTEGER,  
        allowNull: true,
       
        metadata: {
            description: 'The number of months the account has been active, derived from AccountOpenDate',
            dataType: 'INTEGER',
            dataLength: 'N/A',
            sampleValue: '24',
            derived: true,  
            keys: 'None'
        }
    }
}, {
    tableName: 'saving_accounts',  
    timestamps: true  
});



module.exports = SavingAccount;
