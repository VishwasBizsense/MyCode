using BethanysPieShop;

int amount =10000;
int months = 12;
int extraDays = 10;

//------------calling a method from utilities class----------------------
int wage = utilities.CalculateYearlyWage(amount,months);
Console.WriteLine($"Yearly Wage is : {wage}");


wage = utilities.CalculateYearlyWage(amount, months,extraDays);
Console.WriteLine($"Yearly wage with {extraDays} extra days is : {wage}");

//----------------using named arguments-------------------------------
wage = utilities.CalculateYearlyWage(extraDays:15 , monthlyWage:20000 ,numberOfMonthsWorked:6);
Console.WriteLine($"(Using name arguments) Yearly wage with extra days is : {wage}");



//--------------------calling expresssion bodied method-----------------------
wage = utilities.CalculateYearlyWageExpressionBodied(amount, months);
Console.WriteLine($"(with expression bodied) Yearly wage is : {wage}");

utilities.EmployeeInfo("Vishwas","Gandhi");


//
string toTry = "20/02/2024";
DateTime date;
utilities.TryParseMethod(toTry, out date);

bool isDate = DateTime.TryParse(toTry, out date);
if(isDate) Console.WriteLine(date);

int month,year;
utilities.GetMonthAndYear(out month, out year);
Console.WriteLine($"Current Month is {month} and Year {year}");


SBuilder.ExecuteStringBuilder();

Console.ReadLine();

