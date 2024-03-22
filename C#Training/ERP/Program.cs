// See https://aka.ms/new-console-template for more information
using ERP;

//----------------------------------creating an Employee object using constructor--------------------------------------------
System.Console.WriteLine("Creating an employee !");
System.Console.WriteLine("------------------------\n");

Employee vishwas = new Employee("Vishwas", "Gandhi", "vg@bizsense.in", new DateTime(2001, 1, 02), 25);

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

Employee yogesh = new Employee("Yogesh", "Gunwal", "yg@bizsense.in", new DateTime(1947, 2, 28), 10);

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
    50
);
//reference variables pointing to same memory location
Employee e2 = e1;
e2.firstName = "Vasu";
//reference variable pointing to different memory location but having same value
Employee e3 = new Employee(
    "Vishwas",
    "Gandhi",
    "vishwas@gmail.com",
    new DateTime(2001, 12, 02),
    50
);
Console.WriteLine($"whether e1=e2 :{e1 == e2}");
Console.WriteLine($"whether e1=e3 :{e1 == e3}");
Console.WriteLine($"E1 firstname = {e1.firstName} & E2 firstname = {e2.firstName}");
//::::::::::::::::::::::::::::::::::::::::::::: Pass by reference :::::::::::::::::::::::::::::::::::::::::::::::

vishwas.PerformWork(25);
// int minimumBonus = 100;

// int receivedBonus = vishwas.CalculateBonus(minimumBonus);
// System.Console.WriteLine($"Minimum bonus is {minimumBonus} and Vishwas got a bonus of {receivedBonus}");
int minimumBonus = 100;
int bonusTax = 0;
int receivedBonus = vishwas.CalculateBonus(minimumBonus, ref bonusTax);
System.Console.WriteLine($"Minimum bonus is {minimumBonus} and Vishwas got bonus of {receivedBonus} with tax of {bonusTax}");
