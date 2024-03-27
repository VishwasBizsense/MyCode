using ERP.HR;

namespace ERP.tests
{
    public class EmployeeTests
    {
        [Fact]
        public void Perform_Adds_NumberOfHours()
        {
            //Arrange
            Employee dan = new Employee("Dan", "koh", "john.doe@example.com",
                                         new DateTime(1990, 5, 15), 20.0,
                                         "Main Street", "123", "12345", "Anytown");
            int numberOfHours = 3;

            //Act
            dan.PerformWork(numberOfHours);

            //Assert
            Assert.Equal(numberOfHours,dan.NumberOfHoursWorked);

        }
        [Fact]
        public void Perform_Adds_DefaultNumberOfHours_IfNoValueSpecified() {
            //Arrange
            Employee dan = new Employee("Dan", "koe", "john.doe@example.com",
                                         new DateTime(1990, 5, 15), 20.0,
                                         "Main Street", "123", "12345", "Anytown");

            //Act
            dan.PerformWork();

            //Assert
            Assert.Equal(1, dan.NumberOfHoursWorked);

        }
    }
}