const mysql = require("mysql2");
const sequelize = require('./database');  // Sequelize instance
const SavingAccount = require('./models/savings_account'); 
const DepositAccount = require('./models/Deposit_account'); 
const Loan = require('./models/loan');
const Investment = require('./models/investment');
const CreditCard = require('./models/creditcard');
const Insurance = require('./models/insurance');
  
const express = require('express');
const app = express();

const savingAccountRoute = require('./routes/savingAccountRoute');
const depositAccountRoute = require('./routes/depositAccountRoute'); 
const loanAccountRoute = require('./routes/loanRoute');
const investmentRoute = require('./routes/investmentRoute');
const creditCardRoute= require('./routes/creditCardRoute');
const insuranceRoute= require('./routes/insuranceRoute');



// Middleware
app.use(express.json()); // To parse JSON bodies

// Use routes
app.use('/savings', savingAccountRoute);
app.use('/deposit', depositAccountRoute);
app.use('/loan', loanAccountRoute);
app.use('/investment', investmentRoute);
app.use('/credit',creditCardRoute);
app.use('/insurance', insuranceRoute )

// MySQL connection to check and create the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // Replace with your DB username
  password: 'charan16', // Replace with your DB password
});

// Connect to MySQL and create the database if it doesn't exist
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }

  // Create the database if it doesn't exist
  connection.query('CREATE DATABASE IF NOT EXISTS Findata', (err) => {
    if (err) {
      console.error('Error creating database:', err);
      return;
    }

    console.log('Database created or already exists');

    // After creating the database, connect with Sequelize and sync the models
    sequelize.authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');

        // Sync Sequelize models with the database
        sequelize.sync({ force: true })
          .then(() => {
            console.log('Database synced');

            // Now start the Express server
            app.listen(3000, () => {
              console.log('Server is running on http://localhost:3000');
            });
          })
          .catch((error) => {
            console.error('Error syncing database:', error);
          });
      })
      .catch((error) => {
        console.error('Error establishing Sequelize connection:', error);
      });
  });
});
