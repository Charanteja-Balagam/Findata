const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');  // Import sequelize instance

const SavingAccount = sequelize.define('SavingAccount', {
    // CustomerID: Unique identifier for the customer
    CustomerID: { 
        type: DataTypes.STRING,  // Data Type: STRING
        unique: true, 
        allowNull: false,
        // Field Metadata
        metadata: {
            description: 'Unique identifier for the customer',
            dataType: 'STRING',
            dataLength: 'Variable length',
            sampleValue: 'CUST12345',
            derived: false, 
            keys: 'Primary Key'
        }
    },
    
    // Savings AccountNo: Unique savings account number
    SavingsAccountNo: {
        type: DataTypes.STRING(20),  // Data Type: STRING(20)
        allowNull: false,
        unique: true,
        // Field Metadata
        metadata: {
            description: 'Unique savings account number',
            dataType: 'STRING(20)',
            dataLength: '20 characters',
            sampleValue: 'SA1234567890',
            derived: false, 
            keys: 'Primary Key'
        }
    },
    
    // AccountType: Type of the account (e.g., Savings, Checking)
    AccountType: {
        type: DataTypes.STRING(50),  // Data Type: STRING(50)
        allowNull: false,
        // Field Metadata
        metadata: {
            description: 'Type of account (e.g., Savings, Checking)',
            dataType: 'STRING(50)',
            dataLength: '50 characters',
            sampleValue: 'Savings',
            derived: false, 
            keys: 'None'
        }
    },
    
    // BankName: The bank where the account is held
    BankName: {
        type: DataTypes.STRING(100),  // Data Type: STRING(100)
        allowNull: false,
        // Field Metadata
        metadata: {
            description: 'The bank where the account is held',
            dataType: 'STRING(100)',
            dataLength: '100 characters',
            sampleValue: 'ABC Bank',
            derived: false, 
            keys: 'None'
        }
    },
    
    // DebitCardNo: Debit card number associated with the account
    DebitCardNo: {
        type: DataTypes.STRING(16),  // Data Type: STRING(16)
        allowNull: false,
        // Field Metadata
        metadata: {
            description: 'Debit card number associated with the account',
            dataType: 'STRING(16)',
            dataLength: '16 characters',
            sampleValue: '1234567890123456',
            derived: false, 
            keys: 'None'
        }
    },
    
    // CurrentBal: Current balance in the savings account
    CurrentBal: {
        type: DataTypes.DECIMAL(10, 2),  // Data Type: DECIMAL(10,2)
        allowNull: false,
        // Field Metadata
        metadata: {
            description: 'Current balance in the savings account',
            dataType: 'DECIMAL(10, 2)',
            dataLength: '10 digits total, 2 decimals',
            sampleValue: '1000.50',
            derived: false, 
            keys: 'None'
        }
    },
    
    // AccountOpenDate: The date when the account was opened
    AccountOpenDate: {
        type: DataTypes.DATE,  // Data Type: DATE
        allowNull: false,
        // Field Metadata
        metadata: {
            description: 'The date when the account was opened',
            dataType: 'DATE',
            dataLength: 'YYYY-MM-DD format',
            sampleValue: '2020-01-01',
            derived: false, 
            keys: 'None'
        }
    },
    
    // CurrentDate: Current date used for derived calculations
    CurrentDate: {
        type: DataTypes.DATE,  // Data Type: DATE
        allowNull: true,
        defaultValue: Sequelize.NOW,  // Defaults to current date if not provided
        // Field Metadata
        metadata: {
            description: 'Current date used for derived calculations',
            dataType: 'DATE',
            dataLength: 'YYYY-MM-DD format',
            sampleValue: '2025-03-18',
            derived: false, 
            keys: 'None'
        }
    },
    
    // Months_ACCT_Active: Derived field for the number of months the account has been active
    Months_ACCT_Active: {
        type: DataTypes.INTEGER,  // Data Type: INTEGER
        allowNull: true,
       
        // Field Metadata
        metadata: {
            description: 'The number of months the account has been active, derived from AccountOpenDate',
            dataType: 'INTEGER',
            dataLength: 'N/A',
            sampleValue: '24',
            derived: true,  // It's a derived field
            keys: 'None'
        }
    }
}, {
    tableName: 'saving_accounts',  // Explicit table name
    timestamps: true  // Automatically include createdAt and updatedAt fields
});



module.exports = SavingAccount;
