using System;

namespace ERP
{
  internal class Employee
  {
    //-------------------------------------- Constructor overloading ---------------------------------------------------

    public Employee(string first, string last, string em, DateTime bd) : this(first, last, em, bd, 0)
    {

    }
    public Employee(string first, string last, string em, DateTime bd, double rate)
    {
      firstName = first;
      lastName = last;
      email = em;
      birthday = bd;
      hourlyRate = rate;
    }
    public string firstName;
    public string lastName;
    public string email;

    public int numberOfHoursWorked;
    public double wage;
    public double hourlyRate;
    public DateTime birthday;

    public int minimalHoursWorkedUnit = 1;
    public void PerformWork()
    {
      // numberOfHoursWorked++;
      // System.Console.WriteLine($"{firstName} {lastName} has worked for {numberOfHoursWorked} hour(s)!");
      PerformWork(minimalHoursWorkedUnit);
    }
    public void PerformWork(int numberOfHours)
    {
      numberOfHoursWorked += numberOfHours;
      System.Console.WriteLine($"{firstName} {lastName} has worked for {numberOfHours} hour(s)!");
    }

    public void DisplayEmployeeDetails()
    {
      System.Console.WriteLine($" \nFirst Name : \t {firstName} \nLast Name : \t {lastName} \nEmail : \t {email} \nBirthday : \t {birthday.ToShortDateString()}\n");
    }


    public double ReceiveWage(bool resetHours = true)
    {
      wage = numberOfHoursWorked * hourlyRate;
      System.Console.WriteLine($"{firstName} {lastName} has received a wage of {wage} for {numberOfHoursWorked} hour(s) of work.");

      if (resetHours)
      {
        numberOfHoursWorked = 0;
      }
      return wage;
    }

    //:::::::::::::::::::::::: Without ref keyword ::::::::::::::::::::::::::::::::::::::::::::::::::::::::;

    public int CalculateBonus(int bonus)
    {
      if (numberOfHoursWorked > 10)
      {
        bonus *= 2;
      }
      System.Console.WriteLine($"Employee got a bonus of {bonus}");
      return bonus;
    }
    //::::::::::::::::::::::::::::::::::::: Using ref keyword ::::::::::::::::::::::::::::::::::::::::::::::::
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
    s
    //::::::::::::::::::::::::: Using out keyword for the same task :::::::::::::::::::::::::::::::::::::::::::
    public int CalculateBonus(int bonus, out int bonusTax)
    {
      bonusTax = 0;
      if (numberOfHoursWorked > 10)
      {
        bonus *= 2;
      }
      if (bonus >= 200)
      {
        bonusTax = bonus / 10;
        bonus -= bonusTax;
      }
      System.Console.WriteLine($"Employee got a bonus of {bonus} and tax on bonus is {bonusTax}");
      return bonus;
    }`

  }
}