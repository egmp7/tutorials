using System;
using Xunit;
using BankLibrary;

namespace BankingTest
{
    public class BasicTest
    {
        [Fact]
        public void Test1()
        {
            Assert.True(true);
        }

        [Fact]
        public void Test2()
        {

            var account = new BankAccount("Peter La Anguila", 300);

            // test negative balance

            Assert.Throws<InvalidOperationException>(


                ()=> account.MakeWithdrawal(
                    400,
                    DateTime.Now,
                    "Attempt to overdraw")

                );
        }

        [Fact]
        public void Test3()
        {
            Assert.Throws<ArgumentOutOfRangeException>(

                ()=> new BankAccount("Peter La Anguila", -55)
                );
        }
    }
}

