using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.HR
{
    internal class JuniorResearcher :Researcher
    {
        public JuniorResearcher(string first, string last, string em, DateTime bd) : base(first, last, em, bd)
        {
            // No need for additional constructor logic
        }

        public JuniorResearcher(string first, string last, string em, DateTime bd, double rate, string? area)
            : base(first, last, em, bd, rate, area)
        {
            // No need for additional constructor logic
        }
    }
}
