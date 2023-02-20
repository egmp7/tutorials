using System;
using BankLibrary;

namespace MyBank
{
    class Program
    {
        static void Main(string[] args)
        {

            var account = new BankAccount("Erick", 200);

            Console.WriteLine($"{account.Owner} has {account.Balance} USD, Account number: {account.Number}");
            
            account.MakeWithdrawal(5,DateTime.Now,"Shawarma");
            account.MakeWithdrawal(100, DateTime.Now, "Putas");
            account.MakeWithdrawal(2, DateTime.Now, "Cola");
            account.MakeWithdrawal(1, DateTime.Now, "Agua");

            Console.WriteLine(account.GetAccountHistory());
        }
    }
}

