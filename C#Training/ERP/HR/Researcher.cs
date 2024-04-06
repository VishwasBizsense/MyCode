using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.HR
{
    internal class Researcher :Employee
    {
        private string? _researchArea; // Nullable field for research area

        public string? ResearchArea // Nullable property for research area
        {
            get { return _researchArea; }
            set { _researchArea = value; }
        }


        public Researcher(string first, string last, string em, DateTime bd) : base(first, last, em, bd)
        {
            // No need to initialize ResearchArea here, as it's already nullable
        }

        public Researcher(string first, string last, string em, DateTime bd, double rate, string? area)
            : base(first, last, em, bd, rate)
        {
            ResearchArea = area;
        }

        private int? _numberOfPieTastesInvented=0;

        public int? NumberOfPieTastesInvented
        {
            get {return _numberOfPieTastesInvented; }
            set {_numberOfPieTastesInvented=value; } 
        }


        public void ResearchNewPieTastes(int researchHours) {
            NumberOfHoursWorked+=researchHours;
            
            if(new Random().Next(100) > 50)
            {
                NumberOfPieTastesInvented++;
                Console.WriteLine($"Researcher {FirstName} {LastName} has invented a new pie taste!\nTotal number of pies invented : {NumberOfPieTastesInvented}\n");
            }
            else
            {
                Console.WriteLine($"Researcher {FirstName} {LastName} is still working on a new pie taste!");
            }
        }
    }
}
