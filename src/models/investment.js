const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); 

const Investment = sequelize.define('Investment', {
    CustomerID: { 
        type: DataTypes.STRING,  
        allowNull: false,
        comment: 'Unique identifier for the customer'
    },
    DematAccountNo: { 
        type: DataTypes.STRING,  
        allowNull: false,
        unique: true,
        comment: 'Unique Demat Account Number'
    },
    AccountType: { 
        type: DataTypes.STRING,  
        allowNull: false,
        comment: 'Type of Investment Account'
    },
    Bank_FIN_TraderName: { 
        type: DataTypes.STRING,  
        allowNull: false,
        comment: 'Bank or Financial Institution Trader Name'
    },
    Stock_MF_Name: { 
        type: DataTypes.STRING,  
        allowNull: false,
        comment: 'Stock or Mutual Fund Name'
    },
    Units: { 
        type: DataTypes.INTEGER,  
        allowNull: false,
        comment: 'Number of units purchased'
    },
    StartDate: { 
        type: DataTypes.DATE,  
        allowNull: false,
        comment: 'Investment start date'
    },
    AvgNAV: { 
        type: DataTypes.DECIMAL(10,2),  
        allowNull: false,
        comment: 'Average NAV at the time of purchase'
    },
    CurrentNAV: { 
        type: DataTypes.DECIMAL(10,2),  
        allowNull: false,
        comment: 'Current NAV of the investment'
    },
    InvestedAmt: { 
        type: DataTypes.DECIMAL(15,2),  
        allowNull: false,
        comment: 'Total invested amount'
    },
    CurrentAmt: { 
        type: DataTypes.DECIMAL(15,2),  
        allowNull: false,
        comment: 'Current market value of investment'
    }
}, {
    tableName: 'investment', // Explicit table name
    timestamps: false,  // Disable createdAt and updatedAt columns
    comment: 'Stores investment details for customers'
});

module.exports = Investment;
