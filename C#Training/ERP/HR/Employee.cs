using System;
using Newtonsoft.Json;


namespace ERP.HR
{
    internal class Employee
    {
        private string _firstName;
        private string _lastName;
        private string _email;
        private int _numberOfHoursWorked;
        private double _wage;
        private double _hourlyRate;
        private DateTime _birthday;
        private EmployeeType _employeeType;
        private int _minimalHoursWorkedUnit = 1;

        public string FirstName
        {
            get { return _firstName; }
            set { _firstName = value; }
        }

        public string LastName
        {
            get { return _lastName; }
            set { _lastName = value; }
        }

        public string Email
        {
            get { return _email; }
            set { _email = value; }
        }

        public int NumberOfHoursWorked
        {
            get { return _numberOfHoursWorked; }

            set { _numberOfHoursWorked = value; }
        }

        public double Wage
        {
            get { return _wage; }
            set { _wage = value; }
        }

        public double HourlyRate
        {
            get { return _hourlyRate; }
            set
            {
                if (_hourlyRate < 0)
                {
                    _hourlyRate = 0;
                }
                else _hourlyRate = value;
            }
        }

        public DateTime Birthday
        {
            get { return _birthday; }
            set { _birthday = value; }
        }

        public EmployeeType EmployeeType
        {
            get { return _employeeType; }
            set { _employeeType = value; }
        }

        public int MinimalHoursWorkedUnit
        {
            get { return _minimalHoursWorkedUnit; }
            set { _minimalHoursWorkedUnit = value; }
        }
        //-------------------------------------- Constructor overloading ---------------------------------------------------

        // public Employee(string first, string last, string em, DateTime bd) : this(first, last, em, bd, 0)
        // {

        // }
        // public Employee(string first, string last, string em, DateTime bd, double rate)
        // {
        //   firstName = first;
        //   lastName = last;
        //   email = em;
        //   birthday = bd;
        //   hourlyRate = rate;
        // }
        //:::::::::::::::::::::::::::::Constructor using enum :::::::::::::::::::::::::::::::::::::::::::::::::

        // Constructors
        public Employee(string first, string last, string em, DateTime bd) : this(first, last, em, bd, 0, EmployeeType.Sales)
        {
        }

        public Employee(string first, string last, string em, DateTime bd, double rate, EmployeeType empType)
        {
            FirstName = first;
            LastName = last;
            Email = em;
            Birthday = bd;
            HourlyRate = rate;
            EmployeeType = empType;
        }



        public void PerformWork()
        {
            PerformWork(MinimalHoursWorkedUnit);
        }

        public void PerformWork(int numberOfHours)
        {
            NumberOfHoursWorked += numberOfHours;
            Console.WriteLine($"{FirstName} {LastName} has worked for {numberOfHours} hour(s)!");
        }

        public void DisplayEmployeeDetails()
        {
            Console.WriteLine($" \nFirst Name : \t {FirstName} \nLast Name : \t {LastName} \nEmail : \t {Email} \nBirthday : \t {Birthday.ToShortDateString()}\n Designation : \t {EmployeeType}\n");
        }


        // public double ReceiveWage(bool resetHours = true)
        // {

        //   if (employeeType == EmployeeType.Manager)
        //   {
        //     wage = numberOfHoursWorked * hourlyRate * 1.5;
        //     System.Console.WriteLine($"Since {firstName} is a Manager , wgae is 1.5 times employee.");
        //   }
        //   else
        //   { wage = numberOfHoursWorked * hourlyRate; }
        //   System.Console.WriteLine($"{firstName} {lastName} has received a wage of {wage} for {numberOfHoursWorked} hour(s) of work.");

        //   if (resetHours)
        //   {
        //     numberOfHoursWorked = 0;
        //   }
        //   return wage;
        // }

        //::::::::::::::::::::::: wage according to different employeetypes ::::::::::::::::::::::::
        #region Receive wage method for different enums
        public double ReceiveWage(bool resetHours = true)
        {
            double wageMultiplier = 1.0;

            switch (EmployeeType)
            {
                case EmployeeType.Manager:
                    wageMultiplier = 2.0;
                    Console.WriteLine($"{FirstName} {LastName} is a Manager, so wage is 2 times the regular rate.");
                    break;
                case EmployeeType.Research:
                    wageMultiplier = 1.5;
                    Console.WriteLine($"{FirstName} {LastName} is in Research, so wage is 1.5 times the regular rate.");
                    break;
                case EmployeeType.StoreManager:
                    wageMultiplier = 1.8;
                    Console.WriteLine($"{FirstName} {LastName} is a Store Manager, so wage is 1.8 times the regular rate.");
                    break;
                default:
                    Console.WriteLine($"{FirstName} {LastName} is a standard employee, wage is calculated as usual.");
                    break;
            }

            Wage = NumberOfHoursWorked * HourlyRate * wageMultiplier;

            Console.WriteLine($"{FirstName} {LastName} has received a wage of {Wage} for {NumberOfHoursWorked} hour(s) of work.");

            if (resetHours)
            {
                NumberOfHoursWorked = 0;
            }
            return Wage;
        }

        #endregion


        public int CalculateBonus(int bonus)
        {
            if (NumberOfHoursWorked > 10)
            {
                bonus *= 2;
            }
            Console.WriteLine($"Employee got a bonus of {bonus}");
            return bonus;
        }

        // public int CalculateBonus(int bonus, ref int bonusTax)
        // {
        //   if (numberOfHoursWorked > 10)
        //   {
        //     bonus *= 2;
        //   }
        //   if (bonus >= 200)
        //   {
        //     bonusTax = bonus / 10;
        //     bonus -= bonusTax;
        //   }
        //   System.Console.WriteLine($"Employee got a bonus of {bonus} and tax on bonus is {bonusTax}");
        //   return bonus;
        // }
        public int CalculateBonus(int bonus, out int bonusTax)
        {
            bonusTax = 0;
            if (NumberOfHoursWorked > 10)
            {
                bonus *= 2;
            }
            if (bonus >= 200)
            {
                bonusTax = bonus / 10;
                bonus -= bonusTax;
            }
            Console.WriteLine($"Employee got a bonus of {bonus} and tax on bonus is {bonusTax}");
            return bonus;
        }


        //Convert to jason methods ---------------------------------------------
        public string ConvertToJson()
        {
            string json = JsonConvert.SerializeObject(this);
            return json;
        }

    }
}