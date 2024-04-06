using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.HR
{
    internal class Developer :Employee
    {
        private string _programmingLanguage;
        private string _currentProject;
        public string ProgrammingLanguage
        {
            get { return _programmingLanguage; }
            set { _programmingLanguage = value; }
        }
        public string CurrentProject
        {
            get { return _currentProject; }
            set { _currentProject = value; }
        }

        public Developer(string first, string last, string em, DateTime bd) : base(first, last, em, bd)
        {
            // Default constructor without specifying programming language
        }

        public Developer(string first, string last, string em, DateTime bd, double rate, string language,string project)
            : base(first, last, em, bd, rate)
        {
            ProgrammingLanguage = language;
            CurrentProject = project;
        }
    }
}
