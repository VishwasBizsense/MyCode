using System;

namespace BethanysPieShop
{
	internal class utilities


	{	//----------------Method Overloading --------------------------------------------------------
		public static int CalculateYearlyWage(int monthlyWage, int numberOfMonthsWorked)
		{
			return monthlyWage * numberOfMonthsWorked;
		}		



		public static int CalculateYearlyWage(int monthlyWage, int numberOfMonthsWorked,int extraDays)
		{
			DateTime currentDate = DateTime.Now;

			// Get the number of days in the current month
			int daysInCurrentMonth = DateTime.DaysInMonth(currentDate.Year, currentDate.Month);

			return (monthlyWage * numberOfMonthsWorked)+(monthlyWage/daysInCurrentMonth)*extraDays;
		}


        // -----using expression bodies syntax for writing methods (using fat arrow)--------------------------------------
        public static int CalculateYearlyWageExpressionBodied(int monthlyWage, int numberOfMonthsWorked)=> monthlyWage * numberOfMonthsWorked;

		//----------------------String manipulation------------------------

		public static void EmployeeInfo(string fname,string lname)
		{
			//string fname="Vishwas "
			//string lname="Gandhi"

			//------------concatenation-----------------
			string fullName = fname +" "+ lname;
			string employeeId = String.Concat(fname.ToUpper(), "-", lname.ToUpper());
			string email = String.Concat(fname.ToLower(), ".", lname.ToLower(), "@bizsense.in");


			Console.WriteLine($" Full name - {fullName} \n Employee ID - {employeeId}\n Email ID - {email}");

			int nameLength = fullName.Length;
            Console.WriteLine($"Employee name length - {nameLength}");

            if (email.Contains("bizsense"))
                Console.WriteLine($"{fullName} is a bizsense employee");

			// Ensure substring doesn't exceed fullName length
            string substring = fullName.Substring(0, Math.Min(6, fullName.Length));
            Console.WriteLine($"Part of your name is {substring}");


        }


		//-----------------try parse and out keyword-------------------------
		public static void TryParseMethod(string dateString, out DateTime date)
		{
           // DateTime date;
            if (DateTime.TryParse(dateString,out date))
            {
                Console.WriteLine($"Parsing succeeded. The parsed date is: {date:yyyy-MM-dd}");
            }
            else
            {
				date = DateTime.Now;
                Console.WriteLine("Parsing failed. The input is not a valid date.");
            }
        }
        public static void GetMonthAndYear(out int x, out int y)
        {
            x = DateTime.Now.Month; // Assigning values to 'x' and 'y' parameters
            y = DateTime.Now.Year;
        }




    }
}