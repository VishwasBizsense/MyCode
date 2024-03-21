// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

//Variables
int monthlyWage = 1234;
int month  = 12,bonus=1000;

bool isActive =true;
double rating =99.25;


double ratePerHour =12.34;
int numberOfHoursWorked = 165;
double currentWage = ratePerHour *numberOfHoursWorked +1000;
System.Console.WriteLine("current wage is "+currentWage);

ratePerHour +=3;
System.Console.WriteLine("Rate per hour is :"+ratePerHour);

if(currentWage>2000)
  System.Console.WriteLine("Top Paid Employee");

  int numberOfEmployees=15;
  numberOfEmployees--;
  System.Console.WriteLine(numberOfEmployees);

//-------------built in members for int and char

  int intMaxValue = int.MaxValue;
  int intMinValue = int.MinValue;
  double doubleMaxValue = double.MaxValue;
  System.Console.WriteLine(intMaxValue);
  System.Console.WriteLine(intMinValue);
  System.Console.WriteLine(doubleMaxValue);


  char myChar='a';
  bool isWhiteSpace = char.IsWhiteSpace(myChar);
  bool isDigit = char.IsDigit(myChar);
  bool isPunctuation = char.IsPunctuation(myChar);
  bool isLetter = char.IsLetter(myChar);
  System.Console.WriteLine("whitespace?"+isWhiteSpace+" digit?"+isDigit+" punctuation?"+isPunctuation+" letter?"+isLetter);

  char upperCase = char.ToUpper(myChar);
  System.Console.WriteLine("Upper Case"+upperCase);


  // Working with dates

  DateTime employeeStartDate =new DateTime(2024,03,21); //format is yyyy-mm-dd
  System.Console.WriteLine("start date is "+employeeStartDate);
  DateTime today = DateTime.Today;
  System.Console.WriteLine("today is "+today);
  DateTime towDaysLater = today.AddDays(2);
  System.Console.WriteLine("after two days"+towDaysLater);

  // ----------------Define a DateTime object to work with
  DateTime someDateTime = DateTime.Now; // You can replace this with any DateTime you want to work with

  //-------------- Get the day of the week
  DayOfWeek day = someDateTime.DayOfWeek;
        Console.WriteLine("Day of the week: " + day);

  //------------- Check if the date/time is during daylight saving time
 bool areWeInDST = TimeZoneInfo.Local.IsDaylightSavingTime(someDateTime);
  Console.WriteLine("Are we in daylight saving time: " + areWeInDST);



  //creating a date time using constructor
 DateTime hireDate = new DateTime(2024, 3, 21, 10, 52, 0);
        Console.WriteLine("Hired on: " + hireDate);

        DateTime exitDate = new DateTime(2025, 3, 21);
        Console.WriteLine("Exit date: " + exitDate);

        DateTime startDate = hireDate.AddDays(15);
        Console.WriteLine("Start date: " + startDate);

        DateTime startHour = DateTime.Now;
        TimeSpan workTime = new TimeSpan(7, 0, 0);
        DateTime endHour = startHour.Add(workTime);
        System.Console.WriteLine($"Starting at {startHour} for {workTime} hours and ending at {endHour}");

        string dateString = "2024-03-21";
        DateTime parsedDate = DateTime.Parse(dateString);
        Console.WriteLine($"{dateString} is parsed to {parsedDate}");

        int comparisonResult = startDate.CompareTo(hireDate);
        Console.WriteLine($"Comparing hire date to working date: {comparisonResult}");


//logical operators
var age = 23;
bool isValid = (age>18) && (age<40);
System.Console.WriteLine("is age valid ? "+isValid);

//conditional if/else

System.Console.WriteLine("Enter You age :");
var hireAge = int.Parse(Console.ReadLine());

if(hireAge<18)
  System.Console.WriteLine("too young to hire");
else if (hireAge>18)
  System.Console.WriteLine("Welcome onboard");

//using a switch statement

switch(hireAge){
  case <18:
    System.Console.WriteLine("Too young to join");
    break;
  case >60:
    System.Console.WriteLine("Too old to join");
    break;
  case >18:
    System.Console.WriteLine("You can join");
    break;
  default:
    System.Console.WriteLine("Start with the application");
    break;
}

for(var i=10;i>=0;i--){
  System.Console.WriteLine(i);
}
System.Console.WriteLine("Launch!");

