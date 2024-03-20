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



  int intMaxValue = int.MaxValue;
  int intMinValue = int.MinValue;
  double doubleMaxValue = double.MaxValue;
  System.Console.WriteLine(intMaxValue);
  System.Console.WriteLine(intMinValue);
  System.Console.WriteLine(doubleMaxValue);


  char myChar='1';
  bool isWhiteSpace = char.IsWhiteSpace(myChar);
  bool isDigit = char.IsDigit(myChar);
  bool isPunctuation = char.IsPunctuation(myChar);

  System.Console.WriteLine(isWhiteSpace+" "+isDigit+" "+isPunctuation);