using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.HR
{
    internal class Manager : Employee
    {

        public Manager(string first, string last, string em, DateTime bd, double rate) : base(first, last, em, bd, rate)
        {
        }

        public Manager(string first, string last, string em, DateTime bd) : base(first, last, em, bd, 0)
        {
        }

        public void AttendMeeting(int duration)
        {
            NumberOfHoursWorked += duration;
            Console.WriteLine($"Manager {FirstName} {LastName} is now attending a long meeting for a duration of {duration} hours!");
        }

        //overriding give bonus of employee class
        public override void GiveBonus()
        {
            if(NumberOfHoursWorked > 5) {
                Console.WriteLine($"{FirstName} {LastName} got a management bonus of 500!");
            }
            else
            {
                Console.WriteLine($"{FirstName} {LastName} got a management bonus of 250!");
            }
        }
    }
}