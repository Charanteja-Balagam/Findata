const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); 

const Insurance = sequelize.define('Insurance', {
    CustomerID: { 
        type: DataTypes.STRING,  
        allowNull: false,
        comment: 'Unique identifier for the customer'
    },
    AccountType: { 
        type: DataTypes.STRING,  
        allowNull: false,
        comment: 'Type of insurance account'
    },
    InsuranceAccountNo: { 
        type: DataTypes.STRING,  
        allowNull: false,
        unique: true,
        comment: 'Unique Insurance Account Number'
    },
    InsurerName: { 
        type: DataTypes.STRING,  
        allowNull: false,
        comment: 'Name of the insurance provider'
    },
    TypeOfInsurance: { 
        type: DataTypes.STRING,  
        allowNull: false,
        comment: 'Type of insurance (e.g., Health, Life, Auto)'
    },
    InsuranceCoverage: { 
        type: DataTypes.DECIMAL(15,2),  
        allowNull: false,
        comment: 'Total insurance coverage amount'
    },
    MonthlyPayment: { 
        type: DataTypes.DECIMAL(10,2),  
        allowNull: false,
        comment: 'Monthly premium payment'
    },
    YearlyPayment: { 
        type: DataTypes.DECIMAL(10,2),  
        allowNull: false,
        comment: 'Yearly premium payment'
    }
}, {
    tableName: 'insurance', 
    timestamps: false,  
    comment: 'Stores customer insurance details'
});

module.exports = Insurance;
