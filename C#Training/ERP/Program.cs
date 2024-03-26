// See https://aka.ms/new-console-template for more information
using ERP.HR;
using ERP.Accounting;

//----------------------------------creating an Employee object using constructor--------------------------------------------
System.Console.WriteLine("Creating an employee !");
System.Console.WriteLine("------------------------\n");

Employee vishwas = new Employee("Vishwas", "Gandhi", "vg@bizsense.in", new DateTime(2001, 1, 02), 25, EmployeeType.Manager);

//---------------------invoking methods from employee class through the instance created--------------------
vishwas.DisplayEmployeeDetails();

vishwas.PerformWork();
vishwas.PerformWork(5);
vishwas.PerformWork();
vishwas.PerformWork();

double vishwasReceived = vishwas.ReceiveWage(true);
System.Console.WriteLine($"Wage paid (Message from ERP) :{vishwasReceived}");


System.Console.WriteLine("Creating another employee !");
System.Console.WriteLine("------------------------\n");

Employee yogesh = new Employee("Yogesh", "Gunwal", "yg@bizsense.in", new DateTime(1947, 2, 28), 10, EmployeeType.Sales);

//---------------------invoking methods from employee class through the instance created--------------------
yogesh.DisplayEmployeeDetails();

yogesh.PerformWork();
yogesh.PerformWork(3);
yogesh.PerformWork();
yogesh.PerformWork();
yogesh.PerformWork();

double yogeshReceived = yogesh.ReceiveWage(true);
System.Console.WriteLine($"Wage paid (Message from ERP) :{yogeshReceived}");



//::::::::::::::::::::::::::::::::::::::::::::: How classes are reference types :::::::::::::::::::::::::::::::::::::::

Employee e1 = new Employee(
    "Vishwas",
    "Gandhi",
    "vishwas@gmail.com",
    new DateTime(2001, 12, 02),
    50,
    EmployeeType.Sales
);
//reference variables pointing to same memory location
Employee e2 = e1;
e2.FirstName = "Vasu";
//reference variable pointing to different memory location but having same value
Employee e3 = new Employee(
    "Vishwas",
    "Gandhi",
    "vishwas@gmail.com",
    new DateTime(2001, 12, 02),
    50,
    EmployeeType.Sales
);
Console.WriteLine($"whether e1=e2 :{e1 == e2}");
Console.WriteLine($"whether e1=e3 :{e1 == e3}");
Console.WriteLine($"E1 firstname = {e1.FirstName} & E2 firstname = {e2.FirstName}");
//::::::::::::::::::::::::::::::::::::::::::::: Pass by reference :::::::::::::::::::::::::::::::::::::::::::::::

vishwas.PerformWork(25);
// int minimumBonus = 100;

// int receivedBonus = vishwas.CalculateBonus(minimumBonus);
// System.Console.WriteLine($"Minimum bonus is {minimumBonus} and Vishwas got a bonus of {receivedBonus}");
// int minimumBonus = 100;
// int bonusTax = 0;
// int receivedBonus = vishwas.CalculateBonus(minimumBonus, ref bonusTax);
// System.Console.WriteLine($"Minimum bonus is {minimumBonus} and Vishwas got bonus of {receivedBonus} with tax of {bonusTax}");

int minimumBonus = 100;
int bonusTax;
int receivedBonus = vishwas.CalculateBonus(minimumBonus, out bonusTax);
System.Console.WriteLine($"Minimum bonus is {minimumBonus} and Vishwas got bonus of {receivedBonus} with tax of {bonusTax}");


//::::::::::::::::::::::::::::::::::::::::::::::Strings are reference types :::::::::::::::::::::::::::::::

string name1 = "Vishwas";
string name2 = name1;
name1 += "Gandhi";

Console.WriteLine($"Name1 is {name1}");
Console.WriteLine($"name2 is {name2}");

//uppercase doesnt affectthe original but its copy
string upperCaseName = name1.ToUpper();
Console.WriteLine($"Name1 is {name1}");
Console.WriteLine($"Upper case name is {upperCaseName}");
//multiple strings are created
string indexes = string.Empty;
for (int i = 0; i < 2500; i++)
{
    indexes += i.ToString();
}


//:::::::::::::::::::::::::::::::::::::: Using json packages :::::::::::::::::::::::::::

Employee vishwasG = new Employee("Vishwas", "Gandhi", "vg@bizsense.in", new DateTime(2001, 1, 02), 25, EmployeeType.Manager);
string jsonString = vishwasG.ConvertToJson();
System.Console.WriteLine($"vishwas as json :{jsonString}");

//:::::::::::::::::::::::::::::::::::::::::getting salary according to different wage types :::::::::::::::::::


Console.WriteLine("------------------------------------------------------\n");

Employee Vishwas = new Employee("Vishwas", "Gandhi", "vg@bizsense.in", new DateTime(2001, 1, 02), 25, EmployeeType.Manager);
Employee john = new Employee("John", "Doe", "john@example.com", new DateTime(1995, 5, 15), 20, EmployeeType.Research);
Employee emily = new Employee("Emily", "Smith", "emily@example.com", new DateTime(1998, 10, 20), 30, EmployeeType.Sales);
Employee sarah = new Employee("Sarah", "Johnson", "sarah@example.com", new DateTime(1990, 3, 8), 35, EmployeeType.StoreManager);

//---------------------invoking methods from employee class through the instance created--------------------
Vishwas.DisplayEmployeeDetails();
Vishwas.PerformWork();
Vishwas.PerformWork(5);
Vishwas.PerformWork();
Vishwas.PerformWork();
double VishwasReceived = Vishwas.ReceiveWage(true);
Console.WriteLine($"Wage paid (Message from ERP) : {VishwasReceived}");

Console.WriteLine("-----------------------------------------------------------------\n");

john.DisplayEmployeeDetails();
john.PerformWork();
john.PerformWork(7);
john.PerformWork();
double johnReceived = john.ReceiveWage(true);
Console.WriteLine($"Wage paid (Message from ERP) : {johnReceived}");

Console.WriteLine("---------------------------------------------------------\n");

emily.DisplayEmployeeDetails();
emily.PerformWork();
emily.PerformWork(3);
emily.PerformWork();
double emilyReceived = emily.ReceiveWage(true);
Console.WriteLine($"Wage paid (Message from ERP) : {emilyReceived}");

Console.WriteLine("----------------------------------------------------------------------\n");

sarah.DisplayEmployeeDetails();
sarah.PerformWork();
sarah.PerformWork(4);
sarah.PerformWork();
double sarahReceived = sarah.ReceiveWage(true);
Console.WriteLine($"Wage paid (Message from ERP) : {sarahReceived}");

System.Console.WriteLine("---------------------------------------------------------------------------");


WorkTask task;
task.description = "Taking and interview";
task.hours = 2;
task.PerformTask();

System.Console.WriteLine("---------------------------------------------------------------------------");

List<Employee> employees = new List<Employee>();

#region // Generate a thousand employees using a for loop

// for (int i = 1; i <= 1000; i++)
// {
//     // Create a unique GUID for the employee
//     Guid employeeGuid = Guid.NewGuid();

//     // Create an employee object with the GUID and add it to the list
//     employees.Add(new Employee(
//         $"Employee{employeeGuid.ToString().Substring(0, 8)}", // Use first 8 characters of GUID as firstName
//         $"Lastname{employeeGuid.ToString().Substring(8, 8)}", // Use next 8 characters of GUID as lastName
//         $"email{i}@example.com",
//         DateTime.Now.AddYears(-25), // Example birthday
//         25.0, // Example hourly rate
//         EmployeeType.Sales // Example employee type
//     ));
// }

// // Output the total number of employees in the list
// Console.WriteLine($"Total number of employees: {employees.Count}");
// Console.ReadLine();
// GC.Collect();
#endregion


//:::::::::::::::::::::::::::::::::::::::::adding value to a positional record::::::::::::::::::::::::::::::
Account account = new Account("123456789");
// account.AccountNumber = "1234567890";  //this will generate an error as records are immutable


//::::::::::::::creating an array of type Employee and making them work for random no. of hours:::::::::::::::::::::::
Employee[] allEmployees = new Employee[4];
allEmployees[0] = Vishwas;
allEmployees[1] = john;
allEmployees[2] = emily;
allEmployees[3] = sarah;

foreach (Employee e in allEmployees)
{
    e.DisplayEmployeeDetails();
    var workingHours = new Random().Next(30);
    e.PerformWork(workingHours);
}

//::::::::::::::::::::::::: Implementing arrray methods :::::::::::::::::::::::::::::::::::::::::::::::

Console.Write("Enter the number of employees: ");
int numberOfEmployees = int.Parse(Console.ReadLine());

// Create an array to store employee IDs
int[] employeeIds = new int[numberOfEmployees];

// Get input for employee IDs
for (int i = 0; i < numberOfEmployees; i++)
{
    Console.Write($"Enter ID for employee {i + 1}: ");
    employeeIds[i] = int.Parse(Console.ReadLine());
}

// Display the array
Console.WriteLine("\nEmployee IDs:");
DisplayArray(employeeIds);

// Reverse the array
Array.Reverse(employeeIds);
Console.WriteLine("\nReversed Employee IDs:");
DisplayArray(employeeIds);

// Copy the array
int[] copiedArray = new int[employeeIds.Length];
employeeIds.CopyTo(copiedArray, 0);
Console.WriteLine("\nCopied Employee IDs:");
DisplayArray(copiedArray);

// Sort the array
Array.Sort(employeeIds);
Console.WriteLine("\nSorted Employee IDs:");
DisplayArray(employeeIds);

// Display the length of the array
Console.WriteLine($"\nLength of Employee IDs array: {employeeIds.Length}");


// Method to display the elements of an array
static void DisplayArray(int[] array)
{
    foreach (var item in array)
    {
        Console.WriteLine(item);
    }
}

//::::::::::::::::::::::::::::::: properties accessing through employee.cs:::::::::::::::::::
Vishwas._email = "xyz";