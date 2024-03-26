using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.HR
{
    internal struct WorkTask
    {
        public string description;
        public int hours;


        public void PerformTask()
        {
            Console.WriteLine($"Task of {description} has been performed for {hours} hours.");
        }
    }
}
