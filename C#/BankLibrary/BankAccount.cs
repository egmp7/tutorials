using System;
using System.Collections.Generic;
using System.Text;
// Class tutorial

namespace BankLibrary
{
    public class BankAccount
    {
        // properties
        public string Number { get; }
        public string Owner { get; }
        public decimal Balance {
            get
            {
                // get balance from all transactions
                decimal balance = 0;

                foreach (var t in allTransactions)
                {
                    balance += t.Amount;
                }

                return balance;
            }
        }

        // static property
        private static int accountNumberSeed = 1234567890;

        // create a list of transactions
        private List<Transaction> allTransactions = new List<Transaction>();

        // constructor
        public BankAccount(string name, decimal initialBalance)
        {
            // set owner name
            this.Owner = name;
            // create account number
            this.Number = accountNumberSeed.ToString();

            accountNumberSeed++;

            // make initial deposit
            MakeDeposit(initialBalance, DateTime.Now, "Initial deposit");
        }

        // methods
        public void MakeDeposit(decimal amount, DateTime date,string note)
        /** Adds a deposit to the transaction list*/
        {
            if (amount <= 0)
            {
                // exceptions
                throw new ArgumentOutOfRangeException(nameof(amount), "Amount of deposit must be positive");
            }
            var deposit = new Transaction(amount, date, note);
            allTransactions.Add(deposit);

        }

        public void MakeWithdrawal(decimal amount, DateTime date, string note)
        /** Adds a withdrawal to the transaction list*/

        {
            if (amount <= 0)
            {
                // exceptions
                throw new ArgumentOutOfRangeException(nameof(amount), "Amount of withdrawal must be positive");
            }
            if (Balance - amount < 0)
            {
                // exceptions
                throw new InvalidOperationException("No sufficient funds for this withdrawal");
            }
            var withdrawal = new Transaction(-amount, date, note);
            allTransactions.Add(withdrawal);
        }

        public string GetAccountHistory()
        /** Return a string with the transaction list*/
        {
            var report = new StringBuilder();

            report.AppendLine("Date\t\tAmount\tNote");
            foreach(var item in allTransactions)
            {
                report.AppendLine($"{item.Date.ToShortDateString()}\t{item.AmountForHumans}\t{item.Notes}");
            }

            return report.ToString();

        }
    }
}

